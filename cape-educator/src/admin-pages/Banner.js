import React, { useState } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, startOfDay } from 'date-fns';
import axios from "axios";

const columns = [
  { id: 'banner', label: 'Banner Title', minWidth: 170 },
  { id: 'eventTitle', label: 'Event Title', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'link', label: 'Link URL', minWidth: 100 },
  {
    id: 'Description',
    label: 'Event Title Description',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'image', label: 'Banner Image', minWidth: 170 },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(banner, eventTitle, date, link, image, action) {
  const Description =  eventTitle;
  return { banner, eventTitle, date, link, Description, image, action };
}


export default function Banner() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const[formErrors, setFormErrors] = useState({});
  const[bannerData, setBannerData] = useState([]);

  const handleChange = (e) =>{
    const { name, value} = e.target;
    console.log(name, value);
  }


  const handleSubmit = async e =>{
    // e.preventDefault();

    const bannerTitle = e.target.BannerTitle.value;
    const eventTitle = e.target.EventTitle.value;
    const date = selectedDate.toISOString();
    const description = e.target.Description.value.trim();

    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN

    const errors = {};
    if(!bannerTitle){
      errors.name = 'Banner Title is required';
    }
    if(!eventTitle){
      errors.jobTitle = 'Event title is required';
    }
    if(!date){
      errors.organization = 'Date is required';
    }
    if(!description){
      errors.description = 'Description is required';
    }

    if(Object.keys(errors).length > 0){
      setFormErrors(errors);
    } else {
      // setExecutiveData([...executiveData, {name, jobTitle, organization, description}]);
      // console.log(executiveData);
      try{
        const response = await axios.post("http://localhost:3000/banner", {BannerTitle: bannerTitle, EventTitle: eventTitle, Date: date, Description: description});
        setBannerData([...bannerData, response.data]);
        setSelectedDate(date);
      } catch(error) {
        console.log(error);
        // console.log(setExecutiveData);
      }
      e.target.reset();
      setFormErrors({});
    }
  }

  return (
    <>

<Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          User
        </Typography>
        <Box onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
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
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
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
                    Link URL
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link URL"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
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
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
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
                    name="Description"
                    onChange={handleChange}
                  />
                </Grid>

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