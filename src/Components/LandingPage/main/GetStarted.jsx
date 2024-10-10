import styles from "./GetStarted.module.css";
import avater1 from "../assets/avater1.png";
import avater2 from "../assets/avater2.png";
import Login from "./Login";
import { useState } from "react";
import SignUp from "./SignUp";

let imageArray = [avater1, avater2];
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function GetStarted() {
  const [currentState, setCurrentState] = useState(false);
  function handleState(TheInput) {
    setCurrentState(TheInput);
  }

  const newImage = imageArray[getRandomNumber(imageArray.length - 1)];
  return (
    <section className={styles.content}>
      <nav className={`d_flex ${styles.nav}`}>
        <div className={styles.logo}>AttendancePro</div>
        <div className="d_flex">
          {!currentState && (
            <button onClick={() => handleState(true)}>Sign Up</button>
          )}
          {currentState && (
            <button onClick={() => handleState(false)}>Login</button>
          )}
        </div>
      </nav>

      <main>
        <header className={styles.header}>
          <img src={newImage} alt="avater" />
        </header>
        <section className={styles.form}>
          {currentState && <SignUp />}
          {!currentState && <Login />}
        </section>
      </main>
    </section>
  );
}
