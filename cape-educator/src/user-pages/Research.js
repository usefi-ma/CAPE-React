import React,{ useState } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/pages/research.css";

import UserHeader from "../layouts/user-layout/UserHeader";
import UserFooter from "../layouts/user-layout/UserFooter";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import justiceinstitute from "../assets/images/network/justiceinstitute.png";
import CANSEBP from "../assets/images/network/CAN-SEBP.png";
import cpknrcsp from "../assets/images/network/cpkn-rcsp.png";

const ResearchInitail = [
  {
    id: 1,
    title:
      "Exposures to Potentially Traumatic Events Among Public Safety Personnel in Canada",
    desc: "December 2018Canadian Journal of Behavioural Science DOI: 10.1037/cbs0000115.",
    link:"https://www.researchgate.net/publication/329550261_Exposures_to_Potentially_Traumatic_Events_Among_Public_Safety_Personnel_in_Canada",
    img:justiceinstitute
  },
  {
    id: 2,
    title:
      "Mental health training, attitudes toward support, and screening positive for mental disorders",
    desc: "February 2019 Cognitive Behaviour Therapy DOI: 10.1080/16506073.2019.1575900",
    link:"https://www.researchgate.net/publication/331292873_Mental_health_training_attitudes_toward_support_and_screening_positive_for_mental_disorders",
    img:CANSEBP
  },
  {
    id: 3,
    title: "The Canadian Society of Evidence-Based Policing",
    desc: "",
    link:"https://www.can-sebp.net/",
    img:cpknrcsp
  },
  {
    id: 4,
    title: "Canadian Police Knowledge Network",
    desc: "",
    link:"https://www.cpkn.ca/en/",
    img:cpknrcsp
  },
];

function Research() {
    const [research,setResearch]=useState(ResearchInitail);
  return (
    <>
      <UserHeader></UserHeader>
      <div role="presentation" className="breadcrumb">
        <h2>Research</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Home
          </Link>
          <Typography>Research</Typography>
        </Breadcrumbs>
      </div>
      <div>
        <section className="objective objective_reseach">
          <div className="container">
            <div className="row">
            {research.map(item=>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                <div className="obj_box">
                  <div className="box_title">
                    <div className="icon_wrapp">
                      <img src={item.img} />
                    </div>
                    <h3>
                      {item.title}
                    </h3>
                  </div>
                  <div className="box_desc">
                    <p>
                    {item.desc}
                    </p>
                    <Link to={item.link} className="btn btn_custom m-auto mt-4"  target="_blank"> Read More </Link>
                  </div>
                </div>
              </div>
   )}
           
            </div>
          </div>
        </section>
      </div>

      <UserFooter></UserFooter>
    </>
  );
}

export default Research;
