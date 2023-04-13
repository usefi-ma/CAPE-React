import React,{useState} from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import "../assets/css/dashboard.css";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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


const Research = () => {

  return (
    <>
    <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Research
        </Typography>
   
        <Box component="form" noValidate autoComplete="off">
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
                    Research Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Research Title"
                    variant="outlined"
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
                   Link URL
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link URL"
                    variant="outlined"
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
                    rows={8}
                    variant="outlined"
                    fullWidth
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
                    Logo
                  </Typography>
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Grid>
                

                <Grid item xs={12}>
                  <Button variant="contained" size="large" style={{
                     marginTop: 8
                    }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>

            

            </CardContent>
          </Card>
        </Box>
        </Container>
    
    
    </>
  )
}

export default Research