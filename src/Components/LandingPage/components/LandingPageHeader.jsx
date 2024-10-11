<<<<<<< HEAD
/* eslint-disable react/prop-types */
import styles from "./LandingPageHeader.module.css";
import avater from "../assets/headerAvater.png";
export default function LandingPageHeader({ GetStarted }) {
  return (
    <section className={styles.header}>
      <section className={styles.container}>
        <nav className={`d_flex ${styles.nav}`}>
          <div className={styles.logo}>AttendancePro</div>
          <ul className={`d_flex`}>
            <li>Home</li>
            <li>About Us</li>
            <li>E-Portal</li>
            <li>Help</li>
          </ul>
          <button onClick={() => GetStarted()}>Get Started</button>
        </nav>
        <header className={`${styles.headerText} d_flex `}>
          <div className={styles.text}>
            <h1>
              <span>AttendancePro</span>
            </h1>
            <p>
              Smart Attendance Tracking System, Shaping the future through
              education and innovation
            </p>
            <button onClick={() => GetStarted()}>Get Started</button>
          </div>
          <div>
            <img src={avater} alt="avater" />
          </div>
        </header>
        <div className={styles.scrollBar}>
          <div className={styles.scrollBarOne}>
            <span style={{ "--delay": 1 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 2 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 3 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 4 }}>AttendancePro *</span>
            <span style={{ "--delay": 5 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 6 }}>AttendancePro *</span>
          </div>
          <div className={styles.scrollBarTwo}>
            <span>
              Smart Attendance Tracking System, Shaping the future through
              education and innovation
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
=======
/* eslint-disable react/prop-types */
import styles from "./LandingPageHeader.module.css";
import avater from "../assets/headerAvater.png";
export default function LandingPageHeader({ GetStarted }) {
  return (
    <section className={styles.header}>
      <section className={styles.container}>
        <nav className={`d_flex ${styles.nav}`}>
          <div className={styles.logo}>AttendancePro</div>
          <ul className={`d_flex`}>
            <li>Home</li>
            <li>About Us</li>
            <li>E-Portal</li>
            <li>Help</li>
          </ul>
          <button onClick={() => GetStarted()}>Get Started</button>
        </nav>
        <header className={`${styles.headerText} d_flex `}>
          <div className={styles.text}>
            <h1>
              <span>AttendancePro</span>
            </h1>
            <p>
              Smart Attendance Tracking System, Shaping the future through
              education and innovation
            </p>
            <button onClick={() => GetStarted()}>Get Started</button>
          </div>
          <div>
            <img src={avater} alt="avater" />
          </div>
        </header>
        <div className={styles.scrollBar}>
          <div className={styles.scrollBarOne}>
            <span style={{ "--delay": 1 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 2 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 3 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 4 }}>AttendancePro *</span>
            <span style={{ "--delay": 5 }}>AttendancePro *</span>{" "}
            <span style={{ "--delay": 6 }}>AttendancePro *</span>
          </div>
          <div className={styles.scrollBarTwo}>
            <span>
              Smart Attendance Tracking System, Shaping the future through
              education and innovation
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
