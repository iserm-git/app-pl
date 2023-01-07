import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Alumnos from "../pages/Alumnos/Alumnos";
import AlumnosAdd from "../pages/Alumnos/AlumnoAdd";
import AlumnosEdit from "../pages/Alumnos/AlumnoEdit";
import Maestros from "../pages/Maestros/Maestros";
import MaestrosAdd from "../pages/Maestros/MaestrosAdd";
import Materias from "../pages/Materias/Materias";
import MateriasAdd from "../pages/Materias/MateriasAdd";
import Calificaciones from "../pages/Calificaciones/Calificaciones";
import CalificacionesAdd from "../pages/Calificaciones/CalificacionesAdd";
// import Login from "../pages/Login";
// import RecoveryPassword from "../pages/RecoveryPassword";
// import NotFound from "../pages/NotFound"
import Layout from "../containers/Layout";

import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" component={Home} />
          <Route path="/alumnos" component={Alumnos} />
          <Route path="/alumnos-add" component={AlumnosAdd} />
          <Route path="/alumnos-edit/:id" component={AlumnosEdit} />
          <Route path="/maestros" component={Maestros} />
          <Route path="/maestros-add" component={MaestrosAdd} />
          <Route path="/materias" component={Materias} />
          <Route path="/materias-add" component={MateriasAdd} />
          <Route path="/calificaciones" component={Calificaciones} /> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/alumnos" element={<Alumnos />}></Route>
          <Route path="/alumnos-add" element={<AlumnosAdd />}></Route>
          <Route path="/alumnos-edit/:id" element={<AlumnosEdit />}></Route>
          <Route path="/maestros" element={<Maestros />}></Route>
          <Route path="/maestros-add" element={<MaestrosAdd />}></Route>
          <Route path="/materias" element={<Materias />}></Route>
          <Route path="/materias-add" element={<MateriasAdd />}></Route>
          <Route path="/calificaciones" element={<Calificaciones />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
