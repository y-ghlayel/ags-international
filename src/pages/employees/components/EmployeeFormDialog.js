import * as React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function EmployeeFormDialog({ onSubmit }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France"];

  const [userData, setUserData] = React.useState({
    username: "",
    role: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
	onSubmit(userData)
  };

  return (
    <>
      {" "}
      <Grid container spacing={4}>
        {/* First Row */}
        <Grid item xs={6} spacing={22}>
          <TextField
            id="outlined-textarea"
            label="Username"
            placeholder="Enter User Name"
            fullWidth
            sx={{ bgcolor: "#f8f9fa" }}
            value={userData?.username}
            onChange={handleInputChange}
			name="username"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Phone Number"
            placeholder="Enter Phone Number"
            fullWidth
            sx={{ bgcolor: "#f8f9fa" }}
            onChange={handleInputChange}
          />
        </Grid>

        {/* Second Row */}
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ bgcolor: "#f8f9fa" }} >
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
			  name="role"
              label="Role Designation Department"
			  onChange={handleInputChange}
            >
              <MenuItem value={10}>Role</MenuItem>
              <MenuItem value={20}>Designation</MenuItem>
              <MenuItem value={30}>Department</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}></Grid>

        {/* Third Row */}
        <Grid item xs={6}>
          <FormControl
            sx={{ m: 0, width: "41ch", bgcolor: "#f8f9fa" }}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            sx={{ m: 0, width: "41ch", bgcolor: "#f8f9fa" }}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Re enter Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>

        {/* Fourth Row */}
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Whole Sale Commission rate"
            placeholder="Enter gross weight"
            fullWidth
            sx={{ bgcolor: "#f8f9fa" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Retail Commission rate"
            placeholder="Enter gross weight"
            fullWidth
            sx={{ bgcolor: "#f8f9fa" }}
          />
        </Grid>

        {/* Fifth Row */}
        <Grid item xs={6}>
          <Typography variant="h5" component="div" color="#3e4b63">
            User Permissions
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>

        {/* Sixth Row */}
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ bgcolor: "#f8f9fa" }}>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Product Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Product Category"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ bgcolor: "#f8f9fa" }}>
            <InputLabel id="country-select-label">Product Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              label="Product Country"
            >
              {countries.map((country, index) => (
                <MenuItem key={index} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Seventh Row */}
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ bgcolor: "#f8f9fa" }}>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Product Company
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Product Company"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ bgcolor: "#f8f9fa" }}>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Product Brand
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Product Brand"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
