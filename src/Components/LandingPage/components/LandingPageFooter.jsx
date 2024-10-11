import styles from "./LandingPageFooter.module.css";
export default function LandingPageFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={` ${styles.cta}`}>
          <div className={styles.about}>
            <div className={styles.logo}>AttendancePro</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
              enim?
            </p>
          </div>
          <div className={styles.about}>
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>Sign up & Login </li>
              <li>Student Dashboard</li>
              <li>Admin Dasshboard</li>
              <li>location tracker</li>
              <li>Attendance tracker</li>
            </ul>
          </div>
          <div className={styles.about}>
            <h4>Company</h4>
            <ul>
              <li>Terms Conditions</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.about}>
            <h4>Community</h4>
            <ul>
              <li>Help Center</li>
              <li>Forum</li>
              <li>Webinars</li>
              <li>Professionals</li>
            </ul>
          </div>
        </section>
        <p className={styles.copyright}>© 2024 Hello World Hackathon </p>
      </footer>
    </>
  );
}
