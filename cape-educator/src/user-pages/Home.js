import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "../assest/css/pages/home.css";

import UserHeader from '../layouts/UserHeader';
import UserFooter from '../layouts/UserFooter';

import training from '../assest/images/icon/training.png';


function Home() {
  return (
    <>
      <UserHeader></UserHeader>
      <section className="banner">
      
      <div className="container">
          <div className="row align-center ">
              <div className="col-12 col-md-10 col-lg-7 banner_content">
       
                   
                  <h1 className="first_h1"> Canadian association of </h1>
                          <h1 className="element"
                                data-elements=" police education"></h1>
                     
                  <h3>
                      C.A.P.E. 2023 CONFERENCE
                  </h3>
                  <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      June 20th-22nd 2023
                  </p>
                  <span className="benner_span">
                      In partnership with <strong className="text_gradient ">
                          Calgary Police Service &
                          Bow Valley College
                      </strong>
                  </span>

                  <a href="#" className="btn btn_custom ">
                      Discover More
                  </a>
              </div>
          </div>
      </div>
  </section>
  <section className="objective">
        <div className="container">
            <div className="row">
                <h2 className="section_title">
                    The Objectives of <span> C.A.P.E.</span>
                </h2>
            </div>
            <div className="row">
                <div className="col-md-4 gx-lg-5">
                    <div className="obj_box">
                        <div className="box_title">
                            <div className="icon_wrapp">
                                <img src={training} />
                            </div>
                            <h3>Law Enforcement Training</h3>
                        </div>
                        <div className="box_desc">
                            <p>
                                CAPE provides advice and input regarding national and
                                regional law enforcement training and education
                                trends/needs as well as advocating and promoting the commitment to training.
                            </p>
                            <a href="#" className="text_gradient">
                                About Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 gx-lg-5">
                    <div className="obj_box">
                        <div className="box_title">
                            <div className="icon_wrapp">
                                <img src={training} />
                            </div>
                            <h3> Advise on Training Policy</h3>
                        </div>
                        <div className="box_desc">
                            <p>
                                We also advise on training specific policy and liaise between
                                We also advise on training specific policy and liaise between
                                operational training academies and academic institutions.
                            </p>
                            <a href="#" className="text_gradient">
                                Our Members
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 gx-lg-5">
                    <div className="obj_box">
                        <div className="box_title">
                            <div className="icon_wrapp">
                                <img src={training} />
                            </div>
                            <h3>Undertaking Law Enforcement</h3>
                        </div>
                        <div className="box_desc">
                            <p>
                                Finally, CAPE guides and undertakes law enforcement training and
                                education research and coordinates knowledge transfer initiatives.
                            </p>
                            <a href="#" className="text_gradient">
                                Contact Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className="about">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-lg-9">
                    <h2 className="section_title">What is <span> C.A.P.E.?</span></h2>
                    <h3>
                        Terms of Reference/Governance Framework
                    </h3>

                    <p>
                        The Canadian Association of Police Educators
                        (CAPE) promotes excellence in law enforcement
                        training and education through the guidance of innovative research,
                        program development, knowledge transfer, network facilitation
                        and collaborative training initiatives.
                    </p>
                    <a href="#" className="btn btn_custom">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="network">
        <div className="container">
            <div className="row">
                <h2 className="section_title">
                    Our Networks
                </h2>
            </div>
            <div className="row ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.tps.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/TorontoPolice.png" alt="Toronto Police Service" />
                                        </div>

                                        <h2>
                                            Toronto Police Service
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="http://www.opconline.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Ontorio.png" alt="Ontorio Police" />
                                        </div>
                                        <h2>
                                            opconline.ca
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.oape.org/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/OntarioAssociation.png" alt="Ontario Association" />
                                        </div>
                                        <h2>
                                            Ontario Association of Police Educators
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.saskatchewan.ca/residents/justice-crime-and-the-law/saskatchewan-police-college" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Saskatchewan.png" alt="Saskatchewan Police College" />
                                        </div>
                                        <h2>
                                            Saskatchewan Police College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.rcmp-grc.gc.ca/index.html" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/RoyalCanadian.png" alt="Royal Canadian Mounted Police" />
                                        </div>
                                        <h2>
                                            Royal Canadian Mounted Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.enpq.qc.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/QUEBEC_couleur.svg" alt="Quebec National Police Academy" />
                                        </div>
                                        <h2>
                                            Quebec National Police Academy
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.cpkn.ca/en/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Network.png" alt="Canadian Police Knowledge Network" />
                                        </div>
                                        <h2>
                                            Canadian Police Knowledge Network
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.jibc.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Justice.png" alt=" Justice Institute British Columbia" />
                                        </div>
                                        <h2>
                                            Justice Institute British Columbia
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.hollandcollege.com/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/ATLANTIC.png" alt="ATLANTIC POLICE ACADEMY" />
                                        </div>
                                        <h2>
                                            Atlantic Police Academy
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://brandon.ca/police" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Brandon.png" alt="City of Brandon - Brandon Police Service" />
                                        </div>
                                        <h2>
                                            City of Brandon - Brandon Police Service
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="http://www.policecouncil.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/psc.png" alt="Police Council" />
                                        </div>
                                        <h2>
                                            Police Council
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://assiniboine.net/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Assiniboine.png" alt="Assiniboine College" />
                                        </div>
                                        <h2>
                                            Assiniboine College
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.emond.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/emond.svg" alt=" Emond Publishing" />
                                        </div>
                                        <h2>
                                            Emond Publishing
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.algonquincollege.com/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Algonquin_College.svg" alt="Assiniboine College" />
                                        </div>
                                        <h2>
                                            Assiniboine College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.haltonpolice.ca/en/index.aspx/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Halton.svg" alt="Halton Police" />
                                        </div>
                                        <h2>
                                            Halton Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://bowvalleycollege.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/BowValley.png" alt="Bow Valley College" />
                                        </div>
                                        <h2>
                                            Bow Valley College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.georgiancollege.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Georgian.png" alt="Georgian College" />
                                        </div>
                                        <h2>
                                            Georgian College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.tru.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/tru.png" alt="Thompson Rivers University" />
                                        </div>
                                        <h2>
                                            Thompson Rivers University
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.opp.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/OntarioPolice.png" alt="Ontario Provincial Police" />
                                        </div>
                                        <h2>
                                            Ontario Provincial Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.collegelacite.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Accueil.png" alt="Accueil - La Cité" />
                                        </div>
                                        <h2>
                                            Accueil - La Cité
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-2 network_box">
                                    <a href="https://www.ccja.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Criminal.png" alt="Canadian Criminal Justice Academy" />
                                        </div>
                                        <h2>
                                            Canadian Criminal Justice Academy
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <!--

                --> */}
            </div>

        </div>
    </section>

    <section className="about_content">
        <div className="about_content_wrapp">
            <div className="col_right">
                <span className="sub_title text_gradient">
                    C.A.P.E.
                </span>
                <h2 className="section_title">
                    Membership
                </h2>
                <p className="about_content_desc">
                    CAPE membership is guided by the requirement for geographical,
                    subject matter expertise and government representation.
                    Association membership should be composed of representatives from:
                </p>
                <ul>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            Federal/provincial/municipal Police academies/training divisions (e.g. JIBC,RCMP Depot, OPC, École nationale de police du Québec, Calgary Police Service, Winnipeg Police Service, etc)
                        </p>
                    </li>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            Ontario Association of Police Educators (OAPE)
                        </p>
                    </li>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            Police Sector Council
                        </p>
                    </li>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>Provincial Solicitor General/ Justice Ministries</p>
                    </li>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            Canadian Police Knowledge Network
                        </p>
                    </li>
                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            University/College Law enforcement/Public Security programs
                        </p>
                    </li>

                    <li>
                        <div className="icon_wrapp">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </div>
                        <p>
                            CACP HR committee
                            <br />
                            The executive will ensure that the membership composition conforms to the above format.

                        </p>
                    </li>
                </ul>
            </div>
            <div className="col_left">
                <div className="about_img">

                </div>
            </div>
        </div>
    </section>

    <section className="event">
        <div className="container">
            <div className="row">
                <h2 className="section_title">
                    Announcements, News & Events
                </h2>
            </div>

            <div className="row owl-carousel_wrapp">
                <OwlCarousel items={4}  margin={15} autoplay ={true} className="owl-carousel owl-theme">
                    <div className="item">
                        <h3>OAPE 2015 Course</h3>
                        <span className="text_gradient">
                            March 25, 2015
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>Logo Design Competition</h3>
                        <span className="text_gradient">
                            September 29, 2016
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">

                        <h3>Problem Based Learning – Upcoming Certification</h3>
                        <span className="text_gradient">
                            February 6, 2017
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>Problem Based Learning – Upcoming Certification</h3>
                        <span className="text_gradient">
                            October 1, 2018
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>PSPBL Annual Conference 2015</h3>
                        <span className="text_gradient">
                            April 23, 2014
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>PSPBL Annual Conference 2015</h3>
                        <span className="text_gradient">
                            April 23, 2014
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>PSPBL Annual Conference 2015</h3>
                        <span className="text_gradient">
                            April 23, 2014
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                    <div className="item">
                        <h3>PSPBL Annual Conference 2015</h3>
                        <span className="text_gradient">
                            April 23, 2014
                        </span>
                        <a href="#" className="link_custom">More Info </a>
                    </div>
                </OwlCarousel>
            </div>


        </div>
    </section>

<UserFooter></UserFooter>
    </>
  );
}

export default Home;