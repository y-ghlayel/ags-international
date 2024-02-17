import "../../style/App.css";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import EmployeesGrid from "./components/EmployeesGrid";
import FiltersForms from "./components/FiltersForm";
import { useState } from "react";
import FormDialog from "./components/FormDialog";

function Employees() {
  const [openDialog, setOpenDialog] = useState(false);
  const [editingAccId, setEditingAccId] = useState("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClickEdit = (rowData) => {
    setOpenDialog(true);
    setEditingAccId(rowData);
  };
  const handleClose = () => {
	setOpenDialog(false);
	setEditingAccId("");
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
        <FormDialog editingAccId={editingAccId} openDialog={openDialog}  handleClose={handleClose}/>
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
            <EmployeesGrid onEditClick={handleClickEdit} />
          </Box>
        </CardContent>
      </div>
    </div>
  );
}

export default Employees;
