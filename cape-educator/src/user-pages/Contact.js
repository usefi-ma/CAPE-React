import React from "react";

import UserHeader from "../layouts/user-layout/UserHeader";
import UserFooter from "../layouts/user-layout/UserFooter";
import ContactForm from "../components/ContactForm";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <UserHeader></UserHeader>
      <div role="presentation" className="breadcrumb">
        <h2>Contact Us</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Home
          </Link>
          <Typography>Contact Us</Typography>
        </Breadcrumbs>
      </div>
      <div className="map_container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.3339541282853!2d-114.05819134822391!3d51.046921179461776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717ad00ad231a9%3A0x34c6c179aae00af8!2sBow%20Valley%20College%2C%20South%20Campus!5e0!3m2!1sen!2sca!4v1678123972520!5m2!1sen!2sca"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactForm></ContactForm>
      <UserFooter></UserFooter>
    </>
  );
};

export default Contact;
