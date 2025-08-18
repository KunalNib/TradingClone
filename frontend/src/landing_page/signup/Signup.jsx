import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, password, input } = inputValue;
  const handelOnChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
      style: {
        fontSize: "20px",
        padding: "16px 24px",
        lineHeight: "1.6",
      },
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-left",
      style: {
        fontSize: "20px",
        padding: "16px 24px",
        lineHeight: "1.6",
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        inputValue.password == "" ||
        inputValue.email == "" ||
        inputValue == ""
      ) {
        return handleError("all fields are required");
      }
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <div className="container-lg text-center mt-5">
        <p>&nbsp;</p>
        <h2>Open a free demat and trading account online</h2>
        <p className="fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <h4>&nbsp;</h4>
        <div className="mt-5">
          <h2>Signup now</h2>
          <p>Or track your existing application</p>
          <form className="row g-3 " onSubmit={handleSubmit}>
            <div className="">
              <div className="col-4 mx-auto mt-3">
                <input
                  type="email"
                  className="form-control ps-4"
                  id="validationFormCheck1"
                  placeholder="Email"
                  name="email"
                  value={inputValue.email}
                  onChange={handelOnChange}
                  required
                />
              </div>
              <div className="invalid-feedback">please Enter Email</div>
            </div>
            <div className="">
              <div className="col-4 mx-auto mt-3">
                

                <input
                  type="text"
                  className="form-control ps-4"
                  id="validationFormCheck2"
                  placeholder="Username"
                  value={inputValue.username}
                  name="username"
                  onChange={handelOnChange}
                  required
                />
              </div>
              <div className="invalid-feedback">please Enter password</div>
            </div>
            <div className="">
              <div className="col-4 mx-auto mt-3">

                <input
                  type="password"
                  className="form-control ps-4"
                  id="validationFormCheck3"
                  placeholder="Password"
                  name="password"
                  value={inputValue.password}
                  onChange={handelOnChange}
                  required
                />
              </div>
              <div className="invalid-feedback">please Enter password</div>
            </div>
            <button
              className="btn btn-primary col-2 mx-auto"
              type="submit"
            >
              Signup
            </button>
          </form>
          <p className="mt-4">
            Already have a account <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <OpenAccount />
    </>
  );
}

export default Signup;
