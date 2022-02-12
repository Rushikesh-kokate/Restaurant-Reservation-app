import React from "react";
import classes from "./Navbar.module.css";
import {
  FaBars,
  FaMapMarker,
  FaGreaterThan,
  FaLessThan,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <span className={classes.hamburger}>
        <FaBars size={"lg"} />
      </span>
      <div className={classes.Navbar}>
        <span className={classes.location}>
          <FaMapMarker />
        </span>
        <p> Lithos Restaurant, Athens</p>
      </div>

      <div className={classes.lessThan}>
        <FaLessThan />
      </div>
      <div className={classes.Date}>Today, Dec 23</div>
      <div className={classes.greaterThan}>
        <FaGreaterThan />
      </div>

      <div className={classes.food}>
        <p>Breakfast</p>
        <FaChevronDown />
      </div>
    </div>
  );
};
export default Navbar;
