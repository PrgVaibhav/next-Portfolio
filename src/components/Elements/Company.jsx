import React from "react";
import ReactDOM from "react-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBriefcase, FaMapPin } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

import { Learning } from "./Learning";
import "./Company.scss";
export const Company = ({ data, close }) => {
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="company-portal">
        <div className="controls">
          <p onClick={close}>
            <MdKeyboardDoubleArrowRight className="icon" />
          </p>
        </div>
        <div className="company-portal-top">
          <h2>{data.company}</h2>
          <p>
            <FaBriefcase className="icon" /> {data.title}
          </p>
          <p>
            <FaMapPin className="icon" /> {data.location}
          </p>
          <p>
            <BsCalendar2DateFill className="icon" /> {data.duration}
          </p>
        </div>
        <div className="learnings">
          <h3>Learnings:</h3>

          {data?.learnings?.map((learning) => (
            <Learning learning={learning} key={learning.id} />
          ))}
        </div>
        <div className="controls">
          <p onClick={close}>
            <MdKeyboardDoubleArrowRight className="icon" /> Close
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("company-portal")
  );
};
