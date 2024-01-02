import React from "react";
import { Container } from "../../globalStyle";
import styles from "./Features.module.css";

import {
  FiArrowRightCircle,
  FiDatabase,
  FiZap,
  FiServer,
  FiGlobe,
} from "react-icons/fi";

const features = [
  {
    title: "Database",
    icon: FiDatabase,
    description:
      "Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya.",
  },
  {
    title: "Server",
    icon: FiServer,
    description:
      "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik! ",
  },
  {
    title: "Listrik",
    icon: FiZap,
    description:
      "Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.",
  },
  {
    title: "Lingkungan",
    icon: FiGlobe,
    description:
      "Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!",
  },
];

const Features: React.FC = () => {
  return (
    <Container>
      <div className={styles.featuresWrapper}>
        <div className={styles.textFeaturesWrapper}>
          <h3>Kenapa Sih?</h3>
          <h1>Kenapa Kami Tidak Memberikan Insight Apapun?</h1>
          <p>
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
            apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
            semata-mata ingin menyelamatkan planet bumi.
          </p>
          <div className={styles.buttonWrapper}>
            <button>
              Pelajari Lebih Lanjut <FiArrowRightCircle size={20} />
            </button>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          {features.map(({ title, icon, description }) => {
            const Icon = icon;
            return (
              <div className={styles.card}>
                <div className={styles.card__title}>
                  <div className={styles.card__icon}>
                    <Icon size={20} />
                  </div>
                  <h2>{title}</h2>
                </div>
                <p className={styles.card__description}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Features;
