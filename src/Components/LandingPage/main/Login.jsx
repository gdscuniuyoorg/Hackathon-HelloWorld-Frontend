import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';
import { APIDOMAIN } from "@/constants"

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
      // @ts-ignore
      username: form.get('username').replace(/\//g, '_'),
      password: form.get("password")
    }

    try {

      // make POST request to backend
      const response = await fetch(
        new URL("/api/login", APIDOMAIN),
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formData)
        }
      )

      // Backend did not reply with a 200
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      // store auth token with user
      const data = await response.json();
      localStorage.setItem("token", data.token);

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
          <label htmlFor='username' className='d_flex'>
            <span>Username</span>
            <input
              required
              type='text'
              name='username'
              placeholder='Enter your username'
            />
          </label>
        </div>
        <div>
          <label htmlFor='password' className='d_flex'>
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
