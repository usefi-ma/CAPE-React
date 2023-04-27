import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ConferenceSelector from "./ConferenceSelector";
import axios from "axios";
import imgEmpty from "../../assets/images/EmptyUser.jpg";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteSponsor from "./DeleteSponsor.js";
import EditSponsor from "./EditSponsor.js";



const Sponsor = () => {
  const [sponsorData, setSponsorData] = useState([]);
  const [file, setfile] = useState(null);
  const [selectedRow, setSelectedRow] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  //which conference is selected
  const [conferenceSelected, setConferenceSelected] = useState(null);
  const [conferenceData, setConferenceData] = useState([]);
  const handleConferenceId = (data) => {
    setConferenceSelected(data);
  };
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
            src={`http://localhost:3000/sponsor/${params.row.Image}`}
            className="executive_image"
          />
        </div>
      ), // renderCell will render the component
    },
    { field: "Name", headerName: "Sponsor Name", flex: 1 },
    { field: "Link", headerName: "Website Link", flex: 1 },
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
        const res = await axios.get("http://localhost:3000/conference");
        setConferenceData(res.data);
        console.log(res.data);

        const res2 = await axios.get("http://localhost:3000/sponsor");
        setSponsorData(res2.data);
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
    const name = e.target.Name.value.trim();
    const link = e.target.Link.value.trim();
    const conferenceSelectedId = conferenceSelected;
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
        `http://localhost:3000/sponsor`,
        {
          //database feils : input names
          Name: name,
          Link: link,
          Image: file,
          ConferenceId: conferenceSelectedId,
        },
        config
      );

      setSponsorData([...sponsorData, response.data]);
      toast.success("Sponsor inserted successfully!!!", {
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
        Sponsors
        </Typography>
      
      <Box component="form" noValidate autoComplete="off">
        <Card sx={{ padding: 3 }}>
          <CardContent>
       {/* //conference selected */}
       <ConferenceSelector
          conferenceData={conferenceData}
          ConferenceId={handleConferenceId}
        />
       <p>Data from child: {conferenceSelected}</p> 
          </CardContent>
        </Card>
      </Box>
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
                 Sponsor Name
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Sponsor Name"
                    variant="outlined"
                    name="Name"
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
                  Link URL

                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Link URL"
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
                    Sponsor Logo
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
                      onChange={handleChange}
                    />
                  </div>
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
                  Sponsors List
                </Typography>
              </Grid>
              <DataGrid
                rows={sponsorData}
                columns={columns}
                getRowId={(row) => row.Id}
                initialState={{
                  ...sponsorData.initialState,
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                rowHeight={75}
              />
              <DeleteSponsor
                SelectedItem={selectedRow}
                handleOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
              ></DeleteSponsor>
            {openModal && (
                <EditSponsor
                  SpeakerItem={selectedRow}
                  toggleModal={handleOpenModal}
                ></EditSponsor>
              )}  
              clickedRow: {selectedRow ? `${selectedRow}` : null}
            </CardContent>
          </Card>
        </Box>



      </Container>
    </>
  );
};

export default Sponsor;
