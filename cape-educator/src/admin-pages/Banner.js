import React, { useState } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format, startOfDay } from "date-fns";
import axios from "axios";
import imgEmpty from "../assets/images/EmptyUser.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Banner() {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const [formErrors, setFormErrors] = useState({});
  const [bannerData, setBannerData] = useState([]);
  const [file, setfile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setfile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bannerTitle = e.target.BannerTitle.value;
    const eventTitle = e.target.EventTitle.value;
    // const date = selectedDate.toISOString();
    const date = e.target.Date.value;
    const link = e.target.BannerLink.value;
    const description = e.target.Description.value.trim();

    const errors = {};
    if (!bannerTitle) {
      errors.bannerTitle = "Banner Title is required";
    }
    if (!eventTitle) {
      errors.eventTitle = "Event title is required";
    }
    if (!date) {
      errors.date = "Date is required";
    }
    if (!link) {
      errors.link = "Link is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        if (!file) {
          setfile({ imgEmpty });
        }
        const response = await axios.post(
          "http://localhost:3000/banner",
          {
            BannerTitle: bannerTitle,
            EventTitle: eventTitle,
            Date: date,
            BannerLink: link,
            Description: description,
            Image: file,
          },
          config
        );

        setBannerData([...bannerData, response.data]);

        // setSelectedDate(date);
        toast.success("New banner information inserted successfully!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
      e.target.files = null;
      setfile(null);
      setFormErrors({});
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Banner
        </Typography>
        <Box onSubmit={handleSubmit} component="form" autoComplete="off">
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Banner Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Banner Title"
                    variant="outlined"
                    name="BannerTitle"
                    onChange={handleChange}
                    error={formErrors.bannerTitle}
                    helperText={formErrors.bannerTitle}
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
                    Event Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Event Title"
                    variant="outlined"
                    name="EventTitle"
                    error={formErrors.eventTitle}
                    helperText={formErrors.eventTitle}
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
                    Conference Date
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Event Title"
                    variant="outlined"
                    name="Date"
                    error={formErrors.date}
                    helperText={formErrors.date}
                    onChange={handleChange}
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
                    Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                      className="w-100"
                      name="Date" 
                      selected = {selectedDate}
                      onChange={(date)=>{
                        setSelectedDate(date)
                        console.log(new Date(date).toLocaleDateString()); 
                      }}
                    />
                  </LocalizationProvider>
                </Grid> */}
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Link URL
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link URL"
                    name="BannerLink"
                    variant="outlined"
                    onChange={handleChange}
                    error={formErrors.link}
                    helperText={formErrors.link}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                                        Banner Image
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
                    Event Title Description
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    error={formErrors.description}
                    helperText={formErrors.description}
                    name="Description"
                    onChange={handleChange}
                  />
                </Grid>
                <ToastContainer />
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
}
