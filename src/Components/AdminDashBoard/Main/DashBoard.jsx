import styles from "./Attendance.module.css";
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
      </section>
    </>
  );
}
