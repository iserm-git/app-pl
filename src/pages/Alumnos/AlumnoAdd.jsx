import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";

import AlumnoService from "../../services/AlumnoService";

import { TextField, Button, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const AlumnoAdd = () => {
  const [nomAlumno, setNomAlumno] = useState("");
  const [edad, setEdad] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let temp = {};
    temp.nomAlumno = nomAlumno ? "" : "El nombre de alumno es requerido.";
    temp.edad = edad ? "" : "La edad es requerida.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleAlumno = (event) => {
    setNomAlumno(event.target.value);
  };

  const handleEdad = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmit = () => {
    if (validate()) {
      let alumno = {
        nomAlumno: nomAlumno,
        edad: edad,
      };
      console.log(alumno);
      AlumnoService.createAlumno(alumno);
      navigate("/alumnos");
    }
  };

  return (
    <Content>
      <Typography variant="h4" gutterBottom>
        CAPTURA DE ALUMNOS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <TextField
            variant="outlined"
            fullWidth
            label="Nombre de alumno"
            name="nomAlumno"
            value={nomAlumno}
            onChange={handleAlumno}
            {...(errors.nomAlumno && {
              error: true,
              helperText: errors.nomAlumno,
            })}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label="Edad"
            name="edad"
            value={edad}
            onChange={handleEdad}
            {...(errors.edad && { error: true, helperText: errors.edad })}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            startIcon={<PersonAddIcon />}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Content>
  );
};

export default AlumnoAdd;
