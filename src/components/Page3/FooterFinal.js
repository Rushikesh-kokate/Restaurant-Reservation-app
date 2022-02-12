import React, { useState } from "react";
import classes from "./FooterFinal.module.css";

const FooterFinal = (props) => {
  const [backPage, setBackPage] = useState(true);
  const PreviousPageHandler = () => {
    setBackPage(!backPage);
    props.prevPage(backPage);
  };

  return (
    <div className={classes.container}>
      <div>
        <button onClick={PreviousPageHandler} className={classes.previousB}>
          Previous
        </button>
        <button
          className={
            props.createdReserv
              ? classes.resesvationBChanged
              : classes.resesvationB
          }
        >
          Create Reservation
        </button>
      </div>
    </div>
  );
};
export default FooterFinal;
