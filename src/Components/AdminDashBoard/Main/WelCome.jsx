import notification from "../../../assets/Images/svg/notify.svg";
import moon from "../../../assets/Images/svg/moon.svg";
import styles from "../Admin.module.css";
export default function Welcome() {
  return (
    <>
      <div className={`${styles.d_flex} ${styles.gap}`}>
        <div className={`${styles.d_flex} ${styles.gap} ${styles.icons}`}>
          <span>
            <img src={notification} alt="notifications" />
          </span>
          <span>
            <img src={moon} alt="avatar" />
          </span>
        </div>
        <div className={`${styles.d_flex} ${styles.gap}`}>
          <span className={styles.avatar}></span>
          <span>Welcome!, Prof Stephen</span>
        </div>
      </div>
    </>
  );
}
