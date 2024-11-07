/* eslint-disable react/prop-types */
// import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

function Contact({ contactArray }) {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [text, setText] = useState("");
  const [error, setError] = useState({
    error: false,
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
      console.log("Email correcto");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
      return alert(error.message);
    }

    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
              // helperText={error.message}
              // error={error.error}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
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
              // helperText={error.message}
              // error={error.error}
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
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
              // helperText={error.message}
              // error={error.error}
              // value={text}
              // onChange={(e) => setText(e.target.value)}
            />

            <Button
              sx={{ mt: 2 }}
              type="submit"
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
