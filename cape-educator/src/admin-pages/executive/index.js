import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import axios from "axios";
import EditExecutive from "./EditExecutive";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Alert from "@mui/material/Alert";
import DeleteExecutive from "./DeleteExecutive";
import { DataGrid } from "@mui/x-data-grid";


const Executive = () => {
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
  const [executiveData, setExecutiveData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [selectedRow, setSelectedRow] = useState();
  const [insertSuccess, setInsertSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setfile] = useState(null);

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
   
    { field: "Image",
     headerName: "Image",
     width: 70,
     editable: true,
     renderCell: (params) =><img src={`http://localhost:3000/executive/${params.row.Image}`} className="executive_image" />, // renderCell will render the component
    },
    { field: "FullName", headerName: "Full Name",flex: 1 },
    { field: "JobTitle", headerName: "Job Title", flex: 1 },
    { field: "Organization", headerName: "Organization",flex: 1  },
    { field: "Description", headerName: "Description",flex: 1   },
    {
      field: "Actions",
      headerName: "Actions",
     width:100  ,
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

    const name = e.target.FullName.value.trim();
    const jobTitle = e.target.JobTitle.value.trim();
    const organization = e.target.Organization.value.trim();
    const description = e.target.Description.value.trim();

    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!jobTitle) {
      errors.jobTitle = "Job title is required";
    }
    if (!organization) {
      errors.organization = "Organization is required";
    }
    if (!description) {
      errors.description = "Description is required";
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
          "http://localhost:3000/executive",
          {
            FullName: name,
            JobTitle: jobTitle,
            Organization: organization,
            Description: description,
            Image: file,
          },
          config
        );
        setExecutiveData([...executiveData, response.data]);
        setInsertSuccess(true);
      } catch (error) {
        console.log(error);
      }
      e.target.reset();
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
        const res = await axios.get("http://localhost:3000/executive");
        setExecutiveData(res.data);
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
          Executive
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
                    Job Title
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Job Title"
                    variant="outlined"
                    name="JobTitle"
                    onChange={handleChange}
                    error={formErrors.jobTitle}
                    helperText={formErrors.jobTitle}
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
                    Organization
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Organization"
                    variant="outlined"
                    name="Organization"
                    onChange={handleChange}
                    error={formErrors.organization}
                    helperText={formErrors.organization}
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
                    Image
                  </Typography>
                  <div className="fileInput_wrapp">
                    <label className="fileInput_button" for="inputTag">
                      {" "}
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
                    error={formErrors.description}
                    helperText={formErrors.description}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  {insertSuccess ? (
                    <Alert severity="success">
                      This is a success alert — check it out!
                    </Alert>
                  ) : (
                    <span></span>
                  )}
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
                  Executive List
                </Typography>
              </Grid>
              <DataGrid
                rows={executiveData}
                columns={columns}
                getRowId={(row) => row.Id}
                initialState={{
                  ...executiveData.initialState,
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                getRowHeight={() => '180px'}
              />
              <DeleteExecutive
                SelectedItem={selectedRow}
                handleOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
              ></DeleteExecutive>
              {openModal && (
                <EditExecutive
                  ExecutiveItem={selectedRow}
                  toggleModal={handleOpenModal}
                ></EditExecutive>
              )}
              clickedRow: {selectedRow ? `${selectedRow.FullName}` : null}
              {/* <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {executiveData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((item) => {
                          return (
                            <TableRow>
                              <TableCell>{item.FullName}</TableCell>
                              <TableCell>{item.Image}</TableCell>
                              <TableCell>{item.JobTitle}</TableCell>
                              <TableCell>{item.Organization}</TableCell>
                              <TableCell>{item.Description}</TableCell>
                              <TableCell>
                                <button onClick={() => handleEdit(item)}>
                                  Edit
                                </button>
                                {openModal && (
                                  <EditExecutive
                                    ExecutiveItem={selectedRow}
                                    toggleModal={handleOpenModal}
                                  ></EditExecutive>
                                )}
                                <button onClick={() => handleClickOpen(item)}>
                                  Delete
                                </button>
                                <DeleteExecutive
                                  SelectedItem={selectedRow}
                                  handleOpen={handleClickOpen}
                                  open={open}
                                  handleClose={handleClose}
                                ></DeleteExecutive>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper> */}
            </CardContent>
          </Card>
        </Box>

      </Container>
    </>
  );
};

export default Executive;
