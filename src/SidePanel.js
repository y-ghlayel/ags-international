import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function PermanentDrawerLeft() {
  const handleClick = () => {
    console.log("test event");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: 124,
          height: 1080,
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
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ReorderIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/">
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      style={{ width: "60px", height: "60px", color: "gray" }}
                    />
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEmotionsOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationCityOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalShippingOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PieChartOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EditCalendarOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PaymentsOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NoteAddOutlinedIcon sx={{ color: "gray" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
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
