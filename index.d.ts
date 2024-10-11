declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  export default string;
}

declare module "*.png" {
  export default string;
}

interface StudentRegistrationData {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
  role: "student";
  first_name: FormDataEntryValue;
  last_name: FormDataEntryValue;
  phone_number: FormDataEntryValue;
  reg_no: FormDataEntryValue;
}

interface Venue {
  short_name: string,
  full_name: string,
  latitude: number,
  longtitude: number,
}