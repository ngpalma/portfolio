/* eslint-disable react/prop-types */
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function NavBar({ navLinksArray }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nicolás Palma
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {navLinksArray.map((link) => (
              <Button
                key={link.title}
                component={NavLink}
                color="inherit"
                to={link.path}
              >
                {link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
      >
        <NavListDrawer navLinksArray={navLinksArray} NavLink={NavLink} setOpen={setOpen}/>
      </Drawer>
    </>
  );
}

export default NavBar;
