import styles from "./LandingPageHeader.module.css";
import avater from "../assets/headerAvater.png";
import { Link } from "react-router-dom";
export default function LandingPageHeader() {
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
          <Link to="/signup">
            <button>
              Get Started
            </button>
          </Link>
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
            <Link to="/signup">
              <button>
                Get Started
              </button>
            </Link>
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