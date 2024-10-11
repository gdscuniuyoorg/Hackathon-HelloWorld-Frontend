import styles from "./Attendance.module.css";
import Welcome from "./WelCome";
export default function Lecturers() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>Lectures</p>
          <div className={styles.welcome}>
            <Welcome />
          </div>
        </nav>
      </section>
    </>
  );
}
