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
      <ContactForm></ContactForm>
      <div className="map_container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.6668649940634!2d-79.43139718447185!3d44.58338427910034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2aabe26666e323%3A0xd665a2971948eb29!2sThe%20Canadian%20Association%20of%20Police%20Educators!5e0!3m2!1sen!2sca!4v1682356757560!5m2!1sen!2sca"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <UserFooter></UserFooter>
    </>
  );
};

export default Contact;
