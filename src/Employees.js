import "./App.css";
import SidePanel from "./SidePanel";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Employees() {
  const renderActionsCell = (params) => {
    return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
		<Button
		  variant="text"
		  color="inherit"
		  sx={{ width: '25px', margin: '0 10px', backgroundColor: '#f8f9fa' }}
		  // onClick={() => handleEdit(params.row)}
		  startIcon={<ModeEditOutlinedIcon  sx={{ color: "gray" }} />}
		></Button>
		<Button
		  variant="text"
		  color="inherit"
		  sx={{ width: '100px', margin: '0 10px',backgroundColor: '#f8f9fa' }}
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
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
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={3}>
              <Typography variant="h5" component="div" color="#3e4b63">
                All Employees / Users
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-search-2"
                label="Search to find the easier"
                type="search"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  filter by department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="filter by department"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                sx={{ bgcolor: "#3e4b63", color: "#ffffff" }}
              >
                Add new product
              </Button>
            </Grid>

            {/* Second Row */}
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Filter by supplier
                </InputLabel>
                <NativeSelect
                  defaultValue={"1"}
                  inputProps={{
                    name: "supplier",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>All Suppliers</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Filter by Brand
                </InputLabel>
                <NativeSelect
                  defaultValue={"1"}
                  inputProps={{
                    name: "supplier",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>All Brands</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Filter by Capacity
                </InputLabel>
                <NativeSelect
                  defaultValue={"1"}
                  inputProps={{
                    name: "supplier",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>All Capacities</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Filter by warehouse
                </InputLabel>
                <NativeSelect
                  defaultValue={"1"}
                  inputProps={{
                    name: "supplier",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>All warehouses</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
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
          </Box>
        </CardContent>
      </div>
    </div>
  );
}

export default Employees;
