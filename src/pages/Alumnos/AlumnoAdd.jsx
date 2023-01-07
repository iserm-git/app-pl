import React, { useState } from "react";
import Content from "../../components/Content";
import axios from "axios";

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
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");

  const handleAlumno = (event) => {
    setNombre(event.target.value);
  };

  const handleGrado = (event) => {
    setGrado(event.target.value);
  };

  const handleSubmit = () => {
    // const server = `http://localhost:4000`;

    let alumno = {
      nombre: nombre,
      grado: grado,
    };

    // const { data } = await axios.post(`${server}/alumnos`, alumno);
    AlumnoService.createAlumno(alumno);
    // console.log(data);
  };

  return (
    <Content>
      <h1>CAPTURA DE ALUMNOS</h1>
      <label>
        Nombre de alumno:
        <input type="text" name="nombre" onChange={handleAlumno} />
      </label>
      <label>
        Grupo:
        <input type="text" name="grado" onChange={handleGrado} />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </Content>
  );
};

export default AlumnoAdd;
