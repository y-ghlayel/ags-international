// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import SidePanel from "./SidePanel";

// const AppLayout = ({ children }) => {
//   return (
//     <div>
//       <SidePanel />
//       <main>
//         <Toolbar />
//         {children}
//       </main>
//     </div>
//   );
// };

// export default AppLayout;
import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SidePanel from "./SidePanel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  main: {
    flexGrow: 1,
    padding: "1px",
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SidePanel />
      <main className={classes.main}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
