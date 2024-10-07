import Welcome from "../../AdminDashBoard/Main/WelCome";
import styles from "../../AdminDashBoard/Main/Attendance.module.css";
import Article from "./Article";
export default function StudentDashBoard() {
  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>DashBoard</p>
          <div className={styles.welcome}>
            <Welcome Name="Stephen" />
          </div>
        </nav>
        <section>
          <Article
            title="UPCOMING LESSON"
            imgSRc="#"
            header="Percentage - Class 5"
            paragraph="George"
            date="Monday, 27th October"
            time="12:00 PM Onward"
          />
        </section>
      </section>
    </>
  );
}
