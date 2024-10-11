/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../Admin.module.css";
export default function Input({ title, type, id }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputVale(event) {
    if(event.target.value === '') return
    setInputValue(event.target.value.trim());
  }

  return (
    <div className={`${styles.labelsContainer} ${styles.d_flex}`}>
      <label htmlFor={id} className={`${styles.labels} ${styles.d_flex}`}>
        <h3>{title}</h3>
        <input
          type={type}
          name={id}
          id={id}
          required
          value={inputValue}
          onChange={() => handleInputVale(event)}
        />
      </label>
    </div>
  );
}
