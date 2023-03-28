import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useParams,useNavigate } from 'react-router-dom';
import "../assets/css/pages/conferenceDetail.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import aboutConference from '../assets/images/conference/about_conference.jpg';
import Chief from '../assets/images/conference/speaker/Chief.jpg';
import menuIcon from '../assets/images/menu_icon.svg'
import logo from '../assets/images/logo.png';



const ConferenceDetail = () => {
    const {id}=useParams();
    const navigate=useNavigate();
  return (
    <>
    <section className="topbar conference_topbar">
        <div className="intro" id="Home">
            
            <UserHeader></UserHeader>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-11 col-lg-9">
                        <h2 className="">
                            C.A.P.E. 2022 FALL CONFERENCE
                            <span className="blue d-block">
                                In NIAGARA Falls, Ontario
                            </span>
                        </h2>
                        <p>
                            In partnership with <strong className="blue">Niagara Regional Police Service & Niagara College</strong>
                        </p>
                        <div className="conference_dates mb-4">
                            <div className="conference_date mx-4">
                                <div className="intro_icon_wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                    </svg>
                                </div>
                                <p>
                                    October 25th-27th 2022
                                </p>
                            </div>

                            <div className="conference_date mt-1">
                                <div className="intro_icon_wrapper me-0 me-sm-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </div>
                                <p>
                                    In NIAGARA falls, Ontario
                                </p>

                            </div>
                        </div>
                        <a href="#About" className="button button-transparent">About</a>
                        <a href="#Contact" className="button button-transparent">contact us</a>
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
                            <h2 className="title">Welcome to the Conference 2022</h2>
                        </div>
                        <p className="p_about">
                            The CAPE Executive team would like to invite you and your colleagues to attend the 2022 Fall CAPE Conference in Niagara Falls, Ontario. We are excited to have the opportunity to connect, learn and socialize in person for the first time since 2019.
                        </p>
                        <p className="p_about">
                            We will have a number of outstanding speakers joining us in Niagara Falls to talk about the importance of education and continuous learning in policing.
                        </p>
                        <p className="p_about">
                            We are thrilled to announce that Peel Regional Police Chief & OACP President Nishan Duraiappah will be kicking off the conference as our opening keynote speaker on Day 1, followed by our second keynote, OPP Commissioner Thomas Carrique on Day 2.
                        </p>
                        <p className="p_about">
                            We know that the chance to re-connect with your colleagues, learn from our engaging line-up of speakers and visit the Niagara College and Niagara Regional Police Training Center will make this the conference to attend in 2022.
                        </p>
                        <p className="p_about">
                            An agenda is now available (click here).
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 p-0 d-flex">
                    <div className="about_img">
                        <img src={aboutConference} alt="" />
                        <div className="img_overlay">
                        </div>
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
                        <h3>
                            Sponsors
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row owl-carousel_wrapp">
            <OwlCarousel lassName="owl-carousel owl-theme" dots loop margin={10} items={6} nav autoplay>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.saskatchewan.ca/residents/justice-crime-and-the-law/saskatchewan-police-college" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/Saskatchewan.png" alt="Saskatchewan Police College"></img>
                                </div>
                                <h2>
                                    Saskatchewan Police College
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.oape.org/" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/OntarioAssociation.png" alt="Ontario Association"></img>
                                </div>
                                <h2>
                                    Ontario Association of Police Educators
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.rcmp-grc.gc.ca/index.html" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/RoyalCanadian.png" alt="Royal Canadian Mounted Police"></img>
                                </div>
                                <h2>
                                    Royal Canadian Mounted Police
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.haltonpolice.ca/en/index.aspx/" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/Halton.svg" alt="Halton Police"></img>
                                </div>
                                <h2>
                                    Halton Police
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.tru.ca/" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/tru.png" alt="Thompson Rivers University"></img>
                                </div>
                                <h2>
                                    Thompson Rivers University
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.opp.ca/" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/OntarioPolice.png" alt="Ontario Provincial Police"></img>
                                </div>
                                <h2>
                                    Ontario Provincial Police
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="network_box">
                            <a href="https://www.hollandcollege.com/" target="_blank">
                                <div className="network_img_wrapp">
                                    <img src="./network/ATLANTIC.png" alt="ATLANTIC POLICE ACADEMY"></img>
                                </div>
                                <h2>
                                    Atlantic Police Academy
                                </h2>
                            </a>
                        </div>
                    </div>
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
                        <h3>Who's Speaking?</h3>
                        <p>There is a text for team.There is a text for team.There is a text for team.There is a text for team.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" style={{backgroundImage: `url(${Chief})`}}>
                            </div>
                        </div>

                        <h3>
                            Chief Nishan Duraiappah
                        </h3>
                        <p>The place he is working on</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" style={{backgroundImage: `url(${Chief})`}}>
                            </div>
                        </div>

                        <h3> Johannes Hammerstein</h3>
                        <p>The place he is working on</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" style={{backgroundImage: `url(${Chief})`}}>
                            </div>
                        </div>

                        <h3>
                            Chief Nishan Duraiappah
                        </h3>
                        <p>The place he is working on</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" style={{backgroundImage: `url(${Chief})`}}>
                            </div>
                        </div>

                        <h3> Johannes Hammerstein</h3>
                        <p>The place he is working on</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    

    <div className="price" id="Price">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title">
                        <span className="blue">
                            Our Pricing
                        </span>
                        <h3>Flexible Pricing Plans</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 gx-5 price_left">
                    <div className="price_box">
                        <h3>
                            Basic Plan
                        </h3>
                        <strong>$59</strong>
                        <div className="price_box_content">
                            <ul>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                            </ul>
                            <a href="#" className="button">Purchase Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-4 gx-5 price_middle">
                    <div className="price_box">
                        <h3>
                            Basic Plan
                        </h3>
                        <strong>$59</strong>
                        <div className="price_box_content">
                            <ul>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                            </ul>
                            <a href="#" className="button">Purchase Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-4 gx-5 price_right">
                    <div className="price_box">
                        <h3>
                            Basic Plan
                        </h3>
                        <strong>$59</strong>
                        <div className="price_box_content">
                            <ul>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                                <li className="icon_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg>
                                    <p>500 Malware Removal</p>
                                </li>
                            </ul>
                            <a href="#" className="button">Purchase Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <section className="additional_info">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="additional_info_box">
                        <h3>Additional Information</h3>
                        <ul>
                            <li>
                                <p>
                                   All individual reservations for <em>Marriott Fallsview</em> <em>Hotel &amp; Spa</em> can be made through the following link:<br></br>
                                    <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1651777188398&amp;key=GRP&amp;app=resvlink">
                                        <span>https://www.marriott.com/event-reservations/reservation-link.mi?id=1651777188398&amp;key=GRP&amp;app=resvlink</span>
                                    </a>
                                    <br></br>
                                    or through the hotel's reservations department at 1-(888) 501-8916. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    To receive the group discount and to ensure that all reservations are properly coded to your group room block, it is imperative that attendees request the special convention rate for the <strong>Canadian Association of Police Educators</strong> when making your reservation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Reservations must be received by 5pm EST on Friday September 23rd, 2022. After this date any unused rooms will be released back to general hotel inventory.
                                </p>
                            </li>
                            <li>
                                <p className="mb-3">
                                    ROOM TYPES/RATES*:
                                </p>
                                <ul className="ms-4">
                                    <li><p>Riverview: $139/night</p></li>
                                    <li><p>Fallsview: $169/night</p></li>
                                </ul>
                            </li>
                        </ul>
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
                            <h3>
                                Contact Info
                            </h3>
                            <p>
                                If you have any questions or concerns, Feel free to reach out to the conference organizers
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                        </svg>
                        <div className="contact_info_content">
                            <b className="mb-2">Address</b>
                            <p>
                                1916 McCall Landing NE, Calgary, AB T2E 9B5, Canada
                                Areo Center SAIT.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <div className="contact_info_content">
                            <b className="mb-2">E-mail</b>
                            <p>
                                Sara.Ashoori@sait.ca
                                <br></br>
                                mishal.arif@sait.ca
                                <br></br>
                                Rick.Duchscher@sait.ca
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        <div className="contact_info_content">
                            <b className="mb-2">Phone</b>
                            <p>
                                Sara:<a href="tel:+14037146613"> (403) 714 - 6613</a>
                                <br></br>
                                Mishal:<a href="tel:+13138001133"> (313) 800 - 1133</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 contact_info mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                        <div className="contact_info_content">
                            <b className="mb-2">Conference Will Start</b>
                            <p>
                                Day 1: Monday May 2, 2022
                                7:30 am to 8:30 pm
                            </p>
                            <p>
                                Day 2: Tuesday May 3rd, 2022
                                8:00am to 4:00pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="map conference_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.4462547599937!2d-114.0923187842463!3d51.06331177956471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2143bc8e7397787f!2sSAIT%20Campus%20Centre!5e0!3m2!1sen!2sca!4v1642129597073!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>

    <div className="gotop" id="gotop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
    </div>



    <section className="footer">
        <svg viewbox="0 0 100 25">
            <path fill="#1f2945" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
        </svg>
        <div className="container">
            <div className="row menu_footer">
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <div className='container-fluid'>
                        <a className='navbar-brand text-white' href='#'>
                            <div className="logo">
                                <img src={logo} />
                            </div>
                        </a>
                        <button className='btn navbar-toggler border-3 px-2' type='button' data-bs-toggle='offcanvas'
                                data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
                            <img style={{width: 30}} src={menuIcon} alt='menu icon'></img>
                        </button>
                        <div className='offcanvas offcanvas-start-lg' tabindex='-1' id='offcanvasExample'
                             aria-labelledby='offcanvasExampleLabel'>
                            <div className='offcanvas-header d-flex d-lg-none justify-content-end'>
                                <a href='javascript:void(0) '
                                   className='text-reset p-0'
                                   data-bs-dismiss='offcanvas'
                                   aria-label='close'>
                                    <svg xmlns='http://www.w3.org/2000/svg'
                                         width='24'
                                         height='24'
                                         fill='#FFFFFF'
                                         className='bi bi-x-circle'
                                         viewBox='0 0 16 16'>
                                        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                                    </svg>
                                </a>
                            </div>
                            <div className='offcanvas-body p-lg-0'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <a className='nav-link ' href='index.html'>Home</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='About.html'>About Us</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='Executive.html'>Executive</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='Research.html'>Research</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link active' href='Conferences.html'>Conferences</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='Contact.html'>Contact</a>
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
    </>
  )
}

export default ConferenceDetail