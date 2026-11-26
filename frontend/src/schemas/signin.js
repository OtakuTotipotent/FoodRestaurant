import * as yup from "yup"

const signinSchema = yup.object().shape({
  username: yup.string().min(3).max(30).required("Username is required"),
  password: yup.string().min(8).max(25).required("Password is required"),
})

export default signinSchema;