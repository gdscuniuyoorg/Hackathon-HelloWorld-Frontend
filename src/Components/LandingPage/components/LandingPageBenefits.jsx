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
          <p>LReduces administrative burden </p>
        </div>

        <div>
          <h4>Benefit Two</h4>
          <p>Automated process</p>
        </div>

        <div>
          <img src="" alt="illustration" />
          <h4>Benefit Three</h4>
          <p>Streamlined processes </p>
        </div>

        <div>
          <h4>Notice</h4>
          <p>We're still in beta version, glitches will arise </p>
        </div>

        <div>
          <img src="" alt="illustration" />
          <h4>Requirements</h4>
          <p>Please use chromium based browsers </p>
        </div>
        <div>
          <img src="" alt="illustration" />
          <h4>Requirements</h4>
          <p>Please enable GPS </p>
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
