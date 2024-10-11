import styles from "./Attendance.module.css";
import Welcome from "./WelCome";
export default function GenerateReport() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>Generate Report</p>
          <div className={styles.welcome}>
            <Welcome />
          </div>
        </nav>
      </section>
    </>
  );
}
