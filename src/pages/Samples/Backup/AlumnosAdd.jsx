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
} from "@mui/material";
import { Grid } from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

const AlumnoAdd = () => {
  const [nomAlumno, setNomAlumno] = useState("");
  const [edad, setEdad] = useState("");

  const handleAlumno = (event) => {
    setNomAlumno(event.target.value);
  };

  const handleEdad = (event) => {
    setEdad(event.target.value);
  };

  const handleSubmit = () => {
    let alumno = {
      nomAlumno: nomAlumno,
      edad: edad,
    };

    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    console.log(alumno);
    AlumnoService.createAlumno(alumno);
  };

  return (
    <Content>
      <h1>CAPTURA DE ALUMNOS</h1>
      <label>
        Nombre de alumno:
        <input type="text" name="nomAlumno" onChange={handleAlumno} />
      </label>
      <label>
        Edad:
        <input type="text" name="edad" onChange={handleEdad} />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </Content>
  );
};

export default AlumnoAdd;
