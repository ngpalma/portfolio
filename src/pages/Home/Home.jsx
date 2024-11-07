import { Avatar, Container, Typography } from "@mui/material";
import photo from "/Photo About.png";
import { Box } from "@mui/system";

function Home() {
  return (
    <Container component="section">
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          alt="Nicolás Palma"
          src={photo}
          sx={{ width: 300, height: 300, margin: 2 }}
        />
      </Box>
      <Typography variant="h1" textAlign="center" mb={2}>
        Nicolás Palma
      </Typography>
      <Typography variant="h4" textAlign="center" mb={2}>
        Desarrollador Web Full Stack
      </Typography>
      <Typography variant="h6" textAlign="center" mb={2}>
        Javascript, React, PostgreSQL, Node, Express
      </Typography>
    </Container>
  );
}

export default Home;
