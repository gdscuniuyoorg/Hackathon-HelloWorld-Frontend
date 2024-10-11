import { Outlet } from "react-router-dom";
import styles from "../AdminDashBoard/Admin.module.css";
import StudentNav from "./StudentNav";

export default function Student() {
  return (
    <>
      <section className={`d_flex `}>
        <StudentNav />
        <main className={`${styles.main} ${styles.width}`}>
          <Outlet />
        </main>
      </section>
    </>
  );
}