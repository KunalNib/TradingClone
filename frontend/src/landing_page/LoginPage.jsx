import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function Login() {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setInputVal({
      ...inputVal,
      [event.target.name]: event.target.value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const {data}=await axios.post("https://tradingclone.onrender.com/login",
        {
          ...inputVal,
        },
        { withCredentials: true }
      );
      const {success,message}=data;
      if(success){
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodhaclone122.netlify.app/";
        }, 500);
      }
      else{
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
    setInputVal({
      ...inputVal,
      email:"",
      password:""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h3 className="text-center text-muted mb-3 mt-5"> Login to Kite</h3>
          <div className="row">
            <div className="col-4 mx-auto ">
              <label className="form-label">Email</label>
              <input
                className="form-control ps-4"
                placeholder="Email"
                name="email"
                value={inputVal.email}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4 mx-auto">
              <label className="form-label">Password</label>
              <input
                className="form-control ps-4"
                type="password"
                placeholder="password"
                name="password"
                value={inputVal.password}
                onChange={handleInput}
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            <button className="btn btn-primary mx-auto col-2"> Login</button>
          </div>
          <p className="text-center mt-4">
            Don't have a Account &nbsp; <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
