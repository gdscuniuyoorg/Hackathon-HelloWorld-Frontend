import Welcome from "../../AdminDashBoard/Main/WelCome";
import styles from "../../AdminDashBoard/Main/Attendance.module.css";
import Article from "./Article";
// import { useEffect } from "react";
// import { APIDOMAIN } from "@/constants";

export default function StudentDashBoard() {

  // useEffect(() => {

  //   (async () => {

  //     const url = new URL("/api/venuelist", APIDOMAIN);
  //     const headers = {
  //       Authorizaton: `Token ${localStorage.getItem("token")}`
  //     };

  //     try {

  //       const response = await fetch(url, { headers });
  //       if (!response.ok) throw new Error("Can't fetch venue list!")

  //       // Venues data
  //       const data = await response.json();

  //     } catch (error) {
  //       console.error(`Error:`, error.message)
  //     }

  //   })()

  // }, [])

  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>DashBoard</p>
          <div className={styles.welcome}>
            <Welcome Name="Stephen" />
          </div>
        </nav>
        <section>
          <Article
            title="UPCOMING LESSON"
            imgSrc="#"
            header="Percentage - Class 5"
            paragraph="George"
            date="Monday, 27th October"
            time="12:00 PM Onward"
          />
        </section>
      </section>
    </>
  );
}
