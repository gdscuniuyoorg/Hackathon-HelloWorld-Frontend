import { Link, Outlet, Route, Routes } from "react-router-dom";
import search from "../../../assets/Images/svg/search.svg";
import styles from "../Admin.module.css";
import Welcome from "./WelCome";

export default function AllStudents() {
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

      <Routes>
        <Route
          path="/admin/students"
          element={(
            <nav className={`${styles.d_flex} ${styles.allStudentsNav}`}>
              <div>All Students</div>
              <Link to="/admin/students/new">
                <button>Add New Students</button>
              </Link>
            </nav>
          )}
        />
      </Routes>

      <Outlet />
    </>
  );
}
