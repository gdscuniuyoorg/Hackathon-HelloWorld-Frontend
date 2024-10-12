import { Link } from "react-router-dom";
import styles from "./LandingPageBenefits.module.css";

export default function LandingPageBenefits() {
  return (
    <section className={styles.section}>
      <header>
        <h2>Benefits of AttendancePro</h2>
        <p>
          Whatever your next step is, AttendancePro has the best reliable
          attendance for you.
        </p>
      </header>
      <section>
        <div>
          <h4>Benefit One</h4>
          <p>Smart and effective attendace tracking system</p>
        </div>

        <div>
          <h4>Benefit Two</h4>
          <p>Accurate data: Reliable and consistent data</p>
        </div>

        <div>
          <h4>Benefit Three</h4>
          <p>Convenience: Allows students to clock in easily using their mobile devices</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Support our ministry, let's make life easy for you</p>
        </div>

        <div>
          <h4>Notice</h4>
          <p>This is still in Beta mode so you might experience glitches</p>
        </div>
        <div>
          <h4>Requirements</h4>
          <p>PLEAE USE CHROMIUM BASED BROWSERS, MOST PREFERABLY CHROME</p>
        </div>
      </section>
      <div>
        <Link to="/signup">
          <button>
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}
