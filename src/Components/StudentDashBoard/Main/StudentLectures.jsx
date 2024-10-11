import styles from "../../AdminDashBoard/Main/Attendance.module.css";
import Welcome from "../../AdminDashBoard/Main/WelCome";
export default function StudentLectures() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>Lectures</p>
          <div className={styles.welcome}>
            <Welcome Name="Stephen" />
          </div>
        </nav>
      </section>
    </>
  );
}
