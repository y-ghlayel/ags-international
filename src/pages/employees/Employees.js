import "../../style/App.css";
import SidePanel from "../../layout/SidePanel";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import EmployeesGrid from "./components/EmployeesGrid";
import FiltersForms from "./components/FiltersForm";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EmployeeFormDialog from "./components/EmployeeFormDialog";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Employees() {
  const [openDialog, setOpenDialog] = useState(false);
  const [editingAccId, setEditingAccId] = useState("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClickEdit = (rowData) => {
    setOpenDialog(true);
    setEditingAccId(rowData);
    console.log(editingAccId);
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
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openDialog}
        >
          <DialogTitle
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
            color="#3e4b63"
          >
            {editingAccId ? "Edit User" : "Add User"}
          </DialogTitle>
          {editingAccId && (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 40,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <EmployeeFormDialog />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              {editingAccId ? "Back" : "Cancel"}
            </Button>
            <Button
              autoFocus
              onClick={handleClose}
              sx={{ bgcolor: "#3e4b63", color: "#ffffff" }}
              variant="contained"
            >
              {editingAccId ? "Save changes" : "Add User"}
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      {/* Side Panel */}
      <SidePanel />

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(4),
  },
  "& .MuiPaper-root": {
    maxWidth: "800px",
    borderRadius: "22px",
  },
}));
