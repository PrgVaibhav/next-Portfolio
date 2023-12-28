import React, { useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { SectionWrapper } from "../helpers/SectionWrapper";

import { FaStar, FaBriefcase, FaMapPin } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Button } from "../UI/Button";
import { Company } from "./Company";

import experiences from "../../data/ExperienceData.json";

import "./Experience.scss";
export const Experience = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(experiences.experience);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [show, setShow] = useState(false);

  const clickHandler = (id) => {
    const foundData = data.find((item) => item.id === id);
    setSelectedCompany(foundData);
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };

  return (
    <>
      {show && <Company data={selectedCompany} close={closeHandler} />}
      <SectionWrapper label="Experience section">
        <div className="experience">
          <div className="experience_header">
            <div className="top">
              <h2>🔮 Experience.</h2>
              <p>Aren't we learning and gaining experience every day? :)</p>
            </div>
          </div>

          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {data.map((item) => (
              <TimelineItem key={item.id}>
                <>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent key={item.id}>
                    <div className="card" key={item.id}>
                      <div className="card-top">
                        <h2>
                          {item.company}
                          {item.current && <FaStar />}
                        </h2>
                        <p>
                          <FaBriefcase className="icon" /> {item.title}
                        </p>
                        <p>
                          <FaMapPin className="icon" /> {item.location}
                        </p>
                        <p>
                          <BsCalendar2DateFill className="icon" />
                          {item.duration}
                        </p>
                      </div>
                      <div className="controls">
                        <Button onClick={() => clickHandler(item.id)}>
                          Read More
                        </Button>
                      </div>
                    </div>
                  </TimelineContent>
                </>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </SectionWrapper>
    </>
  );
};
