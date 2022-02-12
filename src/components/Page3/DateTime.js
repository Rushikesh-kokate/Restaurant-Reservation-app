import React, { useState } from "react";
import classes from "./DateTime.module.css";
// import Calendar from "react-calendar";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { FaGlassMartini } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaCookie } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

const DateTime = (props) => {
  // const [value, onChange] = useState(new Date());
  const [reservationFood, setReservationFood] = useState(false);
  const [reservationFood2, setReservationFood2] = useState(false);
  const [reservationFood3, setReservationFood3] = useState(false);

  const [slot1, setSlot1] = useState(false);
  const [slot2, setSlot2] = useState(false);
  const [slot3, setSlot3] = useState(false);
  const [slot4, setSlot4] = useState(false);
  const [slot5, setSlot5] = useState(false);
  const [slot6, setSlot6] = useState(false);
  const [slot7, setSlot7] = useState(false);
  const [slot8, setSlot8] = useState(false);

  const [createReservation, setCreateReservation] = useState(false);

  const FoodChangeHandler = () => {
    setReservationFood(!reservationFood);
    setReservationFood2(false);
    setReservationFood3(false);
  };
  const FoodChangeHandler2 = () => {
    setReservationFood2(!reservationFood2);
    setReservationFood(false);
    setReservationFood3(false);
  };
  const FoodChangeHandler3 = () => {
    setReservationFood3(!reservationFood3);
    setReservationFood2(false);
    setReservationFood(false);
  };

  const SlotChangeHandler1 = () => {
    setSlot1(!slot1);
    setSlot2(false);
    setSlot3(false);
    setSlot4(false);
    setSlot5(false);
    setSlot6(false);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler2 = () => {
    setSlot1(false);
    setSlot2(!slot2);
    setSlot3(false);
    setSlot4(false);
    setSlot5(false);
    setSlot6(false);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler3 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(!slot3);
    setSlot4(false);
    setSlot5(false);
    setSlot6(false);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler4 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(false);
    setSlot4(!slot4);
    setSlot5(false);
    setSlot6(false);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler5 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(false);
    setSlot4(false);
    setSlot5(!slot5);
    setSlot6(false);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler6 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(false);
    setSlot4(false);
    setSlot5(false);
    setSlot6(!slot6);
    setSlot7(false);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler7 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(false);
    setSlot4(false);
    setSlot5(false);
    setSlot6(false);
    setSlot7(!slot7);
    setSlot8(false);
    setCreateReservation(true);
    props.create(createReservation);
  };
  const SlotChangeHandler8 = () => {
    setSlot1(false);
    setSlot2(false);
    setSlot3(false);
    setSlot4(false);
    setSlot5(false);
    setSlot6(false);
    setSlot7(false);
    setSlot8(!slot8);
    setCreateReservation(true);
    props.create(createReservation);
  };
  return (
    <div className={classes.contanier}>
      <div className={classes.wrapper2}>
        <p>Date</p>
        <CalendarComponent className={classes.date} />
        <div className={classes.food}>
          <div className={classes.food1}>
            <FaGlassMartini />
            <p>10/15</p>
          </div>
          <div className={classes.food1}>
            <FaCookie />
            <p>10/15</p>
          </div>
          <div className={classes.food1}>
            <FaUtensils />
            <p>10/15</p>
          </div>
          <div className={classes.food1}>
            <FaCalendarCheck />
            <p>10/15</p>
          </div>
        </div>
      </div>
      <div className={classes.shiftTime}>
        <div className={classes.hero}>
          <p>Select Shift & Time</p>
          <div className={classes.heroTime}>
            <p
              onClick={FoodChangeHandler}
              className={
                !reservationFood ? classes.breakfast : classes.breakfastSelected
              }
            >
              Breakfast
            </p>
            <p
              onClick={FoodChangeHandler2}
              className={
                !reservationFood2 ? classes.lunch : classes.lunchSelected
              }
            >
              Lunch
            </p>
            <p
              onClick={FoodChangeHandler3}
              className={
                !reservationFood3 ? classes.dinner : classes.dinnerSelected
              }
            >
              Dinner
            </p>
          </div>
        </div>
        {reservationFood || reservationFood2 || reservationFood3 ? (
          <div className={classes.slotChanger}>
            <div className={classes.available}>
              <div>
                <p>Available Slots</p>
                <p>Crowd Limit</p>
              </div>
              <div
                onClick={SlotChangeHandler1}
                className={slot1 ? classes.slot1 : null}
              >
                <p>18:30</p>
                <p>2/15</p>
              </div>
              <div
                onClick={SlotChangeHandler2}
                className={slot2 ? classes.slot2 : null}
              >
                <p>18:45</p>
                <p>2/15</p>
              </div>
              <div
                onClick={SlotChangeHandler3}
                className={slot3 ? classes.slot3 : null}
              >
                <p>19:00</p>
                <p>0/15</p>
              </div>
              <div
                onClick={SlotChangeHandler4}
                className={slot4 ? classes.slot4 : null}
              >
                <p>19:15</p>
                <p className={classes.colorChange}>17/15</p>
              </div>
              <div
                onClick={SlotChangeHandler5}
                className={slot5 ? classes.slot5 : null}
              >
                <p>19:30</p>
                <p>12/15</p>
              </div>
              <div
                onClick={SlotChangeHandler6}
                className={slot6 ? classes.slot6 : null}
              >
                <p>19:48</p>
                <p>16/20</p>
              </div>
              <div
                onClick={SlotChangeHandler7}
                className={slot7 ? classes.slot7 : null}
              >
                <p>20:00</p>
                <p>8/15</p>
              </div>
              <div
                onClick={SlotChangeHandler8}
                className={slot8 ? classes.slot8 : null}
              >
                <p>20:15</p>
                <p>6/15</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default DateTime;
