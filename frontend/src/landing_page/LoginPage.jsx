import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Login() {
  
  return (
    <>
      <div className="row">
        <h3 className="text-center text-muted mb-3 mt-5"> Login to Kite</h3>
        <div className="row">
          <div className="col-4 mx-auto ">
          <label className="form-label" >Email</label>
          <input className="form-control ps-4" placeholder="Email"></input>
        </div>
        </div>
        <div className="row mt-4">
          <div className="col-4 mx-auto">
          <label className="form-label">Password</label>
          <input className="form-control ps-4" placeholder="password"></input>
        </div>
        </div>
        <div className="row mt-3">
          <button className="btn btn-primary mx-auto col-2"> Login</button>
        </div>
        <p className="text-center mt-4">Don't have a Account &nbsp; <Link to="/signup">Signup</Link></p>
      </div>
    </>
  );
}

export default Login;
