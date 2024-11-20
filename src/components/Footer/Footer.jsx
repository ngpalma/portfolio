/* eslint-disable react/prop-types */
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import logo from "/LogoNGdev.svg";
import Box from "@mui/system/Box";
import { NavLink } from "react-router-dom";

function Footer({ navLinksArray, socialMedia }) {
  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#333333",
          color: "#FFFFFF",
          py: 4,
        }}
      >
        <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
          <Grid size={4} justifyItems={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Mi logo"
                style={{ width: 100, height: 100 }}
              />
            </Box>
          </Grid>
          <Grid size={4} display={"flex"} flexDirection={"column"}>
            {socialMedia.map((social) => (
              <Button
                key={social.title}
                startIcon={social.icon}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "secondary.light" }}
              >
                {social.title}
              </Button>
            ))}
          </Grid>
          <Grid size={4} display={"flex"} flexDirection={"column"}>
            {navLinksArray.map((link) => (
              <Button
                key={link.title}
                component={NavLink}
                startIcon={link.icon}
                to={link.path}
                sx={{ color: "primary.light" }}
              >
                {link.title}
              </Button>
            ))}
          </Grid>
          <Grid size={12}>
            <Typography>
              &copy; {new Date().getFullYear()} Nicolás Palma - Mi Portfolio
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
