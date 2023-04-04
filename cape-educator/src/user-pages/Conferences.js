import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/announcement.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

const ConferenceInitail=[{
    id:1,
    title:'2019 Annual Conference | Connecting Research, Technology and Police Training.',
    text:'2019 Annual Conference | Connecting Research, Technology and Police Training. Connecting Research, Technology and Police Training. On behalf of all of the CAPE Executive we would like to invite you and your colleagues to attend the 2019 CAPE Conference...',
    date:'Feb 15, 2019' 
}]
const Conferences = () => {
    const [conference,setConference]=useState(ConferenceInitail);
  return (
    <>
    <UserHeader></UserHeader>
    <section className="conference">
        <div className="container">
            <div className="row">
                <h2 className="section_title">
                    <span>Conferences</span>
                </h2>
            </div>
            <div className="row">
                {conference.map(item=>
                <div className="col-12 col-md-4">
                    <div className="news_box">
                        <div className="news_img_wrapp">
                        </div>
                        <div className="news_desc">
                            <div className="news_date_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="text_gradient">{item.date}</span>
                            </div>

                            <h4>
                                <a href="ConferenceDetail.html">
                                 {item.title}
                                </a>
                            </h4>
                            <p>
                               {item.text}
                            </p>
                            <div className="news_footer">
                                {/* <a href="ConferenceDetail.html" >
                                    Read More
                                </a> */}
                                <Link to={`/conferenceDetail/${item.id}`} className="btn btn_custom">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                  )}
            </div>
          
        </div>
    </section>
    
    <UserFooter></UserFooter>

    </>
  )
}

export default Conferences