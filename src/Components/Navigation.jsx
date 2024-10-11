import lectures from "../assets/Images/svg/dashboard.svg";
import generateReport from "../assets/Images/svg/generate.svg";
import dashboard from "../assets/Images/svg/home.svg";
import logout from "../assets/Images/svg/logout.svg";
import settings from "../assets/Images/svg/setting.svg";
import students from "../assets/Images/svg/students.svg";
import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList";

export default function Navigation() {
  return (
    <nav className={`${styles.nav} ${styles.d_flex}`}>
      <div className={`${styles.nav_cta} ${styles.width}`}>
        <div className={styles.logo}>Hello</div>
        <ul>
          <NavigationList
            image={dashboard}
            content="Dashboard"
            href="/admin"
          />
          <NavigationList
            image={lectures}
            content="Lectures"
            href="/admin/lectures"
          />
          <NavigationList
            image={students}
            content="Students"
            href="/admin/students"
          />
          <NavigationList
            image={lectures}
            content="Attendance"
            href="/admin/attendance"
          />
          <NavigationList
            image={generateReport}
            content="Generate Report"
            href="/admin/report"
          />
        </ul>
      </div>
      <footer className={`${styles.footer} ${styles.width}`}>
        <ul>
          {/* TODO add proper logic for these tabs */}
          <NavigationList
            image={settings}
            content="Profiles and Setting"
            href="#"
          />
          <NavigationList
            image={logout}
            content="Logout"
            href="#"
          />
        </ul>
      </footer>
    </nav>
  );
}
