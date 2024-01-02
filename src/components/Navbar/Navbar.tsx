import React from "react";
import styles from "./Navbar.module.css";
import { Container } from "../../globalStyle";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <Container>
      <nav>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="MSTSKP" />
          <p>MSTSKP</p>
        </div>
        <ul className={styles.menuWrapper}>
          <li>Top</li>
          <li>Features</li>
          <li>Reasons</li>
          <li>Alternatives</li>
        </ul>
        <div className={styles.buttonNavWrapper}>
          <button>Mendaftar</button>
          <button>Login</button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
