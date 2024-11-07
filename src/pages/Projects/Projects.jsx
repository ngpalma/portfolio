/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";

function Projects({ projectsArray }) {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 2, mb: 2 }}>
      <Typography variant="h4" mb={2}>
        Proyectos
      </Typography>
      <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
        {projectsArray.map((project) => (
          <Grid
            key={project.title}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            justifyItems={"center"}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleOpen(project)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.images[0]}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedProject && (
          <>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <DialogContent>
              <Typography variant="body1" mb={2}>
                {selectedProject.detail}
              </Typography>
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    paddingBottom: "1rem"
                  }}
                >
                  {selectedProject.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  ))}
                </div>
              )}
              {selectedProject.video && (
                <video width="100%" controls>
                  <source src={selectedProject.video} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                href={selectedProject.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Proyecto
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2, ml: 2 }}
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en GitHub
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default Projects;
