import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConferenceSelector from './ConferenceSelector';
import imgEmpty from "../../assets/images/EmptyConference.png";



const ConferenceDetail = ()=> {
  const [conferenceData, setConferenceData] = useState([]);
  const [BannerImageFile, setBannerImageFile] = useState(null);
  const [AboutImageFile, setAboutImageFile] = useState(null);
  

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
    if (e.target.files) {
        const file = e.target.files[0];
        const Fname = e.target.name;
        if (Fname === 'BannerImage') {
          setBannerImageFile(file);
        } else if (Fname === 'AboutImage') {
          setAboutImageFile(file);
        }
    }
  };
  
  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const bannerTitle = e.target.BannerTitle.value.trim();
    const eventVenue = e.target.EventVenue.value.trim();
    const eventTitleDescription = e.target.EventTitleDescription.value.trim();
    const aboutEventTitle = e.target.AboutEventTitle.value.trim();
    const aboutEventDescription = e.target.AboutEventDescription.value.trim();
    const additionalInfo = e.target.AdditionalInfo.value.trim();
   
   try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }; 
    if (!BannerImageFile) {
      setBannerImageFile({ imgEmpty });
    }
    if (!AboutImageFile) {
      setAboutImageFile({ imgEmpty });
    }
      const response = await axios.put(`http://localhost:3000/conferencedetail/${conferenceSelected}`,
        {
          //database feils : input names
          BannerTitle: bannerTitle,
          EventVenue: eventVenue,
          BannerDescription: eventTitleDescription,
          AboutTitle: aboutEventTitle,
          AboutDescription: aboutEventDescription,
          AdditionalInfo: additionalInfo,   
          BannerImage: BannerImageFile,
          AboutImage: AboutImageFile,
        },
        config
     );
     setConferenceData([...conferenceData, response.data]);
  
    
     toast.success("Conference Details inserted successfully!!!", {
      position: toast.POSITION.TOP_CENTER,
    });

   } catch (error) {
     console.log(error);
   }
   e.target.reset();
   e.target.BannerImage = null;
   setBannerImageFile(null);
   e.target.BannerImage.value = null;
   e.target.AboutImage = null;
   setAboutImageFile(null);
   e.target.AboutImage.value = null;
}

//which conference is selected
const [conferenceSelected, setConferenceSelected] = useState(null);
const handleConferenceId = (data) => {
  setConferenceSelected(data);
};


  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Conference Details
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleFormSubmit}>

          {/* //conference selected */}
          <ConferenceSelector conferenceData={conferenceData} ConferenceId={handleConferenceId}/>
          <p>Data from child: {conferenceSelected}</p> 
         

          {/* Banner */}
          <Box autoComplete="off" sx={{ marginTop: 3 }}>
            <Card sx={{ padding: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: 20,
                    paddingBottom: 18,
                    display: "block",
                    fontWeight: "500",
                    borderBottom: "1px solid #616161",
                  }}
                >
                  Banner:
                </Typography>
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
                      Event Title
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Title"
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
                      Event Venue
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Venue"
                      variant="outlined"
                      name="EventVenue"
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
                        name="BannerImage"
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
                      label="Description "
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                      name="EventTitleDescription"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          {/* //About Event  */}
          <Box autoComplete="off" sx={{ marginTop: 3 }}>
            <Card sx={{ padding: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: 20,
                    paddingBottom: 18,
                    display: "block",
                    fontWeight: "500",
                    borderBottom: "1px solid #616161",
                  }}
                >
                  About:
                </Typography>
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
                      About Event Title
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      name="AboutEventTitle"
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
                      About Event Image
                    </Typography>
                    <div className="fileInput_wrapp">
                      <label className="fileInput_button" for="inputTag1">
                        Upload File
                      </label>
                      <input
                        id="inputTag1"
                        type="file"
                        className="fileInput_custom"
                        name="AboutImage"
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
                      About Event Description
                    </Typography>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description "
                      multiline
                      rows={8}
                      variant="outlined"
                      fullWidth
                      name="AboutEventDescription"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          {/* //Additional Information*/}
          <Box autoComplete="off" sx={{ marginTop: 3 }}>
            <Card sx={{ padding: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: 20,
                    paddingBottom: 18,
                    display: "block",
                    fontWeight: "500",
                    borderBottom: "1px solid #616161",
                  }}
                >
                  Additional Information:
                </Typography>
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
                      Additional Information
                    </Typography>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description "
                      multiline
                      rows={8}
                      variant="outlined"
                      fullWidth
                      name="AdditionalInfo"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          <Grid item xs={12} sx={{ marginTop: 4, float: "right" }}>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          <ToastContainer /> 
        
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ConferenceDetail;
