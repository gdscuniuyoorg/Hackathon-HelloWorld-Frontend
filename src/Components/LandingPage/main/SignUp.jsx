import { useNavigate } from 'react-router-dom';
import Field from './field';
import styles from './form.module.css';
import { APIDOMAIN } from "@/constants"

export default function SignUp() {
  const navigateTo = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const studentData = {
      role: 'student',
      email: form.get('email'),
      password: form.get('password'),
      username: form.get('username'),
      phone_number: form.get('phone'),
      last_name: form.get('last_name'),
      first_name: form.get('first_name'),
      // repace / with _ in reg number
      // @ts-ignore
      reg_no: form.get('regNo').split(/\//g, '_'),
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    try {

      // Make POST request to backend
      const { ok, statusText } = await fetch(
        new URL("/api/register", APIDOMAIN),
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(studentData),
        }
      )

      // Backend did not reply with a 200
      if (!ok) {
        throw new Error('Network response was not ok: ' + statusText);
      }

      // get user token
      const response = await fetch(
        new URL("/api/login", APIDOMAIN),
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            username: studentData.username,
            password: studentData.password,
          })
        }
      )


      // Backend did not reply with a 200
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // TODO sign up was successful, redirect user here
      navigateTo('/student')

    } catch (error) {
      console.error('Sign-up Error:', error.message);
    }

  }

  return (
    <>
      <section className={styles.alt}>
        <h2>AttendancePro SignUp </h2>
      </section>
      <form
        action='#'
        className={styles.form}
        onSubmit={handleSubmit}
      >

        <section className={styles.signUp}>

          <Field
            required
            type='text'
            text='First Name'
            name='first_name'
            placeholder='e.g. Adewale'
          />

          <Field
            required
            type='text'
            text='Last Name'
            name='last_name'
            placeholder='e.g. Stephen'
          />

          <Field
            required
            type='email'
            name='email'
            text='Email Address'
            placeholder='i.e stephen@gmail.com'
          />

          <Field
            required
            type='tel'
            name='phone'
            text='Phone Number'
            placeholder='+234 9030094270'
          />

          <Field
            required
            text='Username'
            type='text'
            name='username'
            placeholder='e.g john_doe_22'
          />
          \
          {/* NOTE this isn't being used */}
          {/* <div>
            <label htmlFor='programOfStudy' className='d_flex'>
              <span>Program Of Study</span>
              <select name='programOfStudy' id='programOfStudy'>
                <option value='computer-science'>Computer Science</option>
                <option value='data-science'>Data Science</option>
                <option value='business-management'>Business Management</option>
                <option value='psychology'>Psychology</option>
                <option value='mechanical-engineering'>
                  Mechanical Engineering
                </option>
                <option value='electrical-engineering'>
                  Electrical Engineering
                </option>
                <option value='civil-engineering'>Civil Engineering</option>
                <option value='biology'>Biology</option>
                <option value='chemistry'>Chemistry</option>
                <option value='physics'>Physics</option>
                <option value='mathematics'>Mathematics</option>
                <option value='economics'>Economics</option>
                <option value='accounting'>Accounting</option>
                <option value='marketing'>Marketing</option>
                <option value='graphic-design'>Graphic Design</option>
                <option value='journalism'>Journalism</option>
                <option value='law'>Law</option>
                <option value='nursing'>Nursing</option>
                <option value='education'>Education</option>
                <option value='history'>History</option>
              </select>
            </label>
          </div> */}

          <Field
            required
            type='text'
            name='regNo'
            text='Registration Number'
            placeholder='Enter your Registration Number'
          />

          <Field
            required
            type='password'
            name='password'
            text='Password'
            placeholder='Enter your password'
          />

        </section>
        <button type='submit' className={styles.submit}>
          Sign Up
        </button>
      </form>
    </>
  );
}