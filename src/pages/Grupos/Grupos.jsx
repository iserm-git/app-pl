import React from "react";
import Content from "../../components/Content";

const Grupos = () => {
  return (
    <Content>
      <h1>GRUPOS</h1>
      <a href="/grupos-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar grupo
        </Button>
      </a>
    </Content>
  );
};

export default Grupos;
