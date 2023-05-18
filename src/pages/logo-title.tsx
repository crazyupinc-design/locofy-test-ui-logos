import { FunctionComponent } from "react";
import styles from "./logo-title.module.css";
const LogoTitle: FunctionComponent = () => {
  return (
    <div className={styles.logoTitle}>
      <b className={styles.title}>Clients Section</b>
      <div className={styles.content}>
        <div className={styles.logos}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo3@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo4@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo5@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTitle;
