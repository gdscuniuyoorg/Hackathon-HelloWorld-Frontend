<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dashboard from "../assets/Images/svg/home.svg";
import lectures from "../assets/Images/svg/dashboard.svg";
import students from "../assets/Images/svg/students.svg";
import generateReport from "../assets/Images/svg/generate.svg";
import settings from "../assets/Images/svg/setting.svg";
import logout from "../assets/Images/svg/logout.svg";
import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList";
import { useState } from "react";

export default function Navigation({ onDisplay }) {
  const [display, setDisplay] = useState("Dashboard");
  function handleDisplay(selectedDisplay) {
    setDisplay(selectedDisplay);
    onDisplay((prev) => (prev = selectedDisplay));
  }
  return (
    <nav className={`${styles.nav} ${styles.d_flex}`}>
      <div className={`${styles.nav_cta} ${styles.width}`}>
        <div className={styles.logo}>Hello</div>
        <ul>
          <NavigationList
            image={dashboard}
            content="Dashboard"
            Display={() => handleDisplay("Dashboard")}
            itemSelected={display === "Dashboard"}
          />
          <NavigationList
            image={lectures}
            content="Lectures"
            Display={() => handleDisplay("Lectures")}
            itemSelected={display === "Lectures"}
          />
          <NavigationList
            image={students}
            content="Students"
            Display={() => handleDisplay("Students")}
            itemSelected={display === "Students"}
          />
          <NavigationList
            image={lectures}
            content="Attendance"
            Display={() => handleDisplay("Attendance")}
            itemSelected={display === "Attendance"}
          />
          <NavigationList
            image={generateReport}
            content="Generate Report"
            Display={() => handleDisplay("Generate Report")}
            itemSelected={display === "Generate Report"}
          />
        </ul>
      </div>
      <footer className={`${styles.footer} ${styles.width}`}>
        <ul>
          <NavigationList image={settings} content="Profiles and Setting" />
          <NavigationList image={logout} content="Logout" />
        </ul>
      </footer>
    </nav>
  );
}
=======
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dashboard from "../assets/Images/svg/home.svg";
import lectures from "../assets/Images/svg/dashboard.svg";
import students from "../assets/Images/svg/students.svg";
import generateReport from "../assets/Images/svg/generate.svg";
import settings from "../assets/Images/svg/setting.svg";
import logout from "../assets/Images/svg/logout.svg";
import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList";
import { useState } from "react";

export default function Navigation({ onDisplay }) {
  const [display, setDisplay] = useState("Dashboard");
  function handleDisplay(selectedDisplay) {
    setDisplay(selectedDisplay);
    onDisplay((prev) => (prev = selectedDisplay));
  }
  return (
    <nav className={`${styles.nav} ${styles.d_flex}`}>
      <div className={`${styles.nav_cta} ${styles.width}`}>
        <div className={styles.logo}>Hello</div>
        <ul>
          <NavigationList
            image={dashboard}
            content="Dashboard"
            Display={() => handleDisplay("Dashboard")}
            itemSelected={display === "Dashboard"}
          />
          <NavigationList
            image={lectures}
            content="Lectures"
            Display={() => handleDisplay("Lectures")}
            itemSelected={display === "Lectures"}
          />
          <NavigationList
            image={students}
            content="Students"
            Display={() => handleDisplay("Students")}
            itemSelected={display === "Students"}
          />
          <NavigationList
            image={lectures}
            content="Attendance"
            Display={() => handleDisplay("Attendance")}
            itemSelected={display === "Attendance"}
          />
          <NavigationList
            image={generateReport}
            content="Generate Report"
            Display={() => handleDisplay("Generate Report")}
            itemSelected={display === "Generate Report"}
          />
        </ul>
      </div>
      <footer className={`${styles.footer} ${styles.width}`}>
        <ul>
          <NavigationList image={settings} content="Profiles and Setting" />
          <NavigationList image={logout} content="Logout" />
        </ul>
      </footer>
    </nav>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
