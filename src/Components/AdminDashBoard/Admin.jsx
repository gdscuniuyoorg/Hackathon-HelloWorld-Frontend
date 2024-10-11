import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./Admin.module.css";

export default function Admin() {
  return (
    <section className={`${styles.d_flex} ${styles.admin}`}>
      <Navigation />
      <main className={`${styles.main} ${styles.width}`}>
        <Outlet />
      </main>
    </section>
  );
}
