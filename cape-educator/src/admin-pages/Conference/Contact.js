import React from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Contact
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
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ marginTop: 3 }}
        >
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
                    Contact Desc
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Contact Desc"
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
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address"
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
                    Map Location
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Map Location"
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
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
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
                    Phone
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone"
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
                    Conference will start
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Conference will start"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" size="large">
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

export default Contact;
