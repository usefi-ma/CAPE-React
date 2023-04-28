import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useParams,useNavigate} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/executive.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

import DaveTutte from '../assets/images/executive/Dave-Tutte.jpg';
const ExecutiveDetail = () => {

    const navigate=useNavigate();

    const {id}=useParams();
    const [executiveItem,setExecutiveItem]=useState({});
    
    useEffect(() => {
      const fetchAllExecutive = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/executive/${id}`);
          setExecutiveItem(res.data);
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchAllExecutive();
    }, [id]); // set id as dependency


  return (
    <>
        <UserHeader></UserHeader>
        <div role="presentation" className="breadcrumb">
        <h2>{executiveItem.FullName}</h2>
        
        <p className='executive_title w-100 text-center'> {executiveItem.JobTitle}</p>
        <p className='executive_title w-100 text-center'> {executiveItem.Organization}</p>
      </div>
    <section className="team_detail">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-5 gx-lg-5 team_item">
                    <div className="team_detail_image_wrapp">
                        <img src={`http://localhost:3000/executive/${executiveItem.Image}`} alt={`${executiveItem.FullName}`}/>
                       
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                    <div className="team_detail_desc">
                        <p>
                            {executiveItem.Description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* <button onClick={()=>navigate(-1)}> Back</button> */}

        <UserFooter></UserFooter>
    </>
  )
}

export default ExecutiveDetail