import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import imgEmpty from "../../assets/images/EmptyConference.png";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteResearch from "./DeleteResearch";
import ModifyResearch from "./ModifyResearch";


const Research = () => {
  const [researchData, setResearchData] = useState([]);
  const [file, setfile] = useState(null);
  const [selectedRow, setSelectedRow] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);

  //Modals
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleEdit = (e, row) => {
    e.stopPropagation();
    setSelectedRow(row);
    setOpenModal(!openModal);
  };

  const handleClickOpen = (e, row) => {
    e.stopPropagation();
    setSelectedRow(row);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //table
  const columns = [
    {
      field: "Image",
      headerName: "Image",
      width: 80,
      editable: true,
      renderCell: (params) => (
        <div className="executive_img_wrapper">
          <img
            src={`http://localhost:3000/research/${params.row.Image}`}
            className="executive_image"
          />
        </div>
      ), // renderCell will render the component
    },
    { field: "Title", headerName: "Research Title", flex: 1 },
    { field: "Link", headerName: "Research Link", flex: 1 },
    { field: "Description", headerName: "Description", flex: 1 },
    {
      field: "Actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              variant="text"
              color="warning"
               onClick={(e) => handleEdit(e, params.row)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className="me-1"
              variant="text"
              size="small"
              color="error"
              onClick={(e) => handleClickOpen(e, params.row)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
//loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/research");
        setResearchData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setfile(e.target.files[0]);
    }
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.Title.value.trim();
    const description = e.target.Description.value.trim();
    const link = e.target.Link.value.trim();
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
        `http://localhost:3000/research`,
        {
          //database feils : input names
          Title: title,
          Description: description,
          Image: file,
          Link: link,
        },
        config
      );

      setResearchData([...researchData, response.data]);
      toast.success("Research inserted successfully!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    e.target.files = null;
    setfile(null);
  };



  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
            Researches
        </Typography>
      <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
          sx={{ marginTop: 3 }}
        >
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
                    label="Title"
                    variant="outlined"
                    name="Title"
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
                     Research Link 
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link"
                    variant="outlined"
                    name="Link"
                    onChange={handleChange}
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
                    Research Image
                  </Typography>

                  <div className="fileInput_wrapp">
                    <label className="fileInput_button" htmlFor="inputTag">
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
                    Description
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
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
                  <ToastContainer />

                </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

 {/* //table */}
 <Box sx={{ marginTop: 3 }}>
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Typography variant="h6" sx={{ marginBottom: 3 }}>
                  Research List
                </Typography>
              </Grid>
              <DataGrid
                rows={researchData}
                columns={columns}
                getRowId={(row) => row.Id}
                initialState={{
                  ...researchData.initialState,
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                rowHeight={75}
              />
               <DeleteResearch
                SelectedItem={selectedRow}
                handleOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
              ></DeleteResearch>
               {openModal && (
                <ModifyResearch
                  ResearchItem={selectedRow}
                  toggleModal={handleOpenModal}
                ></ModifyResearch>
              )}  
              {/* clickedRow: {selectedRow ? `${selectedRow}` : null} */}
            </CardContent>
          </Card>
        </Box>



      </Container>
    </>
  );
};

export default Research;
