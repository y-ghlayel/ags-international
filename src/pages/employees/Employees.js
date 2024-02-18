// Importing necessary styles and libraries
import "../../style/App.css";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import EmployeesGrid from "./components/EmployeesGrid";
import FiltersForms from "./components/FiltersForm";
import { useState } from "react";
import AgsDialog from "../../components/AgsDialog";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Employees() {
  // State variables initialization
  const [open, setOpen] = React.useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingAccId, setEditingAccId] = useState("");
  const [newRow, setnewRow] = React.useState([]);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  // Function to open the dialog for editing an employee
  const handleClickEdit = (rowData) => {
    setOpenDialog(true);
    setEditingAccId(rowData);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setEditingAccId("");
  };
  const handleAlertClose = () => {
    setOpen(false);
  };

  // Function to handle submitting new employee data
  const handleSubmitData = (userData) => {
    setnewRow([...newRow, userData]);
    handleClose();
    setOpen(true); // Show the success alert
    setTimeout(() => {
      setOpen(false); // Hide the success alert after 5 seconds
    }, 2500);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* form dialog */}

      <div>
        <AgsDialog
          editingAccId={editingAccId}
          openDialog={openDialog}
          handleClose={handleClose}
          handleSubmitData={handleSubmitData}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          alignItems: "center",
        }}
      >
        {/* Filter Card */}
        <CardContent
          sx={{
            width: "97%",
            height: "400",
            backgroundColor: "#FFFFFF",
            marginTop: "10px",
            marginBottom: "15px",
            borderRadius: "15px",
          }}
        >
          {" "}
          <FiltersForms openDialog={handleClickOpen} />
        </CardContent>

        {/* Grid Card */}
        <CardContent
          sx={{
            width: "97%",
            height: "800px",
            backgroundColor: "#FFFFFF",
            marginTop: "15px",
            marginBottom: "15px",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ height: 650, width: "100%" }}>
            <EmployeesGrid onEditClick={handleClickEdit} newRow={newRow} />
          </Box>
        </CardContent>
      </div>

      {/* added alert dialog */}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
        PaperProps={{
          style: {
            marginBottom: "10px",
          },
        }}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleAlertClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            User [Employee Name] added successfully!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Employees;
