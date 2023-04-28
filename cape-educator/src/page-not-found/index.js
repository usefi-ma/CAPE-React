import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <>
      <div className="P_404">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>

        <Link to="/" className="btn btn_custom ">
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default index;
