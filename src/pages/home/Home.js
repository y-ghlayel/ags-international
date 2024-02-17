import "../../style/App.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="entriesEmployees">
      <span className="redText">Entries</span>
      <br />
      <span className="redText">Employees</span>
      <br />
      <Link to="/employees">
        <Button variant="contained">Employees</Button>{" "}
      </Link>
    </div>
  );
}

export default Home;
