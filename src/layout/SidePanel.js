import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SideTabList from "./components/SideTabList";

export default function PermanentDrawerLeft() {
  const handleClick = () => {
    console.log("test event");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: "7vw",
          height: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "7vw", 
            height: "100%",
            boxSizing: "border-box",
          },
          "@media (max-width: 768px)": {
            // Adjustments for smaller screens
            width: "7vw",
            "& .MuiDrawer-paper": {
              width: "7vw",
            },
          },
          "@media (max-width: 576px)": {
            // Further adjustments for even smaller screens
            width: "7vw",
            "& .MuiDrawer-paper": {
              width: "7vw",
            },
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <Box sx={{ p: 4 }}>
          <List>
            <SideTabList />
          </List>
        </Box>
        <Box sx={{ p: 4 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <LogoutOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
