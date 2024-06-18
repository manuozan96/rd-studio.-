import React from "react";
import styles from "../styles/TitleNosotros.module.css";

const TitleNosotros = () => {
  return (
    <div>
      <div className={styles.nuestro}>NUESTRO</div>
      <div className={styles.equipo}>EQUIPO</div>
      <div
        style={{
          fontFamily: "DM Sans",
          fontWeight: "500",
          fontSize: "20px",
          color: "#0a0e0b",
          marginLeft: "20px", // Ajusta este valor para alinear el texto con "NUESTRO EQUIPO"
          marginTop: "-20px", // Ajusta este valor para mover el texto hacia arriba
          marginBottom: "115px", // Ajusta este valor para mover el texto hacia abajo
        }}
      >
        Meet the{" "}
        <span style={{ animation: "color-change 3s infinite" }}>team </span>
        <span style={{ animation: "color-change 3s 1s infinite" }}>
          who dares to create
        </span>
        <span style={{ animation: "color-change 3s 1s infinite" }}>
          {" "} <br /> differently.
        </span>
      </div>
    </div>
  );
};

export default TitleNosotros;