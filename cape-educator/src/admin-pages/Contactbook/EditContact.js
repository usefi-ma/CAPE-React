import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const EditContact = ({ ContactItem, toggleModal }) => {
  const modal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    borderRadius:"8px",
    boxShadow: 24,
    p: 4,
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  const [formErrors, setFormErrors] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  const toggleIt = () => {
    setIsOpen(false);
    toggleModal();
  };

  const [contactData, setContactData] = useState([]);
  const [newFile, setNewFile] = useState(null);

  const handleFormSubmit = async (e) => {
    const fullName = e.target.FullName.value.trim();
    const titleRank = e.target.TitleRank.value.trim();
    const email = e.target.Email.value.trim();
    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN

    const errors = {};
    if (!fullName) {
      errors.fullName = "Name is required";
    }
    if (!titleRank) {
      errors.titleRank = "Job title is required";
    }
    if (!email) {
      errors.email = "Organization is required";
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

        const response = await axios.put(
          `http://localhost:3000/contactbook/${ContactItem.Id}`,
          {
            FullName: fullName,
            TitleRank: titleRank,
            Email: email
          },
          config
        );

        setContactData([...contactData, response.data]);
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
      e.target.files = null;
      setNewFile(null);


      setFormErrors({});
      toggleIt();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setNewFile(e.target.files[0]);
      console.log(
        "before editting the file will be",
        e.target.files[0],
        " , ",
        newFile
      );
    }
  };

  return (
    <>
      <Modal
        keepMounted
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <Box sx={modal} onSubmit={handleFormSubmit}>
          <Box component="form" noValidate autoComplete="off">
            <Card sx={{ padding: 3 }}>
                  <Grid sx={{ marginBottom: 3 }}
                    item
                    xs={12} 
                    container
                    alignItems="center"
                    className="w-100" >
                    
                    <Typography
                      variant="h4"
                      style={{
                        marginBottom: 8,
                        fontWeight:900,
                        display: "block",
                      }}
                    >
                      Edit {ContactItem.FullName} Information
                    </Typography>
                  </Grid>
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
                      Full Name
                    </Typography>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      name="FullName"
                      defaultValue={ContactItem.FullName}
                      onChange={handleChange}
                      error={formErrors.name}
                      helperText={formErrors.name}
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
                      Title/Rank
                    </Typography>
                    <TextField
                      fullWidth
                      label="Title/Rank"
                      variant="outlined"
                      name="TitleRank"
                      onChange={handleChange}
                      defaultValue={ContactItem.TitleRank}
                      error={formErrors.titleRank}
                      helperText={formErrors.titleRank}
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
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      name="Email"
                      onChange={handleChange}
                      defaultValue={ContactItem.Email}
                      error={formErrors.email}
                      helperText={formErrors.email}
                    />
                  </Grid>

                  <Grid item xs={12} container justifyContent="flex-end">
                    <ThemeProvider theme={theme}>
                      <Button
                        type="button"
                        size="large"
                        variant="outlined"
                        color="neutral"
                        onClick={() => toggleIt()}
                      >
                        Cancel
                      </Button>
                    </ThemeProvider>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      className="ms-2"
                    >
                      Save
                    </Button>
                  </Grid>
                   </Grid>
            </Card>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditContact;
