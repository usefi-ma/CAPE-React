import React, { useState } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const ConferenceSelector = ({ conferenceData , ConferenceId  }) => {
   
  const handleConferenceSelection = (event, value) => {
    ConferenceId(value.Id);
  };

  return (
    <>

<Box noValidate autoComplete="off">
            <Card sx={{ padding: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} md={8}>
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
                    <Autocomplete
      options={conferenceData}
      getOptionLabel={(option) => option.ConferenceTitle}
      onChange={handleConferenceSelection}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select conference"
          variant="outlined"
        />
      )}
    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box> 











   
   
    </>
  );
};


export default ConferenceSelector