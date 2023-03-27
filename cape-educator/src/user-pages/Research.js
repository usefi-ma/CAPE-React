import React from 'react';

import "../assest/css/pages/research.css";

import UserHeader from '../layouts/UserHeader';
import UserFooter from '../layouts/UserFooter';

import justiceinstitute from '../assest/images/network/justiceinstitute.png';
import CANSEBP from '../assest/images/network/CAN-SEBP.png';
import cpknrcsp from '../assest/images/network/cpkn-rcsp.png';




function Research(){
    return(
        <>
        <UserHeader></UserHeader>
          <div>
         

<section className="objective objective_reseach">
    <div className="container">
        <div className="row">
            <h2 className="section_title">
                Research
            </h2>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                <div className="obj_box">
                    <div className="box_title">
                        <div className="icon_wrapp">
                            <img src={justiceinstitute} />
                        </div>
                        <h3>Exposures to Potentially Traumatic Events Among Public Safety Personnel in Canada</h3>
                    </div>
                    <div className="box_desc">
                        <p>
                            December 2018Canadian Journal of Behavioural Science
                            <br />
                            DOI: 10.1037/cbs0000115.
                        </p>
                        <a href="https://www.researchgate.net/publication/329550261_Exposures_to_Potentially_Traumatic_Events_Among_Public_Safety_Personnel_in_Canada" className="btn btn_custom m-auto mt-4" target="_blank">
                            Read More
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                <div className="obj_box">
                    <div className="box_title">
                        <div className="icon_wrapp">
                            <img src={justiceinstitute} />
                        </div>
                        <h3>Mental health training, attitudes toward support, and screening positive for mental disorders</h3>
                    </div>
                    <div className="box_desc">
                        <p>
                            February 2019 Cognitive Behaviour Therapy
                            <br />
                            DOI: 10.1080/16506073.2019.1575900
                        </p>
                        <a href="https://www.researchgate.net/publication/331292873_Mental_health_training_attitudes_toward_support_and_screening_positive_for_mental_disorders" className="btn btn_custom m-auto mt-4" target="_blank">
                            Read More
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                <div className="obj_box">
                    <div className="box_title">
                        <div className="icon_wrapp">
                            <img src={CANSEBP} />
                        </div>
                        <h3> The Canadian Society of Evidence-Based Policing</h3>
                    </div>
                    <div className="box_desc">
                        <p>
                        </p>
                        <a href="https://www.can-sebp.net/" className="btn btn_custom m-auto mt-4" target="_blank">
                            Read More
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                <div className="obj_box">
                    <div className="box_title">
                        <div className="icon_wrapp">
                            <img src={cpknrcsp} />
                        </div>
                        <h3>Canadian Police Knowledge Network</h3>
                    </div>
                    <div className="box_desc">
                        <p>
                        </p>
                        <a href="https://www.cpkn.ca/en/" className="btn btn_custom m-auto mt-4" target="_blank">
                            Read More
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

          </div>
        
        <UserFooter></UserFooter>
        </>
    );
    
}


export default Research;