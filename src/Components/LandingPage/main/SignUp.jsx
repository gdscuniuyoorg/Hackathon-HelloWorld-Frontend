import styles from "./form.module.css";
export default function SignUp() {
  return (
    <>
      <section className={styles.alt}>
        <h2>Sign Up</h2>
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
