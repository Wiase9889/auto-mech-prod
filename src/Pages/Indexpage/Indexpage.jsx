/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Indexpage.module.css";

const Indexpage = () => {
  const [initialLaunch, setInitialLaunch] = useState(true);
  const navigate = useNavigate();

  const firstLaunch = localStorage.getItem("initialLaunch");

  const currUser = JSON.parse(localStorage.getItem('userCred'))

  useEffect(() => {
      if (firstLaunch) {
        navigate("login");

        if(currUser) {
          window.location.replace('/dashboard')
        }
      } else {
        localStorage.setItem("initialLaunch", initialLaunch);

        setTimeout(() => {
          setInitialLaunch(!initialLaunch);
          navigate("/home");
        }, 5000);
      }
  });
  return (
    <div className={classes.indexpage}>
      <h2 className={classes.logo}>UB</h2>
    </div>
  );
};

export default Indexpage;
