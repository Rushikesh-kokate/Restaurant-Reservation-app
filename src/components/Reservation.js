import React from "react";
import classes from "./Reservation.module.css";
import { FaTimesCircle } from "react-icons/fa";

const Reservation = () => {
  return (
    <div className={classes.container}>
      <p>New Reservation</p>
      <span className={classes.cut}>
        <FaTimesCircle />
      </span>
    </div>
  );
};
export default Reservation;
