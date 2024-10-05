import { useState } from "react";
import Navigation from "../Navigation";
import styles from "./Admin.module.css";
import AllStudents from "./Main/AllStudent";
import DashBorad from "./Main/DashBoard";
import Attendance from "./Main/Attendance";
import GenerateReport from "./Main/GenerateReport";
import Lecturers from "./Main/Lecturers";

export default function Admin() {
  const [display, setDisplay] = useState("Students");
  function handleDisplay(selectedDisplay) {
    setDisplay(selectedDisplay);
  }
  return (
    <section className={`${styles.d_flex} ${styles.admin}`}>
      <Navigation onDisplay={handleDisplay} />
      <main className={`${styles.main} ${styles.width}`}>
        {display === "Dashboard" && <DashBorad />}
        {display === "Lectures" && <Lecturers />}
        {display === "Students" && <AllStudents />}
        {display === "Attendance" && <Attendance />}
        {display === "Generate Report" && <GenerateReport />}
      </main>
    </section>
  );
}
