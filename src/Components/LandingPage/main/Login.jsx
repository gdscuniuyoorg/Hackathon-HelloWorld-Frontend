import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';

export default function Login() {

  const navigateTo = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const headers = {
      'Content-Type': 'application/json'
    }

    const formData = {
      // repace / with _ in reg number
      studentId: form.get('studentId').replace(/\//g, '_'),
      password: form.get("password")
    }

    try {

      // make POST request to backend
      const response = await fetch('YOUR_LOGIN_API', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      })

      // Backend did not reply with a 200
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      // TODO login was successful, redirect user here
      navigateTo('YOUR_REDIRECT_URL')

    } catch (error) {
      console.error('Login Error:', error.message);
    }
  }

  return (
    <>
      <section className={styles.alt}>
        <h2>Login</h2>
      </section>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div>
          <label htmlFor='studentId' className='d_flex'>
            <span>Student ID</span>
            <input
              required
              type='text'
              name='studentId'
              placeholder='Enter your ID'
            />
          </label>
        </div>
        <div>
          <label htmlFor='studentId' className='d_flex'>
            <span>Password</span>
            <input
              required
              type='password'
              name='password'
              placeholder='Enter your password'
            />
          </label>
          <button type='button'>forget password?</button>
        </div>
        <button type='submit' className={styles.submit}>
          Login
        </button>
        <p>
          Don&apos;t have account? <span>Sign Up</span>
        </p>
      </form>
    </>
  );
}
