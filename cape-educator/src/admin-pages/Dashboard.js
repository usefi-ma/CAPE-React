import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Typography,Avatar
} from "@mui/material";

import { styled, alpha } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";


import { AppWidgetSummary } from "../sections/@dashboard/app";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5
}));

export default function Dashboard() {
  const theme = useTheme();

  const notify = () => toast("Wow so easy!");

  const location = useLocation();
  const user = location.state.user;

  const [conCount, setConCount]=useState({});
  const [conExecutive, setConExecutive]=useState({});
  const [conResearch, setConResearch]=useState({});
  const [conUser, setConUser]=useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/conferenceCount`);
        setConCount(res.data);
        console.log(res.data);
  
        const res2 = await axios.get(`http://localhost:3000/countexecutive`);
        setConExecutive(res2.data);
  
        const res3 = await axios.get(`http://localhost:3000/countresearch`);
        setConResearch(res3.data);

        const res4 = await axios.get(`http://localhost:3000/countuser`);
        setConUser(res4.data);
  
  
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);



  return (
    <>
      <Box sx={{ my: 1.5, px: 0 }}>
        <Link underline="none">
          <StyledAccount>
            {/* <Avatar src={account.photoURL} alt="photoURL" /> */}

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.FullName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {user.Email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Conferences"
              total={ conCount['COUNT(Id)']}
              icon={"ant-design:fund-projection-screen-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Executives"
              total={conExecutive['COUNT(Id)']}
              color="info"
              icon={"ant-design:fork-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Researches"
              total={conResearch['COUNT(Id)']}
              color="warning"
              icon={"ant-design:file-text-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={conUser['COUNT(Id)']}
              color="error"
              icon={"ant-design:team-outlined"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
