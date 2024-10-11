import styles from "./Table.module.css";
import TableData from "./TableData";
import { studentData } from "./data";

/*
Attendance List
URL: /api/attendancelist/
Method: \GET\
Description: Get attendance records for a course within a time frame
Parameter	Type	Required	Example
course	string	yes	GRE111
date	string	yes	2024-10-05
start_time	string	yes	16:45:34
stop_time	string	yes	16:45:34
*/

export default function Table() {

  // TODO fetch actual data to display in the table

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
            key={index}
            sn={index + 1}
            name={student.name}
            email={student.email}
            regNumber={student.reg}
            course={student.course}
            attendanceRecord={student.record}
          />
        );
      })}
    </section>
  );
}
