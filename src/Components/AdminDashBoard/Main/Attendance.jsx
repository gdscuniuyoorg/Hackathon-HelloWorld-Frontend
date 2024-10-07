import Welcome from "./WelCome";
import styles from "./Attendance.module.css";
export default function Attendance() {
  return (
    <section className={`${styles.attendance}`}>
      <nav className={`${styles.nav} d_flex`}>
        <p>Student Attendance</p>
        <div className={styles.welcome}>
          <Welcome Name="Prof Stephen" />
        </div>
      </nav>
    </section>
  );
}
