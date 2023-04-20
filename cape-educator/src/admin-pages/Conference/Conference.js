import React, {useEffect, useState} from "react";
import axios from "axios";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Change to default conference image
import imgEmpty from "../../assets/images/EmptyUser.jpg";


const Conference = () => {

  const [conferenceData, setConferenceData] = useState([]);
  const [insertSuccess, setInsertSuccess] = useState(false);
  const [file, setFile] = useState(null);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const conferenceTitle = e.target.ConferenceTitle.value.trim();
    const description = e.target.Description.value.trim();
    const date = e.target.Date.value.trim();


    const errors = {};

    if(!conferenceTitle) {
      errors.conferenceTitle = "Tite is required."
    }
    if(!description) {
      errors.description = "Tite is required."
    }
    if(!date) {
      errors.date = "Tite is required."
    }

    if (Object.keys(errors).length > 0){
      // Create set form errors
      console.log("Errors");
    } else {
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        if (!file) {
          setFile({ imgEmpty });
        }
        const response = await axios.post(
          "http://localhost:3000/conference",
          {
            ConferenceTitle: conferenceTitle,
            Description: description,
            Date: date,
            Image: file,
          },
          config
        );
        setConferenceData([...conferenceData, response.data]);
        setInsertSuccess(true);
        toast.success("Conference added successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
      e.target.files = null;
      setFile(null);
    }
    
  }


  // Make list like executive page??

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Conference
        </Typography>
        <Box onSubmit={handleFormSubmit} component="form" noValidate autoComplete="off">
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
                    Conference Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name="ConferenceTitle"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Description
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined"
                    name="Description"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <Typography
                    variant="subtitle1" 
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Start Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="w-100" />
                  </LocalizationProvider>
                </Grid> */}
                {/* <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                     End Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="w-100" />
                  </LocalizationProvider>
                </Grid> */}
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Dates
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Date(s)"
                    variant="outlined"
                    name="Date"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Location
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Location"
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Thumbnail Image
                  </Typography>
                  <div className="fileInput_wrapp">
                    <label className="fileInput_button" for="inputTag">
                      Upload File
                    </label>
                    <input
                      id="inputTag"
                      type="file"
                      className="fileInput_custom"
                      name="Image"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button> */}
                </Grid>
                {/* <Grid item xs={6}>
                  <Typography
                    variant="Conference Image"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Conference Image
                  </Typography>
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Grid> */}
                {/* <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Additional information
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Information"
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}




                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Conference;
