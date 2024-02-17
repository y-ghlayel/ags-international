
import React from "react";
import { makeStyles } from "@mui/styles";
import SidePanel from "./SidePanel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  main: {
    flexGrow: 1,
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SidePanel />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default AppLayout;
