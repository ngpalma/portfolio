import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import diploma from "/DiplomaHenry.png";
import { Button } from "@mui/material";

function About() {
  return (
    <Container sx={{ textAlign: "center", mt: 5, mb: 5 }}>
      <Typography variant="h4" sx={{ mb: 5 }} color="primary.dark">
        Proporcionando soluciones web
      </Typography>
      <Grid container spacing={4} alignItems={"center"}>
        <Grid
          size={{ xs: 12, md: 6, display: "flex", justifyContent: "center" }}
        >
          <img
            src={diploma}
            alt="Diploma"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
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
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            href="https://api.whatsapp.com/send?phone=+5493412628575&text=Hola%20Nicolás,%20vengo%20de%20tu%20portfolio%20y%20me%20gustaría"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
          >
            Charla conmigo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
