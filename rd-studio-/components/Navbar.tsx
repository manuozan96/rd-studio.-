import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css"
import Menu from './Menu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/Logo.svg" alt="Logo" />
      <button className={styles.button} onClick={toggleMenu}>
        <img src="/Boton-rayas.svg" alt="Menu" />
      </button>
      {isOpen && <Menu />}
    </div>
  );
};

export default Navbar;