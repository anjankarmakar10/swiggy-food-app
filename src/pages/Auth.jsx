import React from "react";
import { Formik, Form } from "formik";
import { Link, Outlet } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().min(6, "min 6 char").required("Required"),

  comfirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

const SingUp = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
      comfirmPassword: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <div>
        <h1 className="form-title">Sign Up</h1>
        <Form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
          </div>
          <div>{errors.firstName}</div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
          </div>
          <div>{errors.lastName}</div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <p>{errors.email}</p>
          <div className="form-group">
            <input
              type="number"
              name="number"
              className="form-control"
              placeholder="Phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div>{errors.password}</div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm Password"
              name="comfirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comfirmPassword}
            />
          </div>
          <div>{errors.comfirmPassword}</div>

          <Link to="/auth/login">Already have a account?</Link>
          <div className="form-group">
            <button
              disabled={isSubmitting}
              className="btn-submit btn-primary"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </Form>
      </div>
    )}
  </Formik>
);

const Login = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={LoginSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <div>
        <h1 className="form-title">Login</h1>
        <Form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div>{errors.password}</div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <Link to="/auth/signup">Cteate a account</Link>
          <div className="form-group">
            <button
              disabled={isSubmitting}
              className="btn-submit btn-primary"
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    )}
  </Formik>
);

const Auth = () => {
  return (
    <section className="container form-container">
      <Outlet />
    </section>
  );
};

export default Auth;
export { SingUp, Login };
