import { AddressInfo } from "net";
import app from "./app";
import {createStudent} from "./endpoints/estudanteEnd/createStudent"
import createTeam from "./endpoints/turmaEnd/createTeam";
import buscarTodosOsDocentes from "./endpoints/docenteEnd/buscarTodosDocentes";
import criarDocente from "./endpoints/docenteEnd/criarDocente";
import mudancaDocenteTurma from "./endpoints/docenteEnd/mudancaDocenteTurma";
import getStudentsByName from "./endpoints/estudanteEnd/searchStudent"

//INCLUIR OS ENDPOINTS AQUI
app.get("/student/:name", getStudentsByName)
app.post("/create-student", createStudent)
app.post("/create-team", createTeam)

app.post("/criar-docente",criarDocente)
app.get("/buscar-docentes",buscarTodosOsDocentes)
app.post("/mudanca-docente-turma",mudancaDocenteTurma)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});