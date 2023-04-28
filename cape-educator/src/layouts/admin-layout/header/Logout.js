import React ,{useState} from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const user = location.state.user;
  // const userData = JSON.parse(localStorage.getItem('sessionData'));
  const [userData, setUserData] = useState({});
  const handleLogout = () => {
    localStorage.removeItem(   );
    setUserData({});
    navigate("/Signin", { replace: true });
    window.history.pushState(null, null, "/signin");
  };

  return (
    <>
      <Box sx={{ my: 1.5, px: 2.5, display: "flex", alignItems: "center" }}>
        <Typography
          sx={{ cursor: "pointer", color: "text.secondary" }}
          variant="subtitle2"
          wrap
          onClick={() => handleLogout()}
        >
          Logout
        </Typography> 
      </Box>
    </>
  );
};

export default Logout;
