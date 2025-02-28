// email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)

import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleFormChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    validateInput(e.target.name, e.target.value);
  }

  function validateInput(name, value) {
    let error;

    if (name === "username") {
      error = value.length < 3 ? "Username must be 3 char" : "";
    } else if (name === "email") {
      error = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        ? ""
        : "Invalid email";
    } else if (name === "password") {
      error = value.length < 6 ? "Password must be 6 char" : "";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));

    return error;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let localErrors = {};
    let error;

    // Validate all fields at submission
    Object.keys(formData).forEach((key) => {
      error = validateInput(key, formData[key]);

      if (error) {
        localErrors[key] = error;
      }
    });
    // setErrors(localErrors);
    // console.log(localErrors);

    // Check if there are any errors
    if (Object.values(localErrors).every((error) => error === "")) {
      alert("form submitted successfully");

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } else {
      alert("form has error");
    }
  }

  return (
    <div>
      <h1>Form Validation in React</h1>

      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">UserName : </label>
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleFormChange}
            />
            <span> {errors?.username}</span>
          </div>

          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleFormChange}
            />
            <span> {errors?.email}</span>
          </div>

          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleFormChange}
            />
            <span> {errors?.password}</span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
