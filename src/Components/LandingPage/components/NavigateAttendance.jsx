import styles from "./NavigateAttendance.module.css";
import howTo from "../assets/howTo.png";
export default function NavigateAttendance() {
  return (
    <>
      <section className={`d_flex ${styles.section}`}>
        <header>
          <h3>How to navigate the attendance </h3>
          <p>
            Here&apos;s a step-by-step guide considering clarity, ease of use,
            and minimal frustration.
          </p>

          <div>
            <h5>1. Log In to the School Portal</h5>
            <p>
              Step 1: Open the school’s official portal on a web browser or
              mobile app.
            </p>
            <p>Step 2: Locate the &quot;Login&quot; button on the homepage.</p>
            <p>
              Step 3: Enter your Username/Email and Password in the login
              fields.
            </p>
            <p>
              Step 4: If two-factor authentication (2FA) is enabled, you might
              need to enter a code sent to your phone or email.
            </p>
            <p>
              Step 5: Click the &quot;Submit&quot; button to access your
              dashboard.
            </p>
          </div>
          <div>
            <h5>2. Access the Attendance Section</h5>
            <p>
              Step 1: On the attendance page, there should be a filter or
              selection option for date ranges. Choose the relevant date range
              (e.g., &quot;Last week&quot;, &quot;This semester&quot;, or custom
              dates).
            </p>
            Read More...
          </div>
        </header>
        <div className={styles.illustration}>
          <img src={howTo} alt="attendance" />
        </div>
      </section>
    </>
  );
}
