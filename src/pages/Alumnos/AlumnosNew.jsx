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
  const server = `https://localhost:4000`;

  const filter = {
    include: [
      {
        relation: "alumnos", // asumiendo que 'alumno' es el nombre de la relación en el modelo AlumnoGrupo
        scope: {
          fields: ["nomAlumno", "edad"], // solo traerá los campos 'nombre' y 'edad' del modelo Alumno
        },
      },
      {
        relation: "grupo", // asumiendo que 'grupo' es el nombre de la relación en el modelo AlumnoGrupo
        scope: {
          fields: ["nomGrupo", "grado"], // solo traerá los campos 'nombre' y 'descripcion' del modelo Grupo
        },
      },
    ],
  };

  const filterString = encodeURIComponent(JSON.stringify(filter));

  const getData = async () => {
    const { data } = await axios.get(`${server}/alumno-grupos/${filterString}`);
    console.log(data);
    setAlumno(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = alumno.map((info) => {
    return (
      <TableRow
        key={info.idAlumno}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.idAlumno}
        </TableCell>
        <TableCell>{info.nomAlumno}</TableCell>
        <TableCell>{info.edad}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`alumnos-edit/${info.idAlumno}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await AlumnoService.deleteAlumno(info.idAlumno);
              await getData();
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
