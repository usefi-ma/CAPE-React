import React ,{useState}from 'react'
import Modal from "@mui/material/Modal";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import axios from "axios";
import imgEmpty from './EmptyUser.jpg'

const EditExecutive = ({ExecutiveItem,toggleModal}) => {
    const modal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const[formErrors, setFormErrors] = useState({});
      const [isOpen, setIsOpen] = useState(true);
     


    const toggleIt = () => {
        setIsOpen(false);
        toggleModal();
    }

    const [executiveData, setExecutiveData] = useState([]);
    const [newFile, setNewFile] = useState(null);

    const handleFormSubmit = async (e) => {
    
try{
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
            if(!newFile){
              setNewFile({imgEmpty})
            }
            const response = await axios.put(`http://localhost:3000/executive/${ExecutiveItem.Id}`, {
              FullName: name,
              JobTitle: jobTitle,
              Organization: organization,
              Description: description,
              Image: newFile,
            },config);
            
            setExecutiveData([...executiveData, response.data]);
           
          } catch (error) {
            console.log(error);
          }
          e.target.reset();
          e.target.files=null;
          setNewFile(null);
          e.target.Image.value=null;
          console.log("After editting the file will be",e.target.files)
          setFormErrors({});
          toggleIt()
        
        }
      }catch(err){
        console.log("Error from try catch", err)
          alert("Error from try catch", err)
        }
      };
 //TESTING
 const handleChange = (e) =>{
    const { name, value} = e.target;
    console.log(name, value);
    if (e.target.files) {
      setNewFile(e.target.files[0]);
      console.log("before editting the file will be" , e.target.files[0], " , ",newFile)
    }
  }


  return (
    <>
     <Modal
          keepMounted
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          open={isOpen}
        > 
     <Box sx={modal} onSubmit={handleFormSubmit}>
        <Box component="form" noValidate autoComplete="off">
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
                    defaultValue={ExecutiveItem.FullName}
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
                    defaultValue={ExecutiveItem.JobTitle}
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
                    name="Organization"
                    onChange={handleChange}
                    defaultValue={ExecutiveItem.Organization}
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
                  <img className='executive_image me-2' src={`http://localhost:3000/executive/${ExecutiveItem.Image}`} />
                  <div className="fileInput_wrapp">
                    <label className="fileInput_button" for="inputTag1">
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
                    defaultValue={ExecutiveItem.Description}
                    error={formErrors.description}
                    helperText={formErrors.description}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Save
                  </Button>
                  <Button type="button" variant="contained" size="large" onClick={()=>toggleIt()}>
                    cancle
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        </Box>
        </Modal> 
      </>
  )
}

export default EditExecutive