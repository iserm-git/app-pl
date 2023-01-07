import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";

import AlumnoService from "../../services/AlumnoService";
import AlumnoEdit from "../Alumnos/AlumnoEdit";

import Button from "@mui/material/Button";
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
import { useHistory } from "react-router";

const Alumnos = () => {
  const [alumno, setAlumno] = useState([]);
  // const [id, setId] = useState("");
  const server = `http://localhost:4000`;

  const getData = async () => {
    const { data } = await axios.get(`${server}/alumnos`);
    console.log(data);
    setAlumno(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = alumno.map((info) => {
    return (
      <TableRow
        key={info.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.id}
        </TableCell>
        <TableCell>{info.nombre}</TableCell>
        <TableCell>{info.grado}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`alumnos-edit/${info.id}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={() => {
              //console.log(info.id);
              AlumnoService.deleteAlumno(info.id);
              getData();
            }}
          >
            <DeleteIcon color="danger" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Content>
      <h1>ALUMNOS</h1>
      <a href="/alumnos-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar alumno
        </Button>
      </a>

      <h3>Listado de alumnos</h3>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Grupo</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Content>
  );
};

export default Alumnos;
