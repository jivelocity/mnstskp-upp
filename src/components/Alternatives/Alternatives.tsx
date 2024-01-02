import { Container } from "../../globalStyle";
import styles from "./Alternatives.module.css";
import backgroundAlternatif from "../../assets/backgroundAlternatif.png";
import backgroundAlternatifTablet from "../../assets/backgroundAlternatifTablet.png";
import backgroundAlternatifPhone from "../../assets/backgroundAlternatifPhone.png";

import alterOne from "../../assets/alternatifOne.png";
import alterTwo from "../../assets/alternatifTwo.png";
import { useMediaQuery } from "../../hooks/use-media-query";
import { FiArrowRight } from "react-icons/fi";

const Alternatives: React.FC = () => {
  const isDekstop = useMediaQuery("(min-width:1440px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const background = () => {
    if (isDekstop) {
      return backgroundAlternatif;
    } else if (isTablet) {
      return backgroundAlternatifTablet;
    }
    return backgroundAlternatifPhone;
  };

  return (
    <div className={styles.alternativesWrapper}>
      <img
        className={styles.backgroundAlter}
        src={background()}
        alt="background"
      />
      <Container>
        <div className={styles.textAlterWrapper}>
          <h3>Alternatives</h3>
          <div className={styles.titleAlterWrapper}>
            <h1>
              Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
            </h1>
            <p>
              Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
              Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
              dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
              media lo.
            </p>
          </div>
          <div className={styles.cardsAlterWrapper}>
            <div className={styles.cardAlter}>
              <img src={alterOne} alt="buffer" />
              <p>
                Buffer.com - Buffer is the most intuitive, affordable, and
                authentic way to reach more people on social media.
              </p>
              <button>
                Learn More <FiArrowRight size={24} />
              </button>
            </div>
            <div className={styles.cardAlter}>
              <img src={alterTwo} alt="sendible" />
              <p>
                Sendible.com - Grow your audience, attract new customers, and
                reach your social media goals with an all-in-one platform.
              </p>
              <button>
                Learn More <FiArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Alternatives;
