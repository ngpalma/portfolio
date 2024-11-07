import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/system/Box";

function About() {
  return (
    <Container
      sx={{ justifyItems: "center", textAlign: "center", mt: 2, mb: 2 }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Desarrollador Web Full Stack
      </Typography>
      <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
        <Grid size={{ xs: 12, md: 6 }} justifyItems={"center"}>
          <Box
            component="img"
            src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
            alt="Imagen de prueba"
            width={450}
          ></Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} justifyItems={"center"}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Proporcionando soluciones web
          </Typography>

          <Typography variant="body1">
            ¡Saludos! Soy un apasionado desarrollador web full stack con una
            dedicación inquebrantable hacia mi trabajo. Mi misión es convertir
            tus ideas y proyectos en experiencias digitales extraordinarias. Con
            una sólida base de habilidades y conocimientos en desarrollo web,
            estoy preparado para enfrentar cualquier desafío que se me presente.
            Desde el diseño elegante hasta la funcionalidad impecable, disfruto
            cada fase del proceso de desarrollo, ya sea en el emocionante mundo
            del front-end o en la robusta arquitectura del back-end. Mi enfoque
            meticuloso y orientado a los detalles garantiza que cada línea de
            código contribuya a una experiencia de usuario excepcional. Además,
            tengo una profunda apreciación por el trabajo en equipo. Creo
            firmemente que las mejores soluciones surgen de la colaboración y la
            sinergia entre mentes creativas. Estoy listo para sumergirme en
            proyectos desafiantes y trabajar codo a codo con un equipo dinámico
            para lograr resultados extraordinarios. Ya sea que estés buscando
            una aplicación web innovadora, un sitio web impresionante o una
            plataforma digital de vanguardia, estoy aquí para hacer realidad tus
            sueños digitales. Permíteme ser tu guía en este viaje emocionante
            hacia el éxito en línea. ¡Conéctate conmigo y juntos llevaremos tus
            proyectos a nuevas alturas!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
