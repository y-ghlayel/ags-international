import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function SideTabList() {
  return (
    <>
      {" "}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ReorderIcon sx={{ color: "gray" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ display: "flex", justifyContent: "center"}}>
          <ListItemIcon>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{
                  width: "50px", 
                  height: "50px", 
                  color: "gray",
                }}
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
    </>
  );
}
