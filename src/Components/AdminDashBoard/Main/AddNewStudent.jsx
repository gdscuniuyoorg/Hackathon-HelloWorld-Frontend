import styles from "../Admin.module.css";
import Input from "./Input";

export default function AddNewStudent() {

  function handleSubmit() {
    // username
  }

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className={styles.addNewStudentsform}
    >
      <h2>Student Info</h2>
      <section className={`${styles.formSection} d_flex`}>
        <Input title="First Name" type="text" id="firstName" />
        <Input title="Last Name" type="text" id="lastName" />
        <Input title="DOB" type="date" id="DOB" />
      </section>
      <section className={`${styles.formSection} d_flex`}>
        <Input title="Email" type="email" id="email" />
        <Input title="Reg Number" type="text" id="reg" />
        <Input title="Course" type="text" id="course" />
      </section>
      <button>Submit</button>
    </form>
  );
}
