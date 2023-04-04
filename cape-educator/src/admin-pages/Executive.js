import React, { useState } from "react";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Full Name', minWidth: 170 },
  { id: 'jobTitle', label: 'Job Title', minWidth: 100 },
  {
    id: 'organization',
    label: 'Organization',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'description',
    label: 'description',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, jobTitle, organization,action) {
  const description =  organization;
  return { name, jobTitle, organization, description,action };
}

const rows = [
  // createData('India', 'IN', 1324171354, 3287263,1),
  // createData('China', 'CN', 1403500365, 9596961,1),
  // createData('Italy', 'IT', 60483973, 301340,1),
  // createData('United States', 'US', 327167434, 9833520,1),
  // createData('Canada', 'CA', 37602103, 9984670,1),
  // createData('Australia', 'AU', 25475400, 7692024,1),
  // createData('Germany', 'DE', 83019200, 357578,1),
  // createData('Ireland', 'IE', 4857000, 70273,1),
  // createData('Mexico', 'MX', 126577691, 1972550,1),
  // createData('Japan', 'JP', 126317000, 377973,1),
  // createData('France', 'FR', 67022000, 640679,1),
  // createData('United Kingdom', 'GB', 67545757, 242495,1),
  // createData('Russia', 'RU', 146793744, 17098246,1),
  // createData('Nigeria', 'NG', 200962417, 923768,1),
  // createData('Brazil', 'BR', 210147125, 8515767,1),
];
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
  const[formErrors, setFormErrors] = useState({});

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    const name = e.target.fullName.value.trim();
    const jobTitle = e.target.jobTitle.value.trim();
    const organization = e.target.organization.value.trim();
    const description = e.target.description.value.trim();

    const errors = {};
    if(!name){
      errors.name = 'Name is required';
    }
    if(!jobTitle){
      errors.jobTitle = 'Job title is required';
    }
    if(!organization){
      errors.organization = 'Organization is required';
    }
    if(!description){
      errors.description = 'Description is required';
    }

    if(Object.keys(errors).length > 0){
      setFormErrors(errors);
    } else {
      setExecutiveData([...executiveData, {name, jobTitle, organization, description}]);
      console.log(executiveData);
      e.target.reset();
      setFormErrors({});
    }
  }

  //TESTING
  const handleChange = (e) =>{
    const { name, value} = e.target;
    console.log(name, value);
  }



  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Executive
        </Typography>
        <Box onSubmit={handleFormSubmit} component="form" noValidate autoComplete="off">
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
                    name="fullName"
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
                    name="jobTitle"
                    onChange={handleChange}
                    error={formErrors.jobTitle}
                    helperText={formErrors.jobTitle}
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
                    Organization
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Organization"
                    variant="outlined"
                    name="organization"
                    onChange={handleChange}
                    error={formErrors.organization}
                    helperText={formErrors.organization}
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
                  <Button variant="contained" component="label" size="large">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
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
                    name="description"
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
              <Paper sx={{ width: '100%' }}>
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.jobTitle}>
                    {columns.map((column) => {
                      const value = data[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
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
    </Paper>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Executive;
