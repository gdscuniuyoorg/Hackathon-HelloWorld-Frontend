<<<<<<< HEAD
/* eslint-disable react/prop-types */
import styles from "./Table.module.css";
export default function TableData({
  sn,
  name,
  email,
  regNumber,
  attendanceRecord,
  course,
  headingClass,
}) {
  return (
    <>
      <article className={`d_flex ${styles.table}`}>
        <div className={!headingClass ? "" : `${styles.header}`}>{sn}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>{name}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>{email}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>
          {regNumber}
        </div>
        <div className={!headingClass ? "" : `${styles.header}`}>
          {attendanceRecord}
        </div>
        <div className={!headingClass ? "" : `${styles.header}`}>{course}</div>
      </article>
    </>
  );
}
=======
/* eslint-disable react/prop-types */
import styles from "./Table.module.css";
export default function TableData({
  sn,
  name,
  email,
  regNumber,
  attendanceRecord,
  course,
  headingClass,
}) {
  return (
    <>
      <article className={`d_flex ${styles.table}`}>
        <div className={!headingClass ? "" : `${styles.header}`}>{sn}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>{name}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>{email}</div>
        <div className={!headingClass ? "" : `${styles.header}`}>
          {regNumber}
        </div>
        <div className={!headingClass ? "" : `${styles.header}`}>
          {attendanceRecord}
        </div>
        <div className={!headingClass ? "" : `${styles.header}`}>{course}</div>
      </article>
    </>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
