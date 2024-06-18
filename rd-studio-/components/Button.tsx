import React from "react";
import styles from "../styles/Button.module.css"

const Button = ({ contenido }) => {
  return <button className={styles.button}>{contenido}</button>; // Añade la clase a tu botón
};

export default Button;
