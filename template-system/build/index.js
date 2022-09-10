"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createStudent_1 = require("./endpoints/estudanteEnd/createStudent");
const createTeam_1 = __importDefault(require("./endpoints/estudanteEnd/turmaEnd/createTeam"));
const buscarTodosDocentes_1 = __importDefault(require("./endpoints/docenteEnd/buscarTodosDocentes"));
const criarDocente_1 = __importDefault(require("./endpoints/docenteEnd/criarDocente"));
const mudancaDocenteTurma_1 = __importDefault(require("./endpoints/docenteEnd/mudancaDocenteTurma"));
app_1.default.post("/student", createStudent_1.createStudent);
app_1.default.post("/create-team", createTeam_1.default);
app_1.default.post("/criar-docente", criarDocente_1.default);
app_1.default.get("/buscar-docentes", buscarTodosDocentes_1.default);
app_1.default.post("/mudanca-docente-turma", mudancaDocenteTurma_1.default);
const server = app_1.default.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
