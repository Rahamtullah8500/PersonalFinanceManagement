import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: null,
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = JSON.stringify(loginDetails);
    localStorage.setItem("userDetails", userDetails);
    Navigate("/home");
  };

  return (
    <div className=" container-fluid login-container">
      <h3 className=" text-white text-center">Personal Financial Management System</h3>
      <form className=" login-form-boby " onSubmit={handleSubmit}>
        <h2>Welcome</h2>
        <div className=" form-group mb-3 w-100">
          <label htmlFor="email" className=" form-text">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={loginDetails.email}
            className=" form-control"
            required
          />
        </div>
        <div className="form-group mb-3 w-100">
          <label htmlFor="password" className=" form-text">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            value={loginDetails.password}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className=" btn bg-primary ">Login</button>
      </form>
    </div>
  );
};

export default Login;
