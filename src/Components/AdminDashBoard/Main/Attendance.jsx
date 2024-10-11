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
      <section className={` ${styles.attendanceContent}`}>
        <article className={styles.tableHead}>
          <div className={styles.search}>
            <form action="#">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
              />
            </form>
          </div>
          <div>
            Sun <br />
            15
          </div>
          <div>
            Mon <br />
            15
          </div>
          <div>
            Tue <br />
            15
          </div>
          <div>
            Wed <br />
            15
          </div>
          <div>
            Thur <br />
            15
          </div>
          <div>
            Fri <br />
            15
          </div>
          <div>
            Sat <br />
            15
          </div>
          <div className="">
            Sun <br />
            15
          </div>
          <div className="">
            Mon <br />
            15
          </div>
          <div className="">
            Tue <br />
            15
          </div>
          <div className="">
            Wed <br />
            15
          </div>
          <div className="">
            Thur <br />
            15
          </div>
          <div className="">
            Fri <br />
            15
          </div>
          <div className="">
            Sat <br />
            15
          </div>
        </article>
      </section>
    </section>
  );
}
