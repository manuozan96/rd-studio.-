import React from 'react';
import styles from ".././styles/Header.module.css"

const ProyectoComponente = () => {
  return (
    <div className={styles.proyectoComponente}>
      <div className={styles.seccion1}>Restaurantes & Cafés</div>
      <div className={styles.seccion2}>
        <p>Bares</p>
        <p>Hoteles</p>
        <p>Oficinas</p>
      </div>
      <div className={styles.seccion3}>
        <p>Comercial & Retail</p>
        <p>Residencial</p>
      </div>
    </div>
  );
};

export default ProyectoComponente;
