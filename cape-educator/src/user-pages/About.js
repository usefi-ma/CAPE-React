import React from 'react';

import "../assets/css/index.css";
import "../assets/css/pages/about.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

import executive_icon from '../assets/images/about/executive_icon.png';
import Autority_icon from '../assets/images/about/Autority_icon.png';
import meeting_icon from '../assets/images/about/meeting_icon.png';
import objective from '../assets/images/about/objective.png';

function About() {
    return (
      <>
        <UserHeader></UserHeader>
        <section className="about_header">
        <div className="container">
            <div className="row header">
                <div className="col-12 col-md-12 col-lg-9">
                    <h2 className="section_title">
                        About <span>C.A.P.E.</span>
                    </h2>
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
                </div>
            </div>
        </div>
        </section>
    <section className="about_content">
        <div className="container">
            <div className="row about_content_wrapp">

                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <div className="about_img mt-0 mb-3">
                        <img src={objective} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                    <span className="sub_title text_gradient">
                        C.A.P.E.
                    </span>
                    <h2 className="section_title">
                        Objectives
                    </h2>
                    <ul>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p><strong className="text_gradient">Provide</strong> advice and input regarding national and regional law enforcement training and education trends/needs. </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p><strong className="text_gradient">Advocate </strong>and promote the commitment to training. </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p><strong className="text_gradient">Advise </strong>on training specific policy. </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p><strong className="text_gradient">Liaise </strong>between operational training academies and academic institutions. </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p>
                                <strong className="text_gradient">Guide </strong>
                                and undertake law enforcement training and education research.
                            </p>
                        </li>
                        <li>
                            <div className="icon_wrapp">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </div>
                            <p>
                                <strong className="text_gradient">Coordinate </strong>
                                knowledge transfer initiatives.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </section>
    <section className="about_boxes">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6  col-lg-4  col-xl-4">
                    <div className="about_boxes_wrapp">
                        <div className="title_wrapp">
                            <div className="icon_wrapp">
                                <img src={executive_icon} alt="executive" />
                            </div>
                            <div>
                                <h3>Executive</h3>
                                <p>
                                    (It is recommended that a minimum
                                    of one executive position be filled at all times
                                    by a representative from the
                                    Federal/Provincial/Municipal academy/training
                                    division cadre)
                                </p>
                            </div>
                        </div>
                        <div className="img_wrapp">
                        </div>
                        <div className="desc">
                            <p>
                                The duty of the executive is to run the affairs of
                                the association under guidance from the association
                                membership and in relation to
                                the Association terms of reference.
                            </p>
                            <p>
                                Executive terms of office are for a period of two years.
                                Terms of office can be extended for one additional
                                term with consent of the association membership.
                            </p>
                            <p>
                                Nominations for executive positions will be held at
                                the annual spring meeting and at the conclusion
                                of the current executive's official term.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 second">
                    <div className="about_boxes_wrapp">
                        <div className="title_wrapp">
                            <div className="icon_wrapp">
                                <img src={Autority_icon} alt="Autority" />
                            </div>
                            <div>
                                <h3>Authority and Jurisdiction</h3>
                                <p>
                                    Advice or initiatives forwarded by CAPE will be guided by CAPE terms of reference.
                                </p>
                            </div>
                        </div>
                        <div className="img_wrapp2">
                        </div>
                        <div className="desc">
                            <p>
                                All initiatives and or resolutions directed by CAPE shall
                                not be construed to be binding on an individual or
                                associated institution/agency where these resolutions
                                may effect or be contrary to rules, regulations,
                                procedures and or/by-laws of said individuals Department, Service or Institution.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div className="about_boxes_wrapp">
                        <div className="title_wrapp">
                            <div className="icon_wrapp">
                                <img src={meeting_icon} alt="executive" />
                            </div>
                            <div>
                                <h3>Meetings</h3>
                                <p>
                                    CAPE shall meet at least twice per year (Spring/Fall).
                                    In addition, a special meeting can
                                    be convened upon the request of the executive members.
                                </p>
                            </div>
                        </div>
                        <div className="img_wrapp3">
                        </div>
                        <div className="desc">
                            <p>
                                Meeting agenda and scheduling will be the  responsibility of the Committee chair
                                (In consultation with all executive members
                                and the general Association membership).
                            </p>
                            <p>
                                The annual spring meeting should coincide
                                with or be convened in tandem with an Association
                                sponsored/facilitated knowledge transfer
                                event (Workshop, conference, research working group session, etc)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <UserFooter></UserFooter>
    </>
  );
}

export default About;