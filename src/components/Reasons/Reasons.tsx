import { Container } from "../../globalStyle";
import styles from "./Reasons.module.css";
import love from "../../assets/love.png";
import wee from "../../assets/wee.png";
import ayam from "../../assets/ayam.png";

const reasons = [
  {
    title: "Kamu Tidak Punya Kekasih",
    description:
      "Sudah pasti orang yang tidak punya kekasih akan memiliki waktu luang yang banyak, jadi ya lo iseng aja gitu datang ke website ini.",
    image: love,
  },
  {
    title: "Lo Weibuh",
    description:
      "Iyh bener, biasanya wibu kalo nggak halu waifu suka iseng nggak jelas, termasuk mengunjungi website ini tanpa alasan yang jelas hehehe.",
    image: wee,
  },
  {
    title: "Kok Gambar Ayam?",
    description:
      "Lah ngatur. Nggak tau lagi gwej alasan yang ketiga, biar bagus aja desainnya. Kalo cuman dua jadinya nggak bagus hehe.",
    image: ayam,
  },
];

const Reasons: React.FC = () => {
  return (
    <Container>
      <div className={styles.reasonsWrapper}>
        <div className={styles.titleReasonsWrapper}>
          <h3>Terus gimana?</h3>
          <h1>Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?</h1>
          <p>
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </p>
        </div>
        <div className={styles.reasonsCards}>
          {reasons.map((reason, index) => (
            <div className={styles.reasonsCard} key={index}>
              <img src={reason.image} alt={reason.title} />
              <div className={styles.reasonsCardText}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Reasons;
