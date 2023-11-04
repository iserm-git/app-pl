import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";

import AlumnoService from "../../services/AlumnoService";

import { TextField, Button, Grid, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const AlumnoEdit = (id) => {
  // const [idal, setIdal] = useState("");
  const [nomAlumno, setNomAlumno] = useState("");
  const [edad, setEdad] = useState("");
  const [errors, setErrors] = useState({});

  // const actualUrl = window.location.href;
  const routeParams = useParams();
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

  const server = `https://api-escolar1-4aeab1ba87bd.herokuapp.com`;

  //console.log(routeParams.id);

  const getData = async () => {
    const { data } = await axios.get(`${server}/alumnos/${routeParams.id}`);
    setNomAlumno(data.nomAlumno);
    setEdad(data.edad);

    // setAlumno(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAlumno = (event) => {
    setNomAlumno(event.target.value);
  };

  const handleEdad = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmit = () => {
    // const server = `http://localhost:4000`;

    let alumno = {
      nomAlumno: nomAlumno,
      edad: edad,
    };

    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    console.log(alumno);
    AlumnoService.updateAlumno(alumno, routeParams.id);
    navigate("/alumnos");
    // console.log(data);
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
            startIcon={<SaveIcon />}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Content>
  );
};

export default AlumnoEdit;
