import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import "../assets/css/pages/announcement.css";

import UserHeader from "../layouts/user-layout/UserHeader";
import UserFooter from "../layouts/user-layout/UserFooter";

import Conference2023 from "../assets/images/conference/Conference2023.jpg";
import Conference2016 from "../assets/images/conference/Conference2016.jpg";
import Conference20161 from "../assets/images/conference/Conference2016-1.jpg";
import Conference2018 from "../assets/images/conference/Conference2018.jpg";
import Conference2017 from "../assets/images/conference/Conference2017.jpg";
import Conference2022 from "../assets/images/conference/ConferenceBanner.jpg";
import Conference2019 from "../assets/images/announcement/1.jpg";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


const ConferenceInitail = [
  {
    id: 1,
    title: "2023 Annual Conference | Wellness starts from the inside",
    text: "The CAPE Executive team would like to invite you and your colleagues to attend the 2023 CAPE Conference in Calgary, Alberta from June 20th-22nd, in partnership with Calgary Police Service and Bow Valley College..",
    date: "June 20th-June 22nd 2023",
    img: Conference2023,
  },
  {
    id: 2,
    title:
      "2022 Annual Conference | Life never stops teaching, so never stop learning",
    text: "The CAPE Executive team would like to invite you and your colleagues to attend the 2022 Fall CAPE Conference in Niagara Falls, Ontario. We are excited to have the opportunity to connect, learn and socialize in person for the first time since 2019....",
    date: "October 25th-27th 2022",
    img: Conference2022,
  },
  {
    id: 3,
    title:
      "2019 Annual Conference | Connecting Research, Technology and Police Training.",
    text: "2019 Annual Conference | Connecting Research, Technology and Police Training. Connecting Research, Technology and Police Training. On behalf of all of the CAPE Executive we would like to invite you and your colleagues to attend the 2019 CAPE Conference...",
    date: "Feb 15, 2019",
    img: Conference2019,
  },
  {
    id: 4,
    title:
      "Bridging the Gap Between Academia & Police Training 2018",
    text: "We have never had a national body of Canadian Police Knowledge.  All too often we look to the US or the UK for solutions.  The time is now for a hub of information that is Canadian and inclusive",
    date: "June 25, 2018",
    img: Conference2018,
  }, 
   {
    id: 5,
    title:"C.A.P.E. 2017 Transforming Canada’s Police Training and Education",
    text: "In the past several decades Canada has an established reputation as having a system of police and public safety that is considered to be amongst the best in the world.",
    date: "June 12, 2017",
    img: Conference2017,
  },
  {
   id:6,
   title:"York Regional Police Presents",
   text: "Research, instruction design, interactive academics and practical skills.",
   date: "May 13, 2016",
   img: Conference2016,
 }, {
  id:7,
  title:"Warriors, Guardians, Problem Solvers | Defining Roles Through PBL Police Society for Problem Based Learning Annual Conference",
  text: "We are pleased to announce preliminary information for the 2015 PSPBL Annual Conference!The Lowell Massachusetts Police Department will host the 2016 Annual Conference June 22, 23 & 24, 2016.",
  date: "June 22 - 24, 2016",
  img: Conference20161,
},
];
const Conferences = () => {
  const [conference, setConference] = useState(ConferenceInitail);
  return (
    <>
      <UserHeader></UserHeader>
      <div role="presentation" className="breadcrumb">
        <h2>Conferences</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Home
          </Link>
          <Typography>conferences</Typography>
        </Breadcrumbs>
      </div>
      <section className="conference">
        <div className="container">
          <div className="row">
            {conference.map((item) => (
              <div className="col-12 col-md-4 mb-4">
                <div className="news_box">
                  <div className="news_img_wrapp">
                    <img src={item.img} />
                  </div>
                  <div className="news_desc">
                    <div className="news_date_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-calendar3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <span>{item.date}</span>
                    </div>

                    <h4>
                      <Link
                        to={`/conferenceDetail/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p>{item.text}</p>
                    <div className="news_footer">
                      <Link
                        to={`/conferenceDetail/${item.id}`}
                        className="btn btn_custom"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UserFooter></UserFooter>
    </>
  );
};

export default Conferences;
