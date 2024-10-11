/* eslint-disable react/prop-types */
import styles from "../Admin.module.css";

export default function Input({ title, ...props }) {

  return (
    <div className={`${styles.labelsContainer} ${styles.d_flex}`}>
      <label htmlFor={props.name} className={`${styles.labels} ${styles.d_flex}`}>
        <h3>{title}</h3>
        <input
          {...props}
          required
        />
      </label>
    </div>
  );
}
