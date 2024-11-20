/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/LogoNGdev.svg";

export default function NavListDrawer({ navLinksArray, NavLink, setOpen }) {
  return (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <nav>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#ffffff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <List>
          {navLinksArray.map((link) => (
            <ListItem disablePadding key={link.title}>
              <ListItemButton
                component={NavLink}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Box p={2} textAlign="center">
        <img src={logo} alt="Logo" style={{ width: 100, height: "auto" }} />
      </Box>
    </Box>
  );
}
