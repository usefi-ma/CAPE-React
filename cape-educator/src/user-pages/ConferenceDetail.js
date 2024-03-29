import React, { useState,useEffect } from 'react';
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useParams, useNavigate,NavLink } from "react-router-dom";
import "../assets/css/pages/conferenceDetail.css";

import UserHeader from "../layouts/user-layout/UserHeader";
import aboutConference from "../assets/images/conference/about_conference.jpg";
import Chief from "../assets/images/conference/speaker/Chief.jpg";
import menuIcon from "../assets/images/menu_icon.svg";
import logo from "../assets/images/logo.png";
import Scroll from "../layouts/user-layout/Scroll";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};
  {/* <button onClick={()=>navigate(-1)}> Back</button>
    {id} */}
const ConferenceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [conItem,setConItem]=useState({});
  const [conSpeaker,setConSpeaker]=useState([]);
  const [conSponsor,setConSponsor]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/conference/${id}`);
      setConItem(res.data);
      console.log(res.data);

      const res2 = await axios.get(`http://localhost:3000/speaker/${id}`);
      setConSpeaker(res2.data);

      const res3 = await axios.get(`http://localhost:3000/sponsor/${id}`);
      setConSponsor(res3.data);

    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

  return (
    <>
     <section className="topbar conference_topbar">
        <div className="intro" id="Home"  style={{background: `linear-gradient(180deg, rgba(31,41,69,.55) 50%, rgb(31,41,69) 100%),center / cover no-repeat url(http://localhost:3000/conference/${conItem.BannerImage})`}}>
          <UserHeader></UserHeader>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-11 col-lg-9">
                <h2 className="">
                  {conItem.BannerTitle}
                  <span className="blue d-block">
                  {conItem.EventVenue}
                  </span>
                </h2>
                <strong className="blue">
                 {conItem.BannerDescription}
                  
                </strong>
                <div className="conference_dates mb-4">
                  <div className="conference_date mx-4">
                    <div className="intro_icon_wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-calendar2-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                      </svg>
                    </div>
                    <p>{conItem.Date}</p>
                  </div>

                  <div className="conference_date mt-1">
                    <div className="intro_icon_wrapper me-0 me-sm-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                    <p>{conItem.EventVenue}</p>
                  </div>
                </div>
                <a href="#About" className="button button-transparent">
                  About
                </a>
                <a href="#Contact" className="button button-transparent">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about_section" id="About">
        <div className="container">
          <div className="row w-100 m-auto h-100">
            <div className="col-12 col-md-6">
              <div className="about_content">
                <div className="title">
                  <span>About Conference</span>
                  <h2 className="title">{conItem.AboutTitle}</h2>
                </div>
                <p className="p_about">
                {conItem.AboutDescription}
                </p>
                {/* <p className="p_about">
                  We will have a number of outstanding speakers joining us in
                  Niagara Falls to talk about the importance of education and
                  continuous learning in policing.
                </p>
                <p className="p_about">
                  We are thrilled to announce that Peel Regional Police Chief &
                  OACP President Nishan Duraiappah will be kicking off the
                  conference as our opening keynote speaker on Day 1, followed
                  by our second keynote, OPP Commissioner Thomas Carrique on Day
                  2.
                </p> */}
                {/* <p className="p_about">
                  We know that the chance to re-connect with your colleagues,
                  learn from our engaging line-up of speakers and visit the
                  Niagara College and Niagara Regional Police Training Center
                  will make this the conference to attend in 2022.
                </p>
                <p className="p_about">
                  An agenda is now available (click here).
                </p> */}
              </div>
            </div>

            <div className="col-12 col-md-6 p-0 d-flex">
              <div className="about_img">
              <img src={`http://localhost:3000/conference/${conItem.AboutImage}`} alt={`${conItem.AboutImage}`}/>
                <div className="img_overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners" id="Sponsers">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h3>Sponsors</h3>
              </div>
            </div>
          </div>
          <div className="row owl-carousel_wrapp">
            <OwlCarousel
              className="slider-items owl-carousel conference_owl_carousel"
              {...options}
            >
        {conSponsor.map((data) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box item">
                <a href={data.Link} target="_blank">
                  <div className="network_img_wrapp">
                    <img src={`http://localhost:3000/sponsor/${data.Image}`} alt={`${data.Name}`}/>
                  </div>
                  <h2>{data.Name}</h2>
                </a>
              </div>
           ))}
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="speaker" id="Speakers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <span className="blue">Our Speakers</span>
                <h3 className='mb-5'>Who's Speaking?</h3>
                {/* <p>
                  There is a text for team.There is a text for team.There is a
                  text for team.There is a text for team.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row mb-5 pb-5">
          {conSpeaker.map((data) => (
             <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3">
             <div className="speaker_box">
               <div className="speaker_header">
                 <div
                   className="speaker_wrap_img"
                   style={{backgroundImage: `url(http://localhost:3000/speaker/${data.Image})`}}
                 ></div>
               </div>

               <h3>{data.FullName}</h3>
               <p>{data.Organization}</p>
        </div>
      </div>
      ))}
           
        
          </div>
        </div>
      </div>

      {/* <div className="price" id="Price">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <span className="blue">Our Pricing</span>
                <h3>Flexible Pricing Plans</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 gx-5 price_left">
              <div className="price_box">
                <h3>Basic Plan</h3>
                <strong>$59</strong>
                <div className="price_box_content">
                  <ul>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                  </ul>
                  <a href="#" className="button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 gx-5 price_middle">
              <div className="price_box">
                <h3>Basic Plan</h3>
                <strong>$59</strong>
                <div className="price_box_content">
                  <ul>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                  </ul>
                  <a href="#" className="button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 gx-5 price_right">
              <div className="price_box">
                <h3>Basic Plan</h3>
                <strong>$59</strong>
                <div className="price_box_content">
                  <ul>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                    <li className="icon_wrapp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <p>500 Malware Removal</p>
                    </li>
                  </ul>
                  <a href="#" className="button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="additional_info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="additional_info_box">
                <h3>Additional Information</h3>
                {conItem.AdditionalInfo}
                {/* <ul>
                  <li>
                    <p>
                      All individual reservations for{" "}
                      <em>Marriott Fallsview</em> <em>Hotel &amp; Spa</em> can
                      be made through the following link:<br></br>
                      <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1651777188398&amp;key=GRP&amp;app=resvlink">
                        <span>
                          https://www.marriott.com/event-reservations/reservation-link.mi?id=1651777188398&amp;key=GRP&amp;app=resvlink
                        </span>
                      </a>
                      <br></br>
                      or through the hotel's reservations department at 1-(888)
                      501-8916.
                    </p>
                  </li>
                  <li>
                    <p>
                      To receive the group discount and to ensure that all
                      reservations are properly coded to your group room block,
                      it is imperative that attendees request the special
                      convention rate for the{" "}
                      <strong>Canadian Association of Police Educators</strong>{" "}
                      when making your reservation.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reservations must be received by 5pm EST on Friday
                      September 23rd, 2022. After this date any unused rooms
                      will be released back to general hotel inventory.
                    </p>
                  </li>
                  <li>
                    <p className="mb-3">ROOM TYPES/RATES*:</p>
                    <ul className="ms-4">
                      <li>
                        <p>Riverview: $139/night</p>
                      </li>
                      <li>
                        <p>Fallsview: $169/night</p>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact_us" id="Contact">
        <div className="contact_content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <h3>Contact Info</h3>
                  <p>
                    {conItem.ContactDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
                <div className="contact_info_content">
                  <b className="mb-2">Address</b>
                  <p>
                  {conItem.ContactAddress}
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <div className="contact_info_content">
                  <b className="mb-2">E-mail</b>
                  <p>
                  {conItem.ContactEmail}

                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <div className="contact_info_content">
                  <b className="mb-2">Phone</b>
                  <p>
                    <a href={`tel:${conItem.ContactPhone}`}>  {conItem.ContactPhone}</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <div className="contact_info_content">
                  <b className="mb-2">Conference Will Start</b>
                  <p>{conItem.ContactEventDate}</p>
             
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map conference_map">
          <iframe
            src={conItem.MapLocation}
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

   
      <section className="footer">
  
        <div className="container">
          <div className="row menu_footer">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                  <div className="logo">
                    <img src={logo} />
                  </div>
                </a>
                <button
                  className="btn navbar-toggler border-3 px-2"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <img
                    style={{ width: 30 }}
                    src={menuIcon}
                    alt="menu icon"
                  ></img>
                </button>
                <div
                  className="offcanvas offcanvas-start-lg"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header d-flex d-lg-none justify-content-end">
                    <a
                      href="javascript:void(0) "
                      className="text-reset p-0"
                      data-bs-dismiss="offcanvas"
                      aria-label="close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFFFFF"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </a>
                  </div>
                  <div className="offcanvas-body p-lg-0">
                    {/* <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link " href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="About.html">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Executive.html">
                          Executive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Research.html">
                          Research
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="Conferences.html">
                          Conferences
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="Contact.html">
                          Contact
                        </a>
                      </li>
                    </ul> */}
                        <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          className="nav-link"
                          activeclassname="active"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/about"
                          className="nav-link"
                          activeclassname="active"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/executive"
                          className="nav-link"
                          activeclassname="active"
                        >
                          Executive
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/research"
                          className="nav-link"
                          activeclassname="active"
                        >
                          Research
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/conference"
                          activeclassname="active"
                        >
                          Conferences
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/contact"
                          activeclassname="active"
                        >
                          {" "}
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/signin"
                          className="nav-link"
                          activeclassname="active"
                        >
                          Sign In
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="row">
            <p>© 2023 C.A.P.E | Canadian Association of Police Educators </p>
          </div>
        </div>
      </section>
      <Scroll showBelow={250}></Scroll>
    </>
  );
};

export default ConferenceDetail;
