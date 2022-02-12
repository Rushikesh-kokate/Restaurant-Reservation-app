import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import Img1 from "./images/woman-g06c3edef3_1920.jpg";
import Img2 from "./images/woman-gd98f0a80e_1920.jpg";
import Img3 from "./images/woman-gf0cb75863_1920.jpg";
import { FaTimesCircle } from "react-icons/fa";

const Dropdown = (props) => {
  const [display, setDisplay] = useState(false);
  const [guestName, setGuestName] = useState(false);

  const DropDownHandler = () => {
    setDisplay(!display);
    props.handle(display);
  };

  const GuestClickHandler = () => {
    setGuestName(!guestName);
    props.send(guestName);
  };
  const AddGuestClickHandler = () => {
    setGuestName(!guestName);
    props.send(guestName);
  };

  return (
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
            <p onClick={AddGuestClickHandler}>Add to Guestbook</p>
          </span>
        </div>
      </div>
      <div className={classes.hero}>
        <div className={classes.guestName} onClick={GuestClickHandler}>
          <div className={classes.guestImg}>
            <img src={Img1} />
          </div>
          <div className={classes.contact}>
            <p>Sabrina Davies</p>
            <p>+54 9999999999</p>
          </div>
        </div>
        <div className={classes.guestName}>
          <div className={classes.guestImg}>
            <img src={Img2} />
          </div>
          <div className={classes.contact}>
            <p>Sabrina Rodriguez</p>
            <p>+54 9999999999</p>
          </div>
        </div>
        <div className={classes.guestName}>
          <div className={classes.guestImg}>
            <img src={Img3} />
          </div>
          <div className={classes.contact}>
            <p>Sabrina Bonucci</p>
            <p>+54 9999999999</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
