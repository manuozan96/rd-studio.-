import React from "react";
import styles from "../styles/TextBanner.module.css";

const TextBanner: React.FC = () => {
  return (
    <div className={styles.textBanner}>
      <div>
        <h3>Restaurantes & cafés</h3>
      </div>
      <div className={styles.firstLine}>
        <h3>Bares HOTELES OFICINAS</h3>
      </div>
      <div>
        <h3>COMERCIAL & RETAIL RESIDENCIAL</h3>
      </div>
    </div>
  );
};

export default TextBanner;
