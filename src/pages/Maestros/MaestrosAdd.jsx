import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";

// Librerias GRID
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// LIBRERIAS DE ICONOS
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// LIBRERIAS FORMULARIOS
import { useFormControl } from "@mui/material/FormControl";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MaestrosAdd = () => {
  // const [nombre, setNombre] = useState("");
  // const [apPaterno, setApPaterno] = useState("");
  // const [apMaterno, setApMaterno] = useState("");
  // const [cveCarrera, setCveCarrera] = useState("");
  // handleNombre = (event) => {
  //   this.setNombre(event.target.value);
  // };
  // handleApellidoP = (event) => {
  //   this.setApPaterno(event.target.value);
  // };
  // handleApellidoM = (event) => {
  //   this.setApMaterno(event.target.value);
  // };
  // handleCarrera = (event) => {
  //   this.setCveCarrera(event.target.value);
  // };
  // handleSumbit = (event) => {
  //   const maestro = {
  //     nombre: this.state.nombre,
  //     apellidoP: this.state.apellidoP,
  //     apellidoM: this.state.apellidoM,
  //     cveCarrera: this.state.cveCarrera,
  //   };
  //   const server = `http://localhost:4000/`;
  //   axios.posts(`${server}/maestros/`, { maestro }).then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  // });
  return (
    <Content>
      <h1>MAESTROS ADD</h1>
    </Content>
  );
};

export default MaestrosAdd;
