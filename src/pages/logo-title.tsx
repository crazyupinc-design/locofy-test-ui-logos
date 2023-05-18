import { FunctionComponent } from "react";
import styles from "./logo-title.module.css";
const LogoTitle: FunctionComponent = () => {
  return (
    <div className={styles.logoTitle}>
      <b className={styles.title}>Clients Section</b>
      <div className={styles.content}>
        <a className={styles.logos}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon2} alt="" src="/logo2@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon3} alt="" src="/logo3@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon4} alt="" src="/logo4@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon5} alt="" src="/logo5@2x.png" />
          </div>
        </a>
        <a className={styles.logos1}>
          <div className={styles.logoWrapperParent}>
            <div className={styles.logoWrapper6}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.logoWrapper7}>
              <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
            </div>
            <div className={styles.logoWrapper8}>
              <img className={styles.logoIcon2} alt="" src="/logo2@2x.png" />
            </div>
          </div>
          <div className={styles.logoWrapperGroup}>
            <div className={styles.logoWrapper6}>
              <img className={styles.logoIcon3} alt="" src="/logo3@2x.png" />
            </div>
            <div className={styles.logoWrapper10}>
              <img className={styles.logoIcon4} alt="" src="/logo4@2x.png" />
            </div>
            <div className={styles.logoWrapper11}>
              <img className={styles.logoIcon5} alt="" src="/logo5@2x.png" />
            </div>
          </div>
        </a>
        <a className={styles.logos2}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo6@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon1} alt="" src="/logo7@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon2} alt="" src="/logo8@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon3} alt="" src="/logo9@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon4} alt="" src="/logo10@2x.png" />
          </div>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon5} alt="" src="/logo11@2x.png" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default LogoTitle;
