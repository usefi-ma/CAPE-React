import React from 'react'
import {
    Box,
    Typography
  } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('sessionData'));
    const handleLogout = () =>{
        localStorage.removeItem('sessionData');
        navigate('/signin');
        }
  return (
    <>
      <Box sx={{ my: 1.5, px: 2.5,display: 'flex',alignItems:'center' }} >
            <Typography sx={{cursor:'pointer',color: "text.secondary"}}
              variant="subtitle2"
              wrap 
              onClick={()=>handleLogout()}>
              Logout
            </Typography>
          </Box>

    
    </>
  )
}

export default Logout