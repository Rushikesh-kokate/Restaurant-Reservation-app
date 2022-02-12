import React from "react";
import classes from "./GuestInfo.module.css";
import CommentsTags from "./CommentsTags";

const GuestInfo = (props) => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero1}>
        <div className={classes.section1}>
          <div>
            <p>First Name</p>
            <input
              className={classes.firstNameLast}
              type="text"
              value={props.guestName ? "Sabrina" : ""}
            />
          </div>
          <div>
            <p>Phone</p>
            <select className={classes.stdCode}>
              <option>+30</option>
            </select>
            <input
              className={classes.phoneNum}
              type="number"
              value={props.guestName ? "55556650200" : ""}
            />
          </div>
        </div>
        <div className={classes.section2}>
          <div>
            <p>Last Name</p>
            <input
              className={classes.firstNameLast}
              type="text"
              value={props.guestName ? "Stan" : ""}
            />
          </div>
          <div>
            <p>Email</p>
            <input className={classes.email} type="text" placeholder="Email" />
          </div>
        </div>
      </div>
      <div className={classes.NavBar}>
        <div className={classes.NavBarInside}>
          <div>
            <p>0</p>
            <p>Visits</p>
          </div>
          <div>
            <p>0</p>
            <p>No-Show</p>
          </div>
          <div>
            <p>0</p>
            <p>Spend</p>
          </div>
          <div>
            <p>0</p>
            <p>Cancelations</p>
          </div>
        </div>
      </div>
      <CommentsTags />
    </div>
  );
};
export default GuestInfo;
