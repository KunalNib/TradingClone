import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <nav class=" navbar navbar-expand-lg border-bottom  sticky-top bg-white  ">
      <div
        className="container-xl "
        style={{ backgroundColor: "white", height: "50px" }}
      >
        <div className="row m-auto ">
          <Link class="navbar-brand  col-10  " to="/">
            <img src="/media/logo.svg" style={{ width: "25%" }} />
          </Link>
          <div className="col-1 ">
            <button
            class="navbar-toggler ms-4  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          </div>
        </div>
        <div class="collapse navbar-collapse ms-5 bg-white border-bottom-white links" id="navbarSupportedContent">
          <div className="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item ms-4">
                <Link class="nav-link mt-md-4 mt-lg-0 active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item ms-4 ">
                <Link class="nav-link " to="about">
                  About
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link " to="products">
                  Products
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link " to="pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link" to="support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
