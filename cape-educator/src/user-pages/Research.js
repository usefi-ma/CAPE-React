import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/pages/research.css";

import UserHeader from "../layouts/user-layout/UserHeader";
import UserFooter from "../layouts/user-layout/UserFooter";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function Research() {
  const [research, setResearch] = useState([]);

  //FETCH CALL FROM SERVER
  useEffect(() => {
    const fetchAllExecutive = async () => {
      try {
        const res = await axios.get("http://localhost:3000/research");
        setResearch(res.data);
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
              {research.map((item) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 gx-xl-5 mb-5">
                  <div className="obj_box">
                    <div className="box_title">
                      <div className="icon_wrapp">
                      <img src={`http://localhost:3000/research/${item.Image}`} />
                      </div>
                      <h3>{item.Title}</h3>
                    </div>
                    <div className="box_desc">
                      <p>{item.Description}</p>
                      <Link
                        to={item.Link}
                        className="btn btn_custom m-auto mt-4"
                        target="_blank"
                      >
                        {" "}
                        Read More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <UserFooter></UserFooter>
    </>
  );
}

export default Research;
