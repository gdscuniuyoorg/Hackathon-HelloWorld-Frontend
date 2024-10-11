import Input from "./Input";
import styles from "../Admin.module.css";
import { useState } from "react";
export default function AddNewStudent() {
  function AddStudents(){

  }
  return (
    <form action="#" className={styles.addNewStudentsform} method="post">
      <h2>Student Info</h2>
      <section className={`${styles.formSection} d_flex`}>
        <Input title="First Name" type="text" id="firstNameInput" />
        <Input title="Last Name" type="text" id="lastNameInput" />
        <Input title="DOB" type="date" id="DOB" />
      </section>
      <section className={`${styles.formSection} d_flex`}>
        <Input title="Email" type="email" id="emailInput" />
        <Input title="Reg Number" type="text" id="regInput" />
        <Input title="Course" type="text" id="courseInput" />
      </section>
      <button>Submit</button>
    </form>
  );
}
