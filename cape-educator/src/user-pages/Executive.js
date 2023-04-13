import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/executive.css";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import axios from "axios";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

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
                                <img src={`http://localhost:3000/executive/${item.Image}`} />
                            </div>
                        </div>
                        <h3>
                            <Link to={`/executive/${item.Id}`}>{item.FullName}</Link>
                        </h3>
                        <p>
                            {item.JobTitle}
                            <span className="d-block">{item.Organization}</span>
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