import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/executive.css";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import DaveTutte from '../assets/images/executive/Dave-Tutte.jpg';
import dominique from '../assets/images/executive/dominique.png';
import Lindsay from '../assets/images/executive/Lindsay-Sutherland.jpg';
import Melanie from '../assets/images/executive/Melanie.jpg';
import Simon from '../assets/images/executive/Simon.jpg';
import Mark from '../assets/images/executive/Mark.jpg';

const ExecutiveInitail=[{
    id:1,
    name:'Dave Tutte',
    jobTitle:'President',
    palce:'Halton Regional Police',
    img:DaveTutte
},
{
    id:2,
    name:'Dominique Germain',
    jobTitle:'Vice-President',
    palce:'Algonquin College',
    img:dominique
},{
    id:3,
    name:'Lindsay Sutherland',
    jobTitle:'Director of Communications',
    palce:'Emond Publishing',
    img:Lindsay
}
,{
    id:4,
    name:'Melanie Marchand',
    jobTitle:'Co-Treasurer',
    palce:'Georgian College',
    img:Melanie
}
,{
    id:5,
    name:'Simon Bradford',
    jobTitle:'Co-Treasurer',
    palce:'Georgian College',
    img:Simon
}
,{
    id:6,
    name:'Scott Mark',
    jobTitle:'Director of Policies and Procedures',
    palce:'Bow Valley College',
    img:Mark
}
]

const Executive = () => {
    const [executive,setExecutive]=useState(ExecutiveInitail);
  return (
    <>
      <UserHeader></UserHeader>
      <div role="presentation" className="breadcrumb">
        <h2>Executive</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Home
          </Link>
          <Typography>Executive</Typography>
        </Breadcrumbs>
      </div>
      <div className="speaker executive" id="Speakers">
        <div className="container">
            <div className="row">
                {executive.map(item=>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" >
                                <img src={item.img} />
                            </div>
                        </div>
                        <h3>
                            <Link to={`/executive/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p>
                            {item.jobTitle}
                            <span className="d-block">{item.palce}</span>
                        </p>

                    </div>
                </div>
                )}
            </div>

        </div>
    </div>





      <UserFooter></UserFooter>
    </>
  )
}

export default Executive