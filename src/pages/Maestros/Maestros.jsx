import React from "react";
import Content from "../../components/Content";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Maestros = () => {
  return (
    <Content>
      <h1>MAESTROS</h1>
      <a href="/maestros-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar maestro
        </Button>
      </a>
    </Content>
  );
};

export default Maestros;
