import styles from "./form.module.css";
export default function SignUp() {
  return (
    <>
      <section className={styles.alt}>
        <h2>AttendancePro SignUp </h2>
      </section>
      <form action="#" className={styles.form}>
        <section className={styles.signUp}>
          <div>
            <label htmlFor="fullName" className="d_flex">
              <span>Full Name</span>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="i.e Adewale Stephen"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="dob" className="d_flex">
              <span>Date of Birth</span>
              <input type="date" name="dob" id="dob" required />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="d_flex">
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="i.e stephen@gmail.com"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="d_flex">
              <span>Phone Number</span>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+234 9030094270"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="programOfStudy" className="d_flex">
              <span>Program Of Study</span>
              <select name="programOfStudy" id="programOfStudy">
                <option value="computer-science">Computer Science</option>
                <option value="data-science">Data Science</option>
                <option value="business-management">Business Management</option>
                <option value="psychology">Psychology</option>
                <option value="mechanical-engineering">
                  Mechanical Engineering
                </option>
                <option value="electrical-engineering">
                  Electrical Engineering
                </option>
                <option value="civil-engineering">Civil Engineering</option>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="mathematics">Mathematics</option>
                <option value="economics">Economics</option>
                <option value="accounting">Accounting</option>
                <option value="marketing">Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="journalism">Journalism</option>
                <option value="law">Law</option>
                <option value="nursing">Nursing</option>
                <option value="education">Education</option>
                <option value="history">History</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="studentID" className="d_flex">
              <span>Student ID</span>
              <input
                type="text"
                name="studentID"
                id="studentID"
                placeholder="Enter your Student ID"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="regNo" className="d_flex">
              <span>Registration Number</span>
              <input
                type="text"
                name="regNo"
                id="regNo"
                placeholder="Enter your Registration Number"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="d_flex">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </label>
          </div>
        </section>
        <button type="submit" className={styles.submit}>
          Sign Up
        </button>
      </form>
    </>
  );
}
