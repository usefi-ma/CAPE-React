import React from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const ConferenceDetail = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Conference Details
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Typography
                  variant="subtitle1"
                  style={{
                    marginBottom: 8,
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  Conferences
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>
        </Box>


{/* Banner */}

        <Box
          autoComplete="off"
          sx={{ marginTop: 3 }}
        >
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 20,
                  paddingBottom: 18,
                  display: "block",
                  fontWeight: "500",
                  borderBottom:"1px solid #616161"
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
                      name="Image"
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
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>


{/* //About Event  */}
          <Box
          autoComplete="off"
          sx={{ marginTop: 3 }}
        >
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 20,
                  paddingBottom: 18,
                  display: "block",
                  fontWeight: "500",
                  borderBottom:"1px solid #616161"
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
                    <label className="fileInput_button" for="inputTag">
                      Upload File
                    </label>
                    <input
                      id="inputTag"
                      type="file"
                      className="fileInput_custom"
                      name="Image"
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
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>



{/* //Additional Information*/}
<Box
          autoComplete="off"
          sx={{ marginTop: 3 }}
        >
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 20,
                  paddingBottom: 18,
                  display: "block",
                  fontWeight: "500",
                  borderBottom:"1px solid #616161"
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
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Grid item xs={12}  sx={{ marginTop: 4, float:"right" }}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>
      </Container>
    </>
  );
};

export default ConferenceDetail;
