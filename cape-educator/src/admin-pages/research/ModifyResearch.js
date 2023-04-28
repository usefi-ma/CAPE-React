import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import axios from "axios";
import imgEmpty from "../../assets/images/EmptyUser.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ModifyResearch = ({ ResearchItem, toggleModal }) => {
  const modal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    borderRadius: "8px",
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleIt = () => {
    setIsOpen(false);
    toggleModal();
  };

  const [ResearchData, setResearchData] = useState([]);
  const [newFile, setNewFile] = useState(null);

  const handleFormSubmit = async (e) => {
    const title = e.target.Title.value.trim();
    const link = e.target.Link.value.trim();
    const description = e.target.Description.value.trim();
    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN

    try {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      if (!newFile) {
        setNewFile({ imgEmpty });
      }
      const response = await axios.put(
        `http://localhost:3000/research/${ResearchItem.Id}`,
        {
          Title: title,
          Link:link,
          Image: newFile,
          Description: description,
        },
        config
      );

      setResearchData([...ResearchData, response.data]);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    e.target.files = null;
    setNewFile(null);
    e.target.Image.value = null;

    toggleIt();
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
              <Grid
                sx={{ marginBottom: 3 }}
                item
                xs={12}
                container
                alignItems="center"
                className="w-100"
              >
                <div className="executive_img_edit_wrapper me-3">
                  <img
                    className="grid_image"
                    src={`http://localhost:3000/research/${ResearchItem.Image}`}
                  />
                </div>
                <Typography
                  variant="h4"
                  style={{
                    marginBottom: 8,
                    fontWeight: 900,
                    display: "block",
                  }}
                >
                  Edit {ResearchItem.Title} Information
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
                    Research Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name="Title"
                    defaultValue={ResearchItem.Title}
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
                    Research Link
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link"
                    variant="outlined"
                    name="Link"
                    onChange={handleChange}
                    defaultValue={ResearchItem.Link}
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
                    fullWidth
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name="Description"
                    onChange={handleChange}
                    defaultValue={ResearchItem.Description}
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
                    Image
                  </Typography>
                  <div className="fileInput_wrapp">
                    <label className="fileInput_button" htmlFor="inputTag1">
                      {" "}
                      Upload File
                    </label>
                    <input
                      id="inputTag1"
                      type="file"
                      className="fileInput_custom"
                      name="Image"
                      onChange={handleChange}
                    />
                  </div>
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

export default ModifyResearch;
