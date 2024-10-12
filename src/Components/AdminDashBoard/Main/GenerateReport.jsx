import { APIDOMAIN } from "@/constants";
import css from "../Admin.module.css";
import Input from "./Input";
import Welcome from "./WelCome";

export default function GenerateReport() {

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formData = {
      date: `${date.getFullYear()}-${month}-${day}`,
      course: form.get("course"),
      stop_time: form.get("stop_time"),
      start_time: form.get("start_time"),
    }

    try {

      const url = new URL(`/api/pdfgen/${formData.course}/${formData.date}/${formData.start_time}/${formData.stop_time}`, APIDOMAIN);
      const response = await fetch(url);

      if (!response.ok) throw new Error("Response was not okay: " + response.statusText)
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.style.display = "none"
      a.download = `${formData.course}-${formData.date}.pdf`
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);

      event.target.reset();
    }
    catch (error) {
      console.error("Error generating report:", error.message)
    }
  }

  return (
    <>

      <nav
        className={`${css.d_flex} ${css.allStudentsNav} ${css.welcome}`}
      >

        {/* NOTE this is here to fit the layout */}
        <form action="#" className={css.form}>
          <div className={css.d_flex} />
        </form>
        <Welcome />

      </nav>
      <form
        onSubmit={handleSubmit}
        className={css.addNewStudentsform}
      >
        <h2>
          Generate Report
        </h2>

        <section className={`${css.formSection} d_flex`}>
          <Input
            title="Course"
            type="text"
            name="course"
            placeholder="e.g. GRE111"
          />
          <Input
            title="Start time"
            type="time"
            step="1"
            name="start_time"
          />
          <Input
            title="Stop time"
            type="time"
            step="1"
            name="stop_time"
          />
        </section>

        <button type="submit">Generate Report</button>
        
      </form>
    </>
  );
}
