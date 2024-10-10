import styles from "./form.module.css";
import twitter from "../assets/twitter.png";
import google from "../assets/Google.png";
export default function Login() {
  return (
    <>
      <section className={styles.alt}>
        <h2>Login</h2>
        <div>
          <div className={`d_flex ${styles.altLogin}`}>
            <img src={google} alt="google" /> Continue With Google
          </div>
          <div className={`d_flex ${styles.altLogin}`}>
            <img src={twitter} alt="google" /> Continue With Twitter
          </div>
        </div>
        <div className={`d_flex ${styles.or}`}>
          <hr />
          OR
          <hr />
        </div>
      </section>
      <form action="#" className={styles.form}>
        <div>
          <label htmlFor="studentID" className="d_flex">
            <span>Student ID</span>
            <input
              type="text"
              name="studentID"
              id="studentID"
              placeholder="Enter your ID"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="studentID" className="d_flex">
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </label>
          <button type="button">forget password?</button>
        </div>
        <button type="submit" className={styles.submit}>
          Login
        </button>
        <p>
          Don&apos;t have account? <span>Sign Up</span>
        </p>
      </form>
    </>
  );
}
