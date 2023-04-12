import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/executive.css";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import axios from "axios";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import DaveTutte from '../assets/images/executive/Dave-Tutte.jpg';
import dominique from '../assets/images/executive/dominique.png';
import Lindsay from '../assets/images/executive/Lindsay-Sutherland.jpg';
import Melanie from '../assets/images/executive/Melanie.jpg';
import Simon from '../assets/images/executive/Simon.jpg';
import Mark from '../assets/images/executive/Mark.jpg';

// const ExecutiveInitail=[{
//     id:1,
//     name:'Dave Tutte',
//     jobTitle:'President',
//     palce:'Halton Regional Police',
//     img:DaveTutte
// },
// {
//     id:2,
//     name:'Dominique Germain',
//     jobTitle:'Vice-President',
//     palce:'Algonquin College',
//     img:dominique
// },{
//     id:3,
//     name:'Lindsay Sutherland',
//     jobTitle:'Director of Communications',
//     palce:'Emond Publishing',
//     img:Lindsay
// }
// ,{
//     id:4,
//     name:'Melanie Marchand',
//     jobTitle:'Co-Treasurer',
//     palce:'Georgian College',
//     img:Melanie
// }
// ,{
//     id:5,
//     name:'Simon Bradford',
//     jobTitle:'Co-Treasurer',
//     palce:'Georgian College',
//     img:Simon
// }
// ,{
//     id:6,
//     name:'Scott Mark',
//     jobTitle:'Director of Policies and Procedures',
//     palce:'Bow Valley College',
//     img:Mark
// }
// ]

const Executive = () => {
    const [executive,setExecutive]=useState([]);
      //FETCH CALL FROM SERVER
  useEffect(() => {
    const fetchAllExecutive = async () => {
      try {
        const res = await axios.get("http://localhost:3000/executive");
        setExecutive(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllExecutive();
  }, []);
   
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
      <div className="executive" id="Speakers">
        <div className="container">
            <div className="row">
                {executive.map(item=>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="executive_box">
                        <div className="executive_header">
                            <div className="executive_wrap_img" >
                                <img src={item.img} />
                            </div>
                        </div>
                        <h3>
                            <Link to={`/executive/${item.Id}`}>{item.FullName}</Link>
                        </h3>
                        <p>
                            {item.JobTitle}
                            <span className="d-block">{item.Description}</span>
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