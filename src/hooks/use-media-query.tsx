import * as React from "react";

export function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw new Error("useMediaQuery: Server-side rendering is not supported");
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
