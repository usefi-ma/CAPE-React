import React, {useEffect, useState} from "react";
import axios from "axios";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteConference from "./DeleteConference";
import EditConference from "./EditConference";


// Change to default conference image
import imgEmpty from "../../assets/images/EmptyUser.jpg";



const Conference = () => {
  // For list of conferences in dashboard
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Form data fields
  const [conferenceData, setConferenceData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [selectedRow, setSelectedRow] = useState();
  const [insertSuccess, setInsertSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(null);

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

  const columns = [
    {
      field: "Image",
      headerName: "Image",
      width: 80,
      editable: true,
      renderCell: (params) => (
        <div className="conference_img_wrapper">
        <img
          src={`http://localhost:3000/conference/${params.row.Image}`}
          className="conference_image"
        />
        </div>
      ), // renderCell will render the component
    },
    //title, desc, date
    { field: "Title", headerName: "Title", flex: 1 },
    { field: "Date", headerName: "Date", flex: 1 },
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




  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const conferenceTitle = e.target.ConferenceTitle.value.trim();
    const description = e.target.Description.value.trim();
    const date = e.target.Date.value.trim();


    const errors = {};

    if(!conferenceTitle) {
      errors.conferenceTitle = "Title is required."
    }
    if(!description) {
      errors.description = "Description is required."
    }
    if(!date) {
      errors.date = "Date is required."
    }

    if (Object.keys(errors).length > 0){
      // Create set form errors
      console.log("Errors");
    } else {
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        if (!file) {
          setFile({ imgEmpty });
        }
        const response = await axios.post(
          "http://localhost:3000/conference",
          {
            ConferenceTitle: conferenceTitle,
            Description: description,
            Date: date,
            Image: file,
          },
          config
        );
        setConferenceData([...conferenceData, response.data]);
        setInsertSuccess(true);
        toast.success("Conference added successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
      e.target.files = null;
      setFile(null);
    }
    
  }
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

  // Make list like executive page??

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Conference
        </Typography>
        <Box onSubmit={handleFormSubmit} component="form" noValidate autoComplete="off">
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
                    Conference Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name="ConferenceTitle"
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
                    Description
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined"
                    name="Description"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <Typography
                    variant="subtitle1" 
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Start Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="w-100" />
                  </LocalizationProvider>
                </Grid> */}
                {/* <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                     End Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="w-100" />
                  </LocalizationProvider>
                </Grid> */}
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Dates
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Date(s)"
                    variant="outlined"
                    name="Date"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Location
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Location"
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Thumbnail Image
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
                  {/* <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button> */}
                </Grid>
                {/* <Grid item xs={6}>
                  <Typography
                    variant="Conference Image"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Conference Image
                  </Typography>
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Grid> */}
                {/* <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "500",
                    }}
                  >
                    Additional information
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Information"
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}




                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ marginTop: 5 }}>
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Typography variant="h6" sx={{ marginBottom: 3 }}>
                  Conference List
                </Typography>
              </Grid>
              <DataGrid
                rows={conferenceData}
                columns={columns}
                getRowId={(row) => row.Id}
                initialState={{
                  ...conferenceData.initialState,
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                rowHeight={75}
               
              />
              <DeleteConference
                SelectedItem={selectedRow}
                handleOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
              ></DeleteConference>
              {openModal && (
                <EditConference
                  ExecutiveItem={selectedRow}
                  toggleModal={handleOpenModal}
                ></EditConference>
              )}
              {/* clickedRow: {selectedRow ? `${selectedRow.FullName}` : null} */}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Conference;
