import { useState } from "react";
import TextInput from "../components/common/TextInput";
import signinSchema from "../schemas/signin";
import { useFormik } from "formik";
import { signin } from "../api/internal";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

// SignIn Component
const SignIn = () => {
  // Get Values
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: signinSchema,
  });

  const dispatch = useDispatch();
  const navigate = Navigate();
  const [error, setError] = useState("");

  // Handle Signin
  const handleSignin = async () => {
    const data = {
      username: values.username,
      password: values.password,
    };
    const response = await signin(data);

    if (response.status === 200) {
      // Set User
      const user = {
        _id: response.data.user._id,
        email: response.data.user.email,
        username: response.data.user.username,
        auth: response.data.user.auth,
      };

      dispatch(setUser(user));
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      setError(response.data.errormessage);
    }
  };

  return (
    <div className="max-w-sm mx-auto my-10 md:my-20 bg-gray-200 dark:bg-gray-700 rounded-xl px-6 py-4 grid gap-6">
      <h2 className="my-2 text-green-600 font-semibold text-3xl">
        Signin Your Account
      </h2>

      {/* Username */}
      <TextInput
        type="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Your unique username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />

      {/* Password */}
      <TextInput
        type="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your password"
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />

      {/* Signin Button */}
      <button
        onClick={handleSignin}
        className="py-2 text-white bg-green-600 rounded-md hover:opacity-90 font-semibold text-lg cursor-pointer"
      >
        Sign in
      </button>

      {/* Signup Reference */}
      <span className="flex gap-2 mb-2">
        Don't have an account?
        <button
          onClick={navigate("/signup")}
          className="text-green-600 hover:underline font-medium cursor-pointer"
        >
          Signup
        </button>
      </span>
    </div>
  );
};

export default SignIn;
