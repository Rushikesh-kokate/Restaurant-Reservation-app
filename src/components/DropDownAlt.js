import React, { useState } from "react";
import classes from "./DropDownAlt.module.css";
import { FaTimesCircle } from "react-icons/fa";

const DropDownAlt = (props) => {
  const [displayCon, setDisplayCon] = useState(false);
  const [guestName1, setGuestName1] = useState(false);

  const DropDownHandler = () => {
    setDisplayCon(!displayCon);
    props.handle(displayCon);
  };
  const GuestClickHandler1 = () => {
    setGuestName1(!guestName1);
    props.send(guestName1);
  };
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.guestBook}>
          <p>Guest Book</p>
          <span className={classes.cut} onClick={DropDownHandler}>
            <FaTimesCircle />
          </span>
        </div>
        <div className={classes.container}>
          <div className={classes.guest}>
            <span className={classes.guestAdd}>
              <p onClick={GuestClickHandler1}>Add to Guestbook</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDownAlt;
