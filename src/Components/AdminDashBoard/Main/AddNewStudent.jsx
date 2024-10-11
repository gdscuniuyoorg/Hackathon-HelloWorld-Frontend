import { APIDOMAIN } from '@/constants';
import styles from '../Admin.module.css';
import Input from './Input';

export default function AddNewStudent() {

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0');

    const studentData = {
      reg_no: form.get('reg'),
      course: form.get('course'),
      venue: form.get('venue'),
      date: `${date.getFullYear()}-${month}-${day}`,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    try {

      const response = await fetch(
        new URL('/api/attendanceadd/', APIDOMAIN),
        {
          method: 'POST',
          body: JSON.stringify(studentData),
          headers: {
            'Content-Type':'application/json'
          },
        }
      )

      if(!response.ok) throw new Error(`Network Error`);

      // NOTE successful
      // TODO whatever piece of code is to be here

    } catch (error) {
      console.log('Error:', error.message)
    }


  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.addNewStudentsform}
    >
      <h2>Student Info</h2>
      <section className={`${styles.formSection} d_flex`}>
        <Input
          title='Venue'
          type='text'
          name='venue'
          placeholder='e.g. ELF'
        />
        <Input
          title='Course'
          type='text'
          name='course'
          placeholder='e.g. GRE111'
        />
        <Input
          title='Reg Number'
          type='text'
          name='reg'
        />
      </section>

      <button>Submit</button>
    </form>
  );
}
