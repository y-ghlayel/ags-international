import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EmployeeFormDialog from "./EmployeeFormDialog";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

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
export default function FormDialog({
  editingAccId,
  openDialog,
  handleClose,
  handleSubmitData,
}) {
  const [data, setData] = React.useState();

  const handleSubmit = (userData) => {
    // Here you can perform actions with the collected data
    setData(userData);
  };
  const handleAdd = () => {
    handleSubmitData(data);
  };

  return (
    <>
      {" "}
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
          <EmployeeFormDialog onSubmit={handleSubmit} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {editingAccId ? "Back" : "Cancel"}
          </Button>
          {/* submit button */}
          <Button
            autoFocus
            onClick={handleAdd}
            sx={{ bgcolor: "#3e4b63", color: "#ffffff" }}
            variant="contained"
          >
            {editingAccId ? "Save changes" : "Add User"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
