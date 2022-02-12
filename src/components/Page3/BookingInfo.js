import React, { useState } from "react";

import classes from "./BookingInfo.module.css";
import DateTime from "./DateTime";

const BookingInfo = (props) => {
  const [reservationFood, setReservationFood] = useState(true);
  const [reservationFood2, setReservationFood2] = useState(true);
  const [reservationFood3, setReservationFood3] = useState(true);

  const [reservation, setReservation] = useState(false);

  const [size, setSize] = useState(false);
  const [size2, setSize2] = useState(false);
  const [size3, setSize3] = useState(false);
  const [size4, setSize4] = useState(false);
  const [size5, setSize5] = useState(false);
  const [size6, setSize6] = useState(false);
  const [size7, setSize7] = useState(false);

  const FoodChangeHandler = () => {
    setReservationFood(!reservationFood);
  };
  const FoodChangeHandler2 = () => {
    setReservationFood2(!reservationFood2);
  };
  const FoodChangeHandler3 = () => {
    setReservationFood3(!reservationFood3);
  };

  const sizeChangeHandler = () => {
    setSize(!size);
    setSize2(false);
    setSize3(false);
    setSize4(false);
    setSize5(false);
    setSize6(false);
    setSize7(false);
  };
  const sizeChangeHandler2 = () => {
    setSize2(!size2);
    setSize(false);
    setSize3(false);
    setSize4(false);
    setSize5(false);
    setSize6(false);
    setSize7(false);
  };
  const sizeChangeHandler3 = () => {
    setSize3(!size3);
    setSize2(false);
    setSize(false);
    setSize4(false);
    setSize5(false);
    setSize6(false);
    setSize7(false);
  };
  const sizeChangeHandler4 = () => {
    setSize4(!size4);
    setSize2(false);
    setSize3(false);
    setSize(false);
    setSize5(false);
    setSize6(false);
    setSize7(false);
  };
  const sizeChangeHandler5 = () => {
    setSize5(!size5);
    setSize2(false);
    setSize3(false);
    setSize4(false);
    setSize(false);
    setSize6(false);
    setSize7(false);
  };
  const sizeChangeHandler6 = () => {
    setSize6(!size6);
    setSize2(false);
    setSize3(false);
    setSize4(false);
    setSize5(false);
    setSize(false);
    setSize7(false);
  };
  const sizeChangeHandler7 = () => {
    setSize7(!size7);
    setSize2(false);
    setSize3(false);
    setSize4(false);
    setSize5(false);
    setSize6(false);
    setSize(false);
  };

  const CreateReservationHandler = () => {
    setReservation(props);
    props.transfer(reservation);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerName}>
        <p>Party Size</p>
      </div>
      <div className={classes.container}>
        <div className={classes.pSize}>
          <p
            onClick={sizeChangeHandler}
            className={size ? classes.oneSelected : classes.one}
          >
            1
          </p>
          <p
            onClick={sizeChangeHandler2}
            className={size2 ? classes.twoSelected : classes.two}
          >
            2
          </p>
          <p
            onClick={sizeChangeHandler3}
            className={size3 ? classes.threeSelected : classes.three}
          >
            3
          </p>
          <p
            onClick={sizeChangeHandler4}
            className={size4 ? classes.fourSelected : classes.four}
          >
            4
          </p>
          <p
            onClick={sizeChangeHandler5}
            className={size5 ? classes.fiveSelected : classes.five}
          >
            5
          </p>
          <p
            onClick={sizeChangeHandler6}
            className={size6 ? classes.sixSelected : classes.six}
          >
            6
          </p>
          <p
            onClick={sizeChangeHandler7}
            className={size7 ? classes.sevenSelected : classes.seven}
          >
            7
          </p>
          <input type="number" min="8" max="100" defaultValue="8" />
        </div>
      </div>
      <div className={classes.hero}>
        <div className={classes.reservationType}>
          <p>Reservation for</p>
          <button
            onClick={FoodChangeHandler}
            className={reservationFood ? classes.food : classes.foodSelected}
          >
            Food
          </button>
          <button
            onClick={FoodChangeHandler2}
            className={reservationFood2 ? classes.snack : classes.snackSelected}
          >
            Snack
          </button>
          <button
            onClick={FoodChangeHandler3}
            className={
              reservationFood3 ? classes.drinks : classes.drinksSelected
            }
          >
            Drinks
          </button>
        </div>
      </div>
      <div>
        <DateTime create={CreateReservationHandler} />
      </div>
    </div>
  );
};
export default BookingInfo;
