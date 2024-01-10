import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBriefcase, FaMapPin } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

import { Learning } from "./Learning";
import "./Company.scss";
import { Overlay } from "../UI/Overlay";
export const Company = ({ data, close, show }) => {
  useEffect(() => {
    // Add or remove 'modal-open' class to body based on the modal state
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup: remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  return ReactDOM.createPortal(
    <Overlay>
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
    </Overlay>,
    document.getElementById("company-portal")
  );
};
