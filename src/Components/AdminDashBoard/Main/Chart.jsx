import styles from "./Chart.module.css";
export default function Chart() {
  return (
    <div className={styles.studentAttendance}>
      <h4>Student Attendance</h4>
      <div>
        <div className={styles.chart}></div>
        <ul>
          <li className="d_flex">
            <span className={styles.total}></span>
            Total Students
          </li>
          <li className="d_flex">
            <span className={styles.total}></span>
            Present Students
          </li>
          <li className="d_flex">
            <span className={styles.total}></span>
            Absent Students
          </li>
        </ul>
      </div>
    </div>
  );
}
