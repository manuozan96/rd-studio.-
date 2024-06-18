import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = ({ children }) => {
  return (
    <div className={styles.layout}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className={styles.section}>
        <Link href="/home">
          <p className={styles.link}>
            Home <span className={styles.arrow}>&rarr;</span>
          </p>
        </Link>
        <Link href="/proyectos">
          <p className={styles.link}>
            Proyectos <span className={styles.arrow}>&rarr;</span>
          </p>
        </Link>
        <Link href="/nosotros">
          <p className={styles.link}>
            Nosotros <span className={styles.arrow}>&rarr;</span>
          </p>
        </Link>
        <Link href="/contacto">
          <p className={styles.link}>
            Contacto <span className={styles.arrow}>&rarr;</span>
          </p>
        </Link>
      </div>
      <div className={styles.newSection}>
        <div className={styles.subSection}>
          <p className={styles.officeText}>
            Oficina México <br />
            (+57) (1)  813 48 36 <br /> info@reinharddienes.com <br />
            CARRERA 7 #73-55{" "}
          </p>
        </div>
        <div className={styles.subSection}>
          <p className={styles.officeText}>
            Oficina México <br />
            (+57) (1)  813 48 36 <br /> info@reinharddienes.com <br />
            CARRERA 7 #73-55{" "}
          </p>
        </div>
      </div>
      <div className={styles.iconSection}>
        <img className={styles.icon} src="/Facebook.svg" alt="Facebook" />
        <img className={styles.icon} src="/Instagram.svg" alt="Instagram" />
        <img className={styles.icon} src="/Twitter.svg" alt="Twitter" />
      </div>
      {children}
    </div>
  );
};

export default Footer;
