import { Link, Outlet, useLocation } from "react-router-dom";
import avater1 from "../assets/avater1.png";
import avater2 from "../assets/avater2.png";
import styles from "./GetStarted.module.css";

let imageArray = [avater1, avater2];
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function GetStarted() {

  const newImage = imageArray[getRandomNumber(imageArray.length - 1)];

  const { pathname } = useLocation();
  const isLogin = pathname === "/login"

  return (
    <section className={styles.content}>
      <nav className={`d_flex ${styles.nav}`}>
        <div className={styles.logo}>AttendancePro</div>
        <div className="d_flex">
          <Link to={isLogin
            ? "/signup"
            : "/login"
          }>
            <button>
              {isLogin
                ? "Sign Up"
                : "Login"
              }
            </button>
          </Link>
        </div>
      </nav>

      <main>
        <header className={styles.header}>
          <img src={newImage} alt="avater" />
        </header>
        <section className={styles.form}>
          <Outlet />
        </section>
      </main>
    </section>
  );
}
