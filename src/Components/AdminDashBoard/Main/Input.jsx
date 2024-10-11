/* eslint-disable react/prop-types */
import styles from "../Admin.module.css";

export default function Input({ title, type, id }) {

  return (
    <div className={`${styles.labelsContainer} ${styles.d_flex}`}>
      <label htmlFor={id} className={`${styles.labels} ${styles.d_flex}`}>
        <h3>{title}</h3>
        <input
          type={type}
          name={id}
          id={id}
          required
        />
      </label>
    </div>
  );
}
