import { DataGrid } from "@mui/x-data-grid";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

export default function EmployeesGrid({ onEditClick, newRow }) {
  const renderActionsCell = (params) => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          color="inherit"
          sx={{ width: "25px", margin: "0 10px", backgroundColor: "#f8f9fa" }}
          onClick={() => onEditClick(params.row)}
          startIcon={<ModeEditOutlinedIcon sx={{ color: "gray" }} />}
        ></Button>
        <Button
          variant="text"
          color="inherit"
          sx={{ width: "100px", margin: "0 10px", backgroundColor: "#f8f9fa" }}
          // onClick={() => handleDelete(params.row)}
          endIcon={<LockOutlinedIcon sx={{ color: "gray" }} />}
        >
          Blocked
        </Button>
      </Box>
    );
  };
  useEffect(() => {
    if (newRow) {
      const randomId = Math.floor(Math.random() * (100 - 9 + 1)) + 9;
      setRows((prevRows) => [
        ...prevRows,
	{ id: `'${randomId}'`, usename: newRow[0]?.username, role: newRow.role },
      ]);
    }
  }, [newRow]);
  const columns = [
    {
      field: "username",
      headerName: "Employee User Name",
      flex: 1,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: renderActionsCell,
    },
  ];

  const [rows, setRows] = useState([
    {
      id: "1",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "2",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "3",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "4",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "5",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "6",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "7",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "8",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
    {
      id: "9",
      username: "Employee Full Name",
      role: "Designation/Role/",
    },
  ]);
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pactionsSize: 5,
            },
          },
        }}
        pactionsSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </>
  );
}
