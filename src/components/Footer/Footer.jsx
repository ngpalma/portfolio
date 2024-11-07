/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import logo from "/Mi Logo.png";
import Divider from "@mui/material/Divider";
import Box from "@mui/system/Box";
import { NavLink } from "react-router-dom";

function Footer({ navLinksArray, socialMedia }) {
  return (
    <footer>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
          <Grid size={4} justifyItems={"center"}>
            <Box>
              <Avatar
                alt="Mi Logo"
                src={logo}
                sx={{ width: 200, height: 200 }}
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
              >
                {link.title}
              </Button>
            ))}
          </Grid>
          <Grid size={12}>
            <Box sx={{ mb: 2 }}>
              <Typography>
                &copy; {new Date().getFullYear()} Nicolás Palma - Mi Portfolio
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
