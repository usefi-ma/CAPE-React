import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { Button } from "@mui/material";


const DeleteExecutive = ({SelectedItem,handleClickOpen,handleClose,open}) => {

    // const [executiveData, setExecutiveData] = useState([]);
  

    const handleDelete = (SelectedItem) => {
       // console.log("mahya"+SelectedItem.Id)
         try {
          const response = axios
            .delete(`http://localhost:3000/executive/${SelectedItem.Id}`)
            .then((response) => {
             // setExecutiveData(
            //  const temp=executiveData.filter((value) => 
            //     SelectedItem.Id != value.Id
            //     )
             
              handleClose()
              window.location.reload()
           });
         } catch (error) {
          console.log(error);
         }
      };
    
  return (
    <>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete confirmation!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Are you sure you want to delete?  {/*{SelectedItem[0].Id}  */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
           <Button onClick={() => handleDelete(SelectedItem)} autoFocus>
            Delete
          </Button> 
        </DialogActions>
      
      </Dialog>
     
    </>
  );
};

export default DeleteExecutive;
