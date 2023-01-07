import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import axios from "axios";

import AlumnoService from "../../services/AlumnoService";

const AlumnoEdit = (id) => {
  // const [idal, setIdal] = useState("");
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");

  // const actualUrl = window.location.href;
  const routeParams = useParams();
  const navigate = useNavigate();

  const server = `http://localhost:4000`;

  //console.log(routeParams.id);

  const getData = async () => {
    const { data } = await axios.get(`${server}/alumnos/${routeParams.id}`);
    setNombre(data.nombre);
    setGrado(data.grado);

    // setAlumno(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
    AlumnoService.updateAlumno(alumno, routeParams.id);
    navigate("/alumnos");
    // console.log(data);
  };

  return (
    <Content>
      <h1>CAPTURA DE ALUMNOS</h1>
      <label>
        Nombre de alumno:
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleAlumno}
        />
      </label>
      <label>
        Grupo:
        <input type="text" name="grado" value={grado} onChange={handleGrado} />
      </label>
      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};

export default AlumnoEdit;
