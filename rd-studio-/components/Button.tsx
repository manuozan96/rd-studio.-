import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  contenido: string;
}

const Button: React.FC<ButtonProps> = ({ contenido }) => {
  return <button className={styles.button}>{contenido}</button>;
};

export default Button;
