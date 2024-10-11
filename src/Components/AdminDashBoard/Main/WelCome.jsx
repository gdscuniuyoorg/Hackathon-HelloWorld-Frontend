<<<<<<< HEAD
import notification from "../../../assets/Images/svg/notify.svg";
import moon from "../../../assets/Images/svg/moon.svg";
import styles from "../Admin.module.css";
// eslint-disable-next-line react/prop-types
export default function Welcome({ Name }) {
  return (
    <>
      <div className={`${styles.d_flex} ${styles.gap}`}>
        <div className={`${styles.d_flex} ${styles.gap} ${styles.icons}`}>
          <span>
            <img
              src={notification}
              alt="notifications"
              className={styles.notifications}
            />
          </span>
          <span>
            <img src={moon} alt="avatar" className={styles.notifications} />
          </span>
        </div>
        <div className={`${styles.d_flex} ${styles.gap}`}>
          <span className={styles.avatar}></span>
          <span>Welcome!, {Name}</span>
        </div>
      </div>
    </>
  );
}
=======
import notification from "../../../assets/Images/svg/notify.svg";
import moon from "../../../assets/Images/svg/moon.svg";
import styles from "../Admin.module.css";
// eslint-disable-next-line react/prop-types
export default function Welcome({ Name }) {
  return (
    <>
      <div className={`${styles.d_flex} ${styles.gap}`}>
        <div className={`${styles.d_flex} ${styles.gap} ${styles.icons}`}>
          <span>
            <img
              src={notification}
              alt="notifications"
              className={styles.notifications}
            />
          </span>
          <span>
            <img src={moon} alt="avatar" className={styles.notifications} />
          </span>
        </div>
        <div className={`${styles.d_flex} ${styles.gap}`}>
          <span className={styles.avatar}></span>
          <span>Welcome!, {Name}</span>
        </div>
      </div>
    </>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
