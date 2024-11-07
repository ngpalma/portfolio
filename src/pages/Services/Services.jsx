/* eslint-disable react/prop-types */
import { Card, CardContent, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Services({ servicesArray }) {
  return (
    <Container sx={{ textAlign: "center", mt: 2, mb: 2 }}>
      <Typography variant="h4" mb={2}>
        Servicios
      </Typography>
      <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
        {servicesArray.map((service) => (
          <Grid
            key={service.title}
            size={{ xs: 12, md: 6 }}
            justifyItems={"center"}
          >
            <Paper elevation={20}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
