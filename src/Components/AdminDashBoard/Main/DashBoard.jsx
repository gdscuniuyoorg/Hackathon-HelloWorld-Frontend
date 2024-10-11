import styles from "./Attendance.module.css";
import Chart from "./Chart";
import Welcome from "./WelCome";
export default function DashBorad() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>DashBoard</p>
          <div className={styles.welcome}>
            <Welcome Name="Prof Stephen" />
          </div>
        </nav>
        <section className={styles.content}>
          <div className={styles.eachContenet}>
            <Chart />
          </div>

          <div className={`${styles.eachContenet} ${styles.map}`}></div>
          <div className={styles.eachContenet}>
            <Chart />
          </div>
        </section>
      </section>
    </>
  );
}
