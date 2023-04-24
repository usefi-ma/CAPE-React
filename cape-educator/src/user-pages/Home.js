import React , { useState, useEffect } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

import training from '../assets/images/icon/training.png';
import advise from '../assets/images/icon/advise.png';
import law from '../assets/images/icon/law.png';
import membership from '../assets/images/about/membership1.png';
import imgEmpty from "../assets/images/EmptyUser.jpg";
import '../assets/css/pages/home.css'

function Home() {
    
    const[bannerData, setBannerData] = useState([]);
    //FETCH CALL FROM SERVER
    useEffect(() =>{
        const fetchAllBanner = async () =>{
        try{
            const res = await axios.get("http://localhost:3000/banner")
            setBannerData(res.data);
            console.log(res.data);
        }catch(error){
            console.error(error);
        }
        }
        fetchAllBanner();
    }, [])

  return (
   
    <>
       {bannerData.map((data) =>{ 
          return(  <>
     <section className="banner" style={{background: `linear-gradient(180deg, #091D4280 50%, var(--navy) 100%),center / cover no-repeat url(http://localhost:3000/banner/${data.Image})`}}>
    <UserHeader></UserHeader>
    <div className="container">
            <div className="row align-center ">
                <div className="col-12 col-md-10 col-lg-7 banner_content">
                      
                    <h1 className="first_h1 mb-3"> {data.BannerTitle}</h1>
                    <h3>
                       {data.EventTitle}
                    </h3>
                    <p className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        {data.Date}
                    </p>
                    <strong className="benner_span text_gradient w-100 d-block mb-3">
                       {data.Description}
                    </strong>
                    <Link to={data.BannerLink} className="btn btn_custom " target='_blank'>Discover More </Link>
                </div>
            </div>
        </div></section>   
          </> 
           );  
     })}
    <section className="objective">
        <div className="container">
            <div className="row">
                <h2 className="section_title">
                    The Objectives of <span> C.A.P.E.</span>
                </h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 gx-lg-4">
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
                            <Link to="/about" className="btn btn_custom "> About Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 gx-lg-4 ">
                    <div className="obj_box">
                        <div className="box_title">
                            <div className="icon_wrapp">
                                <img src={advise} />
                            </div>
                            <h3> Advise on Training Policy</h3>
                        </div>
                        <div className="box_desc">
                            <p>
                                We also advise on training specific policy and liaise between
                                We also advise on training specific policy and liaise between
                                operational training academies and academic institutions.
                            </p>
                            <Link to="/executive" className="btn btn_custom "> 
                                 Our Members
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 gx-lg-4">
                    <div className="obj_box">
                        <div className="box_title">
                            <div className="icon_wrapp">
                                <img src={law} />
                            </div>
                            <h3>Undertaking Law Enforcement</h3>
                        </div>
                        <div className="box_desc">
                            <p>
                                Finally, CAPE guides and undertakes law enforcement training and
                                education research and coordinates knowledge transfer initiatives.
                            </p>
                            <Link to="/contact" className="btn btn_custom "> 
                                Contact Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </Link>
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
                   
                    <Link to="/about" className="btn btn_custom ">
                    Read More
                                </Link>
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
            <div className="row justify-content-center">
                <div id="carouselExampleIndicators" className="carousel slide col-md-10" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.tps.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/TorontoPolice.png" alt="Toronto Police Service" />
                                        </div>

                                        <h2>
                                            Toronto Police Service
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="http://www.opconline.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Ontorio.png" alt="Ontorio Police" />
                                        </div>
                                        <h2>
                                            opconline.ca
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.oape.org/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/OntarioAssociation.png" alt="Ontario Association" />
                                        </div>
                                        <h2>
                                            Ontario Association of Police Educators
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.saskatchewan.ca/residents/justice-crime-and-the-law/saskatchewan-police-college" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Saskatchewan.png" alt="Saskatchewan Police College" />
                                        </div>
                                        <h2>
                                            Saskatchewan Police College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.rcmp-grc.gc.ca/index.html" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/RoyalCanadian.png" alt="Royal Canadian Mounted Police" />
                                        </div>
                                        <h2>
                                            Royal Canadian Mounted Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.enpq.qc.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/QUEBEC_couleur.svg" alt="Quebec National Police Academy" />
                                        </div>
                                        <h2>
                                            Quebec National Police Academy
                                        </h2>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.cpkn.ca/en/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Network.png" alt="Canadian Police Knowledge Network" />
                                        </div>
                                        <h2>
                                            Canadian Police Knowledge Network
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.jibc.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Justice.png" alt=" Justice Institute British Columbia" />
                                        </div>
                                        <h2>
                                            Justice Institute British Columbia
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.hollandcollege.com/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/ATLANTIC.png" alt="ATLANTIC POLICE ACADEMY" />
                                        </div>
                                        <h2>
                                            Atlantic Police Academy
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://brandon.ca/police" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Brandon.png" alt="City of Brandon - Brandon Police Service" />
                                        </div>
                                        <h2>
                                            City of Brandon - Brandon Police Service
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="http://www.policecouncil.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/psc.png" alt="Police Council" />
                                        </div>
                                        <h2>
                                            Police Council
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
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
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.emond.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/emond.svg" alt=" Emond Publishing" />
                                        </div>
                                        <h2>
                                            Emond Publishing
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.algonquincollege.com/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Algonquin_College.svg" alt="Assiniboine College" />
                                        </div>
                                        <h2>
                                            Assiniboine College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.haltonpolice.ca/en/index.aspx/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Halton.svg" alt="Halton Police" />
                                        </div>
                                        <h2>
                                            Halton Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://bowvalleycollege.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/BowValley.png" alt="Bow Valley College" />
                                        </div>
                                        <h2>
                                            Bow Valley College
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.georgiancollege.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Georgian.png" alt="Georgian College" />
                                        </div>
                                        <h2>
                                            Georgian College
                                        </h2>
                                    </a>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.tru.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/tru.png" alt="Thompson Rivers University" />
                                        </div>
                                        <h2>
                                            Thompson Rivers University
                                        </h2>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.opp.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/OntarioPolice.png" alt="Ontario Provincial Police" />
                                        </div>
                                        <h2>
                                            Ontario Provincial Police
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
                                    <a href="https://www.collegelacite.ca/" target="_blank">
                                        <div className="network_img_wrapp">
                                            <img src="./network/Accueil.png" alt="Accueil - La Cité" />
                                        </div>
                                        <h2>
                                            Accueil - La Cité
                                        </h2>
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 network_box">
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

            </div>

        </div>
    </section>

    <section className="about_content">
        <div className="container">
            <div className="row about_content_wrapp">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>
                                Federal/provincial/municipal Police academies/training divisions (e.g. JIBC,RCMP Depot, OPC, École nationale de police du Québec, Calgary Police Service, Winnipeg Police Service, etc)
                            </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>
                                Ontario Association of Police Educators (OAPE)
                            </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>
                                Police Sector Council
                            </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>Provincial Solicitor General/ Justice Ministries</p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>
                                Canadian Police Knowledge Network
                            </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <p>
                                University/College Law enforcement/Public Security programs
                            </p>
                        </li>

                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <div className="about_img">
                        <img src={membership} />

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5">
                    <div className="contact">
                        <h2 className="section_title">
                            Contact Us
                        </h2>
                        <p>
                            Contact us to learn more about our upcoming educational events and conferences.
                        </p>
                        <div className="social">
                            <a href="https://www.instagram.com/cape_police_educators/" target="_blank">
                                <div className="social_svg_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://twitter.com/cape_acifp" className="ms-1" target="_blank">
                                <div className="social_svg_wrapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="">
                            <Link to="/contact" className="btn btn_custom ">
                            Send Message
                                </Link>
                        </div>
                    </div>
                </div>
               <div className="col-12 col-lg-7">
                    <div className="map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.6668649940634!2d-79.43139718447185!3d44.58338427910034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2aabe26666e323%3A0xd665a2971948eb29!2sThe%20Canadian%20Association%20of%20Police%20Educators!5e0!3m2!1sen!2sca!4v1682356757560!5m2!1sen!2sca" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                     
                        </div>
                </div> 
            </div>
        </div>
    </section>
<UserFooter></UserFooter>
    </>
  );
}

export default Home;