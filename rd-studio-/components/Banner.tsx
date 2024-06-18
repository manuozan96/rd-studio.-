import React from "react";
import styles from "../styles/Banner.module.css";
import TextBanner from "./TextBanner";

const Banner: React.FC = () => {
  return <header className={styles.bannerbg}>
      <div>
      <TextBanner />
        </div>
  </header>;
};

export default Banner;
