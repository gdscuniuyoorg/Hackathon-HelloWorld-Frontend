import lectures from "../../assets/Images/svg/dashboard.svg";
import dashboard from "../../assets/Images/svg/home.svg";
import logout from "../../assets/Images/svg/logout.svg";
import settings from "../../assets/Images/svg/setting.svg";
import styles from ".././Navigation.module.css";
import NavigationList from "../NavigationList";

export default function StudentNav() {
  return (
    <nav className={`${styles.nav} ${styles.d_flex}`}>
      <div className={`${styles.nav_cta} ${styles.width}`}>
        <div className={styles.logo}>Hello</div>
        <ul>
          <NavigationList
            image={dashboard}
            content="Dashboard"
            href="/student"
          />
          <NavigationList
            image={lectures}
            content="Lectures"
            href="/student/lectures"
          />
        </ul>
      </div>
      <footer className={`${styles.footer} ${styles.width}`}>
        <ul>
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
