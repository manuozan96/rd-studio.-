import styles from "../styles/TextTable.module.css";

function TextTable() {
  return (
    <div className={styles.backInterna}>
      <div className={styles.container}>
        <div className={styles.section}>
          <p className={styles.text}>AÑO</p>
          <p className={styles.text}>2023</p>
        </div>
        <div className={styles.section}>
          <p className={styles.text}>LOCACIÓN</p>

          <p className={styles.text}>BOGOTÁ, COLOMBIA</p>
        </div>
        <div className={styles.section}>
          <p className={styles.text}>TAMAÑO</p>
          <p className={styles.text}>340 M2</p>
        </div>
        <div className={styles.section}>
          <p className={styles.text}>ENTREGABLE</p>
          <p className={styles.text}>
            DISEÑO INTERIOR / ARQUITECTURA <br /> CONSTRUCCIÓN / MOBILIARIO
          </p>
        </div>
        <div className={styles.section}>
          <p className={styles.projectDescription}>
            Aquí una descripción del proyecto{" "}
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </strong>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            <strong>ex ea commodo consequat</strong>.<br/> 
            <br/> 
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris{" "}
            <strong>nisi ut aliquip </strong>ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextTable;
