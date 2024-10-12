/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "../../AdminDashBoard/Main/Attendance.module.css";
import Welcome from "../../AdminDashBoard/Main/WelCome";
import { APIDOMAIN } from "@/constants";
import { useState } from "react";

/**
 * @param {Venue} param0 
 */
const Venue = ({
  full_name,
  short_name,
  latitude,
  longtitude
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="font-bold text-lg">
          {full_name}
        </h4>
        <p>
          {short_name}
        </p>
      </div>
      <div className="text-sm flex justify-between border-b border-solid border-gray-300">
        <span>{longtitude}</span>
        <span>{latitude}</span>
      </div>
      <div>
        <button className="px-4 py-2 rounded-md bg-[#f76011] text-white font-medium tracking-wide">
          Present
        </button>
      </div>
    </div>
  )
}

export default function StudentLectures() {

  const [venues, setVenues] = useState([])

  useEffect(() => {

    (async () => {

      const url = new URL("/api/venuelist", APIDOMAIN);
      const headers = {
        Authorizaton: `Token ${localStorage.getItem("token")}`
      };

      try {

        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error("Can't fetch venue list!")

        // Venues data
        const data = await response.json();
        setVenues(data);

      } catch (error) {
        console.error(`Error:`, error.message)
      }

    })()

  }, [])

  return (
    <>
      <section className={`${styles.attendance}`}>
        <nav className={`${styles.nav} d_flex`}>
          <p>Lectures</p>
          <div className={styles.welcome}>
            <Welcome Name="Stephen" />
          </div>
        </nav>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((
            /** @type {Venue} */
            venue, index
          ) => (
            <Venue
              key={index}
            {...venue}
            />
          ))}
        </div>
      </section>
    </>
  );
}
