import React, { useState } from "react";

import classes from "./TabSwitcher.module.css";

const TabSwitcher = (props) => {
  const [tabChanger, setTabChanger] = useState(true);
  const [tabChanger2, setTabChanger2] = useState(false);

  const value = props.BookingVal;

  const GuestInfoHandler = () => {
    setTabChanger(!tabChanger);
    props.tabChanger(tabChanger);
  };
  const BookingInfoHandler = () => {
    setTabChanger2(!tabChanger2);
    props.tabChanger2(tabChanger2);
  };
  return (
    <div className={classes.Hero}>
      <a
        className={value ? classes.guestInfo : classes.guestInfoSelected}
        onClick={value ? GuestInfoHandler : null}
        href="#"
      >
        Guest Info
      </a>
      <a
        className={value ? classes.bookingInfoSelected : classes.bookingInfo}
        onClick={value ? BookingInfoHandler : null}
        href="#"
      >
        Booking info
      </a>
    </div>
  );
};
export default TabSwitcher;
