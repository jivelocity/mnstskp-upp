import React from "react";
import styles from "./Hero.module.css";
import { Container } from "../../globalStyle";
import imageHero from "../../assets/imageHero.png";
import youtube from "../../assets/yt.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import tiktok from "../../assets/tiktok.png";
import circle1 from "../../assets/circle1.png";
import circle2 from "../../assets/circle2.png";

const Hero: React.FC = () => {
  return (
    <Container>
      <div className={styles.heroLayout}>
        <div className={styles.heroWrapper}>
          <div className={styles.titleHeroWrapper}>
            <h3>MANA SAYA TAU SAYA KAN PENCURRY</h3>
            <h1>
              Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
            </h1>
            <p>
              Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
              memberikan kamu pelbagai insight, karena kami anti-mainstream maka
              kami akan melakukan sebaliknya.
            </p>
            <div className={styles.leftDecor}>
              <img src={youtube} alt="youtube" />
              <img src={circle1} alt="buletan" />
              <img src={ig} alt="ig" />
            </div>
            <div className={styles.rightDecor}>
              <img src={fb} alt="youtube" />
              <img src={circle2} alt="buletan" />
              <img src={tiktok} alt="ig" />
            </div>
          </div>
          <div className={styles.buttonHeroWrapper}>
            <button>Memulai Sekarang</button>
            <button>
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18.833a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="m8.333 7.167 5 3.333-5 3.333V7.167Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Pelajari dulu</p>
            </button>
          </div>
        </div>
        <div>
          <img className={styles.imageHero} src={imageHero} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
