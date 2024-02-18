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
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
};

export default function FiltersForms({ openDialog }) {
  return (
    <Grid container spacing={2}>
      {/* First Row */}
      <Grid item xs={12} md={3}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" color="#3e4b63">
            All Employees / Users
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={{ bgcolor: "#3e4b63", color: "#ffffff" }}
          onClick={openDialog}
        >
          Add new product
        </Button>
      </Grid>

      {/* Second Row */}
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}>
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
  );
}
