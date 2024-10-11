<<<<<<< HEAD
import { useState } from "react";
import search from "../../../assets/Images/svg/search.svg";
import styles from "../Admin.module.css";
import Table from "./Table";
import Welcome from "./WelCome";
import AddNewStudent from "./AddNewStudent";
export default function AllStudents() {
  const [change, setChange] = useState(false);
  function addNewStudent() {
    setChange(true);
  }
  return (
    <>
      <nav
        className={`${styles.d_flex} ${styles.allStudentsNav} ${styles.welcome}`}
      >
        <form action="#" className={styles.form}>
          <div className={styles.d_flex}>
            <img src={search} alt="search" />
            <input
              type="text"
              name="searchStudents"
              id="searchStudents"
              placeholder="search"
            />
          </div>
        </form>

        <Welcome />
      </nav>
      {!change && (
        <nav className={`${styles.d_flex} ${styles.allStudentsNav}`}>
          <div>All Students</div>
          <button onClick={addNewStudent}>Add New Students</button>
        </nav>
      )}
      {!change && <Table />}
      {change && <AddNewStudent />}
    </>
  );
}
=======
import { useState } from "react";
import search from "../../../assets/Images/svg/search.svg";
import styles from "../Admin.module.css";
import Table from "./Table";
import Welcome from "./WelCome";
import AddNewStudent from "./AddNewStudent";
export default function AllStudents() {
  const [change, setChange] = useState(false);
  function addNewStudent() {
    setChange(true);
  }
  return (
    <>
      <nav
        className={`${styles.d_flex} ${styles.allStudentsNav} ${styles.welcome}`}
      >
        <form action="#" className={styles.form}>
          <div className={styles.d_flex}>
            <img src={search} alt="search" />
            <input
              type="text"
              name="searchStudents"
              id="searchStudents"
              placeholder="search"
            />
          </div>
        </form>

        <Welcome />
      </nav>
      {!change && (
        <nav className={`${styles.d_flex} ${styles.allStudentsNav}`}>
          <div>All Students</div>
          <button onClick={addNewStudent}>Add New Students</button>
        </nav>
      )}
      {!change && <Table />}
      {change && <AddNewStudent />}
    </>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
