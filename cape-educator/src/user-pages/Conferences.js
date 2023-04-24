import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import "../assets/css/pages/announcement.css";

import UserHeader from "../layouts/user-layout/UserHeader";
import UserFooter from "../layouts/user-layout/UserFooter";

import Conference2023 from "../assets/images/conference/Conference2023.jpg";
import Conference2022 from "../assets/images/conference/ConferenceBanner.jpg";
import Conference2019 from "../assets/images/announcement/1.jpg";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import axios from "axios";

const Conferences = () => {
  const [conference, setConference] = useState([]);

  // Fetch conferences from database
  useEffect(() => {
    const fetchAllConferences = async () => {
      try {
        const res = await axios.get("http://localhost:3000/conference");
        setConference(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllConferences();
  }, []);


  return (
    <>
      <UserHeader></UserHeader>
      <div role="presentation" className="breadcrumb">
        <h2>Conferences</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Home
          </Link>
          <Typography>Conferences</Typography>
        </Breadcrumbs>
      </div>
      <section className="conference">
        <div className="container">
          <div className="row">
            {conference.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="news_box">
                  <div className="news_img_wrapp">
                    <img src={`http://localhost:3000/conference/${item.Image}`} />
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
                      <span>{item.Date}</span>
                    </div>

                    <h4>
                      <Link
                        to={`/conferenceDetail/${item.Id}`}>
                        {item.ConferenceTitle}
                      </Link>
                    </h4>
                    <p >{item.Description}</p>
                    <div className="news_footer">
                      <Link
                        to={`/conferenceDetail/${item.Id}`}
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
