import * as sc from "styled-components";

export const Container = sc.styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const GlobalStyle = sc.createGlobalStyle`
  :root {
    font-family: Source Sans Pro, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --darkColor: hsla(238, 48%, 10%, 1);
    --darkColor60: hsla(237, 26%, 17%, 1);
    --primaryColor: hsla(29, 97%, 55%, 1);
    --creamColor: hsla(29, 100%, 96%, 1);
    --creamDark:hsla(29, 100%, 92%, 1)
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }

  body{
    background: var(--creamColor);
  }

  html,
  body,
  #root {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;
