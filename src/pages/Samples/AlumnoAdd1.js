import React, { useState } from "react";
import Content from "../../components/Content";

import AlumnoService from "../../services/AlumnoService";

import {
  FormControl,
  FormLabel,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const AlumnoAdd = () => {
  const [nomAlumno, setNomAlumno] = useState("");
  const [edad, setEdad] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.nomAlumno = nomAlumno ? "" : "This field is required.";
    temp.edad = edad ? "" : "This field is required.";
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
    }
  };

  return (
    <Content>
      <Typography variant="h4" gutterBottom>
        CAPTURA DE ALUMNOS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            startIcon={<PersonAddIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Content>
  );
};

export default AlumnoAdd;
