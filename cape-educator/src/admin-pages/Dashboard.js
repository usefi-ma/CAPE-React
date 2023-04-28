import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

import { AppWidgetSummary } from "../sections/@dashboard/app";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function Dashboard() {
  const theme = useTheme();
  const [conCount, setConCount] = useState({});
  const [conExecutive, setConExecutive] = useState({});
  const [conResearch, setConResearch] = useState({});
  const [conUser, setConUser] = useState({});

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
  //  const location = useLocation();
  //    const user = location.state.user;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard {userData.FullName}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Conferences"
              total={conCount["COUNT(Id)"]}
              icon={"ant-design:fund-projection-screen-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Executives"
              total={conExecutive["COUNT(Id)"]}
              color="info"
              icon={"ant-design:fork-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Researches"
              total={conResearch["COUNT(Id)"]}
              color="warning"
              icon={"ant-design:file-text-outlined"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={conUser["COUNT(Id)"]}
              color="error"
              icon={"ant-design:team-outlined"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
