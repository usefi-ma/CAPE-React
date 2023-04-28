// import React from 'react'

// const Contactbook = () => {
//   return (
//     <div>Contact List</div>
//   )
// }

// export default Contactbook

import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import axios from "axios";
import EditContact from "./EditContact";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import imgEmpty from "../../assets/images/EmptyUser.jpg";
import DeleteContact from "./DeleteContact";
import { DataGrid } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactbook = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Form Data handle
  const [contactData, setContactData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [selectedRow, setSelectedRow] = useState();
  const [insertSuccess, setInsertSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setfile] = useState(null);

  console.log("contactData" + contactData);
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
    { field: "FullName", headerName: "Full Name", flex: 1 },
    { field: "TitleRank", headerName: "Title/Rank", flex: 1 },
    { field: "Email", headerName: "Email", flex: 1 },
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
  //saving an item
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.FullName.value.trim();
    const titleRank = e.target.TitleRank.value.trim();
    const email = e.target.Email.value.trim();

    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN
    const errors = {};
    if (!fullName) {
      errors.fullName = "Name is required";
    }
    if (!titleRank) {
      errors.jobTitle = "Title or rank is required";
    }
    if (!email) {
      errors.email = "Email is required";
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
        const response = await axios.post(
          "http://localhost:3000/contactbook",
          {
            FullName: fullName,
            TitleRank: titleRank,
            Email: email,
          },
          config
        );
        setContactData([...contactData, response.data]);
        setInsertSuccess(true);
        toast.success("New member inserted successfully!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
      e.target.files = null;
      setfile(null);
      setFormErrors({});
    }
  };

  //TESTING
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (e.target.files) {
      setfile(e.target.files[0]);
    }
  };

  //FETCH CALL FROM SERVER
  useEffect(() => {
    const fetchAllExecutive = async () => {
      try {
        const res = await axios.get("http://localhost:3000/contactbook");
        setContactData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllExecutive();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Contactbook
        </Typography>
        
        <Box onSubmit={handleFormSubmit} component="form" noValidate>
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
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    name="FullName"
                    onChange={handleChange}
                    error={formErrors.fullName}
                    helperText={formErrors.fullName}
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
                    id="outlined-basic"
                    label="Title or Rank"
                    variant="outlined"
                    name="TitleRank"
                    onChange={handleChange}
                    error={formErrors.titleRank}
                    helperText={formErrors.titleRank}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    name="Email"
                    onChange={handleChange}
                    error={formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>

                {insertSuccess ? <ToastContainer /> : <span></span>}
              </Grid>
            </CardContent>
          </Card>
        </Box>
          
        <Box sx={{ marginTop: 5 }}>
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Typography variant="h6" sx={{ marginBottom: 3 }}>
                  Contacts
                </Typography>
              </Grid>
              <DataGrid
                rows={contactData}
                columns={columns}
                getRowId={(row) => row.Id}
                initialState={{
                  ...contactData.initialState,
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                rowHeight={75}
               
              />
              <DeleteContact
                SelectedItem={selectedRow}
                handleOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
              ></DeleteContact>
              {openModal && (
                <EditContact
                  ExecutiveItem={selectedRow}
                  toggleModal={handleOpenModal}
                ></EditContact>
              )}
              {/* clickedRow: {selectedRow ? `${selectedRow.FullName}` : null} */}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Contactbook;
