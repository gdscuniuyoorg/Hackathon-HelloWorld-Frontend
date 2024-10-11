import Welcome from "../../AdminDashBoard/Main/WelCome";
import styles from "../../AdminDashBoard/Main/Attendance.module.css";
export default function StudentAttendance() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>Attendance</p>
          <div className={styles.welcome}>
            <Welcome Name="Stephen" />
          </div>
        </nav>
      </section>
    </>
  );
}
