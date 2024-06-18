import React from "react";
import Link from "next/link";
import styles from "../styles/PortadaProyecto.module.css";

// Definir el componente PortadaProyecto

type PortadaProyectoProps = {
  imagen?: string;
  ruta?: any;
  texto?: string;
  width?: string;
  height?: string;
};

const PortadaProyecto = ({
  imagen,
  ruta,
  texto,
  width,
  height,
}: PortadaProyectoProps) => {
  return (
    <div>
      <Link href={ruta}>
        <div className={styles.contenedor}>
          <img
            src={imagen}
            alt="Portada del proyecto"
            className={styles.imagen}
            style={{ width: width, height: height  }}
          />
          <div className={styles.t}>{texto}</div>
        </div>
      </Link>
      <div></div>
    </div>
  );
};

export default PortadaProyecto;
