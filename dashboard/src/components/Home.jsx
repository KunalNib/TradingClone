import React from "react";
import { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.loggedIn) {
          setUsername(res.data.user);
          //used session storage for setting the welcome user message only one time
          if (!sessionStorage.getItem("welcomed")) {
          toast(`Welcome ${res.data.user}`, { position: "top-left" });
          sessionStorage.setItem("welcomed", "true");
        }
        } else {
          toast.error("You are not Logged In,please log in");
          window.location.href = "http://localhost:5174/login";
        }
      })
      .catch(() => {
        toast.error("You are not Logged In,please log in");
        window.location.href = "http://localhost:5174/login";
      });
  }, []);
  return (
    <>
      <TopBar />
      <ToastContainer />
      <Dashboard username={username}/>
    </>
  );
};

export default Home;
