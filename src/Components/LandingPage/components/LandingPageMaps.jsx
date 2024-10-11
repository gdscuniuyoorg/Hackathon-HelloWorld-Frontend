import { useEffect } from "react";
import styles from "./LandingPageMaps.module.css";

import getLocationFromBrowser from "../../../maps";

export default function LandingPageMaps() {
  useEffect(getLocationFromBrowser, []);
  return (
    <section className={styles.section}>
      <h3>Location Cross-matching</h3>
      <div id="map" className={styles.map}></div> {/* Map container */}
      <div id="status"></div> {/* For error messages */}
    </section>
  );
}