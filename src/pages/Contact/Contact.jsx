/* eslint-disable react/prop-types */
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/system/Box";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useRef, useState } from "react";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

function Contact({ contactArray }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    variant: "filled",
    message: "",
  });

  const form = useRef();

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto.",
      });
      setAlert({
        open: true,
        severity: "error",
        variant: "filled",
        message: "Formato de email incorrecto.",
      });
      return;
    }
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setAlert({
            open: true,
            severity: "success",
            variant: "filled",
            message: "¡Mensaje enviado con éxito!",
          });
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({
            open: true,
            severity: "error",
            variant: "filled",
            message: "Error al enviar el mensaje.",
          });
        }
      );
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Container sx={{ textAlign: "center", mt: 2, mb: 2 }}>
      <Typography variant="h4" mb={2}>
        Contacto
      </Typography>
      <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
        >
          {contactArray.map((contact) => (
            <Button
              key={contact.title}
              startIcon={contact.icon}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mb: 2 }}
            >
              {contact.title}
            </Button>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Nombre"
              type="text"
              variant="outlined"
              sx={{ mb: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              sx={{ mb: 2 }}
              helperText={error.message}
              error={error.error}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="subject"
              name="subject"
              label="Asunto"
              type="text"
              variant="outlined"
              sx={{ mb: 2 }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="message"
              name="message"
              label="Mensaje"
              type="text"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              sx={{ mt: 2 }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alert.severity}
          variant={alert.variant}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
