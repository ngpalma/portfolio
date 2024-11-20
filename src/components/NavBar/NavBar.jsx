/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { NavListDrawer } from "../index";
import { useState } from "react";
import Box from "@mui/system/Box";
import { NavLink } from "react-router-dom";
import logo from "/LogoNGdev.svg";

function NavBar({ navLinksArray }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
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
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 40,
              height: 40,
              mr: 1,
              display: { xs: "none", md: "block" },
              backgroundColor: "#fff",
              borderRadius: 3,
            }}
          />
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
        <NavListDrawer
          navLinksArray={navLinksArray}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}

export default NavBar;
