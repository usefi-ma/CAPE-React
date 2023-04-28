import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConferenceSelector from "./ConferenceSelector";

const Contact = () => {
  const [conferenceData, setConferenceData] = useState([]);

  useEffect(() => {
    const fetchAllExecutive = async () => {
      try {
        const res = await axios.get("http://localhost:3000/conference");
        setConferenceData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllExecutive();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  //which conference is selected
  const [conferenceSelected, setConferenceSelected] = useState(null);
  const handleConferenceId = (data) => {
    setConferenceSelected(data);
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const contactDescription = e.target.ContactDescription.value.trim();
    const contactAddress = e.target.ContactAddress.value.trim();
    const contactEmail = e.target.ContactEmail.value.trim();
    const contactPhone = e.target.ContactPhone.value.trim();
    const contactEventDate = e.target.ContactEventDate.value.trim();
    const mapLocation = e.target.MapLocation.value.trim();

    try {
      const response = await axios.put(
        `http://localhost:3000/conferenceContact/${conferenceSelected}`,
        {
          //database feils : input names
          ContactDescription: contactDescription,
          ContactAddress: contactAddress,
          ContactEmail: contactEmail,
          ContactPhone: contactPhone,
          ContactEventDate: contactEventDate,
          MapLocation: mapLocation,
        }
      );
      setConferenceData([...conferenceData, response.data]);

      toast.success("Conference contact inserted successfully!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Contact
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          {/* //conference selected */}
          <ConferenceSelector
            conferenceData={conferenceData}
            ConferenceId={handleConferenceId}
          />
          {/* <p>Data from child: {conferenceSelected}</p> */}

          <Box noValidate autoComplete="off" sx={{ marginTop: 3 }}>
            <Card sx={{ padding: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Contact Title Description
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Contact Desc"
                      variant="outlined"
                      name="ContactDescription"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Event Address
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      name="ContactAddress"
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Event Email
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="ContactEmail"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Event Phone
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      name="ContactPhone"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Event will start
                    </Typography>
                    <TextField
                      label="Event will start"
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                      name="ContactEventDate"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        marginBottom: 8,
                        display: "block",
                        fontWeight: "500",
                      }}
                    >
                      Map Location
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Map Location"
                      variant="outlined"
                      name="MapLocation"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large">
                      Submit
                    </Button>
                    <ToastContainer />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
