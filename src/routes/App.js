import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Alumnos from "../pages/Alumnos/Alumnos";
import AlumnosAdd from "../pages/Alumnos/AlumnoAdd";
import Maestros from "../pages/Maestros/Maestros";
import MaestrosAdd from "../pages/Maestros/MaestrosAdd";
import Materias from "../pages/Materias/Materias";
import MateriasAdd from "../pages/Materias/MateriasAdd";
import Calificaciones from "../pages/Calificaciones/Calificaciones";
import CalificacionesAdd from "../pages/Calificaciones/CalificacionesAdd";
// import Login from "../pages/Login";
// import RecoveryPassword from "../pages/RecoveryPassword";
// import NotFound from "../pages/NotFound";
import Layout from "../containers/Layout";

import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/alumnos" component={Alumnos} />
          <Route exact path="/alumnos-add" component={AlumnosAdd} />
          <Route exact path="/maestros" component={Maestros} />
          <Route exact path="/maestros-add" component={MaestrosAdd} />
          <Route exact path="/materias" component={Materias} />
          <Route exact path="/materias-add" component={MateriasAdd} />
          <Route exact path="/calificaciones" component={Calificaciones} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
