import React, { useState } from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  const [back, setBack] = useState(true);
  const [forward, setForward] = useState(false);
  const BackPageHandler = () => {
    setBack(!back);
    props.footerB(back);
  };
  const ForwardPageHandler = () => {
    setForward(!forward);
    props.footerF(forward);
  };
  return (
    <div className={classes.wrapper}>
      <button className={classes.button1} onClick={BackPageHandler}>
        Back
      </button>
      <button className={classes.button2} onClick={ForwardPageHandler}>
        Next
      </button>
    </div>
  );
};
export default Footer;
