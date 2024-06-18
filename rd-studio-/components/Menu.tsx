import { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Menu.module.css" // Asegúrate de crear este archivo CSS

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.button}>
        {isOpen ? 'X' : '☰'}
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <Link href="/home">
            <p className={styles.link}>Home</p>
          </Link>
          <Link href="/proyectos">
            <p className={styles.link}>Proyectos</p>
          </Link>
          <Link href="/nosotros">
            <p className={styles.link}>Nosotros</p>
          </Link>
          <Link href="/contacto">
            <p className={styles.link}>Contacto</p>
          </Link>
          {/* Añade tus iconos de redes sociales aquí */}
        </div>
      )}
    </div>
  );
}