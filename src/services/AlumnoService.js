import axios from "axios";

// const ALUMNO_API_BASE_URL = "http://localhost:4000/alumnos";
const ALUMNO_API_BASE_URL =
  "https://api-escolar1-4aeab1ba87bd.herokuapp.com/alumnos";

class AlumnoService {
  getAlumnos() {
    return axios.get(ALUMNO_API_BASE_URL);
  }

  createAlumno(alumno) {
    return axios.post(ALUMNO_API_BASE_URL, alumno);
  }

  getAlumnoById(alumnoId) {
    return axios.get(ALUMNO_API_BASE_URL + "/" + alumnoId);
  }

  updateAlumno(alumno, alumnoId) {
    return axios.put(ALUMNO_API_BASE_URL + "/" + alumnoId, alumno);
  }

  deleteAlumno(alumnoId) {
    return axios.delete(ALUMNO_API_BASE_URL + "/" + alumnoId);
  }
}

export default new AlumnoService();
