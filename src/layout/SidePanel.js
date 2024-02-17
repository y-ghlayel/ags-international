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
          width: 124,
          height: 800,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 124,
            height: 1080,
            boxSizing: "border-box",
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
