import styles from "./LandingPageSectionOne.module.css";
import avatar from "../assets/sectionAvatar.png";
import { Link } from "react-router-dom";

export default function LandingPageSectionOne() {
  return (
    <section className={`d_flex ${styles.section}`}>
      <div>
        <img src={avatar} alt="attendance avatar" />
      </div>
      <header>
        <h2>Explore Our Academic Offerings Chart Your Path to Success</h2>
        <p>
          Hello world institute is committed to academic excellence, innovation,
          entrepreneurship, and community engagement. Our colleges and staff are
          dedicated to providing a world-class education that prepares you for
          success in your chosen field.
          <br />
          <br />
          With our range of diverse courses, we deliver an educational
          experience that will enable the younger generation to meet their
          future career ambitions. We do this through teaching, research, and
          partnerships with organizations worldwide.
        </p>
        <div className={`d_flex ${styles.cta}`}>
          <Link to="/signup">
            <button>
              TAKE ATTENDANCE
            </button>
          </Link>
          <Link to="/signup">
            <button>
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
}