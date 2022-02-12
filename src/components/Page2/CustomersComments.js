import React, { useState } from "react";
import classes from "./CustomersComments.module.css";

import { FaStar } from "react-icons/fa";

const CommentsTags = () => {
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [select7, setSelect7] = useState(false);
  const [select8, setSelect8] = useState(false);
  const [select9, setSelect9] = useState(false);
  const [select10, setSelect10] = useState(false);
  const TagsSelectHandler = () => {
    setSelect(!select);
  };
  const TagsSelectHandler2 = () => {
    setSelect2(!select2);
  };
  const TagsSelectHandler3 = () => {
    setSelect3(!select3);
  };
  const TagsSelectHandler4 = () => {
    setSelect4(!select4);
  };
  const TagsSelectHandler5 = () => {
    setSelect5(!select5);
  };
  const TagsSelectHandler6 = () => {
    setSelect6(!select6);
  };
  const TagsSelectHandler7 = () => {
    setSelect7(!select7);
  };
  const TagsSelectHandler8 = () => {
    setSelect8(!select8);
  };
  const TagsSelectHandler9 = () => {
    setSelect9(!select9);
  };
  const TagsSelectHandler10 = () => {
    setSelect10(!select10);
  };

  return (
    <div className={classes.container}>
      <div className={classes.tagsHead}>
        <div className={classes.tags}>
          <FaStar />
          <p>Customer tags</p>
        </div>
      </div>

      <div className={classes.mainContainer}>
        <div className={classes.hero2}>
          <div className={classes.wrapper2}>
            <div className={classes.heroTags}>
              <div className={classes.heroTags1}>
                <p
                  className={
                    select
                      ? classes.BoothRequestedOne
                      : classes.BoothRequestedOne1
                  }
                  onClick={TagsSelectHandler}
                >
                  Friend of Owner {select ? <span>X</span> : null}
                </p>
                <p
                  className={select2 ? classes.HighChair : classes.HighChair1}
                  onClick={TagsSelectHandler2}
                >
                  VIP {select2 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    select3 ? classes.BirthdayOne : classes.BirthdayOne1
                  }
                  onClick={TagsSelectHandler3}
                >
                  Influencer {select3 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    select4 ? classes.BirthdayTwo : classes.BirthdayTwo1
                  }
                  onClick={TagsSelectHandler4}
                >
                  Alert The chef{select4 ? <span>X</span> : null}
                </p>
                <p
                  className={select5 ? classes.WheelChair : classes.WheelChair1}
                  onClick={TagsSelectHandler5}
                >
                  Blogger{select5 ? <span>X</span> : null}
                </p>
              </div>
              <div className={classes.heroTags1}>
                <p
                  className={
                    select6
                      ? classes.BoothRequestedTwo
                      : classes.BoothRequestedTwo1
                  }
                  onClick={TagsSelectHandler6}
                >
                  Press {select6 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    select7 ? classes.PatioRequested : classes.PatioRequested1
                  }
                  onClick={TagsSelectHandler7}
                >
                  Friend of Manager {!select7 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    !select8 ? classes.QuiteTable : classes.QuiteTable1
                  }
                  onClick={TagsSelectHandler8}
                >
                  Birthday {!select8 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    select9
                      ? classes.SpecialOccasions
                      : classes.SpecialOccasions1
                  }
                  onClick={TagsSelectHandler9}
                >
                  Wheel chair access {!select9 ? <span>X</span> : null}
                </p>
                <p
                  className={
                    select10 ? classes.Graduation : classes.Graduation1
                  }
                  onClick={TagsSelectHandler10}
                >
                  Wheel chair access{!select10 ? <span>X</span> : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsTags;
