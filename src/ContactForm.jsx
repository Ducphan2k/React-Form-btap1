import { Formik } from "formik";
import React, { useState } from "react";
import "./App.css";

const ContactForm = () => {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleValidate = () => {
    let error = {};
    if (!form.email) {
      error.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      error.email = "Invalid email address";
    }
    if (!form.phone) {
      error.phone = "Required";
    }
    return error;
  };
  const handleSubmit = () => {
    alert("Login in successfully!!!");
  };

  return (
    <div>
      <h1>Sing up </h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.name ? "custom-input-error" : ""
              }`}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.name}</p>
            </div>

            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.phone}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
