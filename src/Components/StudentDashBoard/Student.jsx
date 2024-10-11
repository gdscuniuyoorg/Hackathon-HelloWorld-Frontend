import StudentNav from "./StudentNav";
import { useState } from "react";
import styles from "../AdminDashBoard/Admin.module.css";
import StudentDashBoard from "./Main/StudentDashBoard";
import StudentLectures from "./Main/StudentLectures";
import StudentAttendance from "./Main/StudentAttendance";
export default function Student() {
  const [display, setDisplay] = useState("Dashboard");
  function handleDisplay(selectedDisplay) {
    setDisplay(selectedDisplay);
  }
  return (
    <>
      <section className={`d_flex `}>
        <StudentNav onDisplay={handleDisplay} />
        <main className={`${styles.main} ${styles.width}`}>
          {display === "Dashboard" && <StudentDashBoard />}
          {display === "Lectures" && <StudentLectures />}
          {display === "Attendance" && <StudentAttendance />}
          {display === "Generate Report" && <h1>Generate Report</h1>}
          {display === "Result" && <h1>Result</h1>}
          {display === "Location" && <h1>Location</h1>}
        </main>
      </section>
    </>
  );
}
