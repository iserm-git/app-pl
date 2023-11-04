import React from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";

const RegistroAlumno = () => {
  // Agrega aquí los estados y funciones necesarios

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Registro de alumnos
      </Typography>
      <Grid container spacing={3}>
        {/* Datos Personales */}
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Datos personales
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Matrícula" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Nombre(s)" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Apellido paterno" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Apellido materno" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Fecha de Nacimiento"
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="CURP" fullWidth variant="outlined" />
        </Grid>

        {/* Información de contacto */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Información de contacto
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Domicilio" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Teléfono Casa" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Teléfono Celular" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Teléfono Celular Padre"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Teléfono Oficina Madre"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Teléfono Oficina Padre"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Historial académico */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Historial académico
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            label="Escuela de procedencia"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField label="Promedio" fullWidth variant="outlined" />
        </Grid>

        {/* Botón de Envío */}
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          style={{ marginTop: "20px" }}
        >
          <Button variant="contained" color="primary">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistroAlumno;
