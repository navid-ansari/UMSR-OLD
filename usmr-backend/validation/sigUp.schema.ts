import { object, string, ref } from "yup";

const signUpSchema = object({
  body: object({
    username: string().required("Email is required"),
    email: string().required("Password is required"),
    fname: string().required("Password is required"),
    lname: string().required("Password is required"),
    dob: string().required("Password is required"),
    password: string().required("Password is required"),
    role: string().required("Password is required"),
  })
});

export { signUpSchema }
