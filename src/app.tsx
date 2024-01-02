// import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css'

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./globalStyle";
import background from "./assets/background.png";
import backgroundTablet from "./assets/backgroundTablet.png";
import backgroundPhone from "./assets/backgroundPhone.png";
import { useMediaQuery } from "./hooks/use-media-query";
import Features from "./components/Features/Features";
import Reasons from "./components/Reasons/Reasons";
import Alternatives from "./components/Alternatives/Alternatives";
import Footer from "./components/Footer/Footer";

export function App() {
  const isDekstop = useMediaQuery("(min-width:1440px)");
  const isTablet = useMediaQuery("(min-width: 576px)");

  const backgroundResponsive = () => {
    if (isDekstop) {
      return background;
    } else if (isTablet) {
      return backgroundTablet;
    }
    return backgroundPhone;
  };

  return (
    <div>
      <GlobalStyle />
      <div
        style={{
          position: "relative",
        }}
      >
        <Navbar />
        <Hero />
        <img
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "-1",
            width: "100%",
            maxWidth: "2560px",
            maxHeight: "1370px",
            minHeight: "980px",
            objectFit: "fill",
          }}
          src={backgroundResponsive()}
          alt="background"
        />
      </div>
      <Features />
      <Reasons />
      <Alternatives />
      <Footer />
    </div>
  );
}
