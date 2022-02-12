import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";
import DropDownAlt from "./DropDownAlt";

const SearchBar = (props) => {
  const [display, setDisplay] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const DropDownMenuHandler = (props) => {
    setOpenOption(props);
  };
  const OpenDropDownHandler = (props) => {
    setOpenOption(!openOption);
  };
  const PassDataHandler = () => {
    setDisplayTwo(props);
    props.guest(displayTwo);
  };
  const PassDataHandler1 = () => {
    setDisplayTwo(props);
    props.guest1(displayTwo);
  };
  const InputValueHandler = (event) => {
    setDisplay(event.target.value);
  };
  const value = /^(s)/i;
  const testValue = value.test(display);
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <input
          type="text"
          className={classes.input}
          placeholder=" Search Guest (try -->sabrina)"
          onClick={OpenDropDownHandler}
          onChange={InputValueHandler}
        />
        <div className={classes.search}>
          <FaSearch />
        </div>
        <div>
          {openOption ? (
            testValue ? (
              <Dropdown send={PassDataHandler} handle={DropDownMenuHandler} />
            ) : (
              <DropDownAlt
                send={PassDataHandler1}
                handle={DropDownMenuHandler}
              />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
