// Importing necessary styles and libraries
import "../../style/App.css";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import EmployeesGrid from "./components/EmployeesGrid";
import FiltersForms from "./components/FiltersForm";
import { useState } from "react";
import FormDialog from "./components/FormDialog";

function Employees() {
	  // State variables initialization

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

    // Function to handle submitting new employee data
  const handleSubmitData = (userData) => {
    setnewRow([...newRow, userData]); 
    handleClose(); 
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* form dialog */}
      <div>
        <FormDialog editingAccId={editingAccId} openDialog={openDialog}  handleClose={handleClose}  handleSubmitData={handleSubmitData}/>
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
            <EmployeesGrid onEditClick={handleClickEdit}   newRow={newRow}/>
          </Box>
        </CardContent>
      </div>
    </div>
  );
}

export default Employees;
