import { DataGrid } from "@mui/x-data-grid";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function employeesGrid({onEditClick }) {
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
  const columns = [
    {
      field: "username",
      headerName: "Employee User Name",
      width: 800,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 700,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: renderActionsCell,
    },
  ];

  const rows = [
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
  ];
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
