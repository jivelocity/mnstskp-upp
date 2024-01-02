import React from "react";
import { Container } from "../../globalStyle";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        background: "#fff",
      }}
    >
      <Container>
        <footer>
          <div className={styles.footerMenuWrapper}>
            <ul>
              <li>Alternatif</li>
              <li>Buffer</li>
              <li>Sendible</li>
              <li>Later</li>
              <li>Social Pilot</li>
            </ul>
            <ul>
              <li>Sitemap</li>
              <li>Top</li>
              <li>Features</li>
              <li>Reasons</li>
              <li>Alternatives</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Help</li>
            </ul>
            <ul>
              <li>Get in touch</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Github</li>
            </ul>
          </div>
          <div className={styles.footerTextWrapper}>
            <p>Copryright © 2023 - Dev rajibaa | Design Nauval</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
