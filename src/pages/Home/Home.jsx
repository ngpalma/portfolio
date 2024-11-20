/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import photo from "/Photo About.png";
import Box from "@mui/system/Box";
import MyCarousel from "../../components/MyCarousel/MyCarousel";

function Home({ projectsArray }) {
  return (
    <Container component="section">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Avatar
          alt="Nicolás Palma"
          src={photo}
          sx={{ width: 150, height: 150 }}
        />
        <Box>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.dark"
            sx={{
              animation: "slideInDown 2s forwards",
              "@keyframes slideInDown": {
                from: { opacity: 0, transform: "translateY(-100%)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Nicolás Palma
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            color="secondary.dark"
            sx={{
              animation: "slideInRight 2s forwards",
              "@keyframes slideInRight": {
                from: { opacity: 0, transform: "translateX(100%)" },
                to: { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            Desarrollador Web Full Stack
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h5"
        textAlign="center"
        mb={2}
        mt={2}
        color="primary.main"
        sx={{
          animation: "slideInLeft 2s forwards",
          "@keyframes slideInLeft": {
            from: { opacity: 0, transform: "translateX(-100%)" },
            to: { opacity: 1, transform: "translateX(0)" },
          },
        }}
      >
        Javascript, React, PostgreSQL, Node, Express
      </Typography>
      <Box component="div" sx={{ margin: 5 }}>
        <MyCarousel
          array={projectsArray}
          renderArray={(project) => (
            <img
              key={project.title}
              src={project.images[0]}
              alt={project.title}
              style={{
                height: 400,
                animation: "zoomIn 2s forwards",
              }}
            />
          )}
          autoPlay
          stopAutoPlayOnHover
          swipe
          interval={5000}
          timeout={5000}
          animation="slide"
          sx={{
            "@keyframes zoomIn": {
              from: {
                opacity: 0,
                transform: "scale(0.8)",
              },
              to: {
                opacity: 1,
                transform: "scale(1)",
              },
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Home;
