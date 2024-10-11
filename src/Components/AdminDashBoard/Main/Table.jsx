<<<<<<< HEAD
import styles from "./Table.module.css";
import TableData from "./TableData";
import { studentData } from "./data";
export default function Table() {
  return (
    <section className={styles.tableContainer}>
      <TableData
        sn="S/N"
        name="Name"
        email="Email"
        regNumber="Reg Number"
        attendanceRecord="Attendance"
        course="Course"
        headingClass
      />
      {studentData.map((student, index) => {
        return (
          <TableData
            sn={index + 1}
            name={student.name}
            email={student.email}
            regNumber={student.reg}
            attendanceRecord={student.record}
            course={student.course}
            key={student.name}
          />
        );
      })}
    </section>
  );
}
=======
import styles from "./Table.module.css";
import TableData from "./TableData";
import { studentData } from "./data";
export default function Table() {
  return (
    <section className={styles.tableContainer}>
      <TableData
        sn="S/N"
        name="Name"
        email="Email"
        regNumber="Reg Number"
        attendanceRecord="Attendance"
        course="Course"
        headingClass
      />
      {studentData.map((student, index) => {
        return (
          <TableData
            sn={index + 1}
            name={student.name}
            email={student.email}
            regNumber={student.reg}
            attendanceRecord={student.record}
            course={student.course}
            key={student.name}
          />
        );
      })}
    </section>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
