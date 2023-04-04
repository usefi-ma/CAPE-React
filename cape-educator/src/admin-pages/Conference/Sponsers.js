import React from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const Sponsers = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Sponsers
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
      <Box component="form" noValidate autoComplete="off" sx={{ marginTop: 3 }}>
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
                 Sponser Name
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Sponser Name"
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
                    Sponser Logo
                  </Typography>
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
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

export default Sponsers;
