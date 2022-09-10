import { AddressInfo } from "net";
import app from "./app";
import {createStudent} from "./endpoints/estudanteEnd/createStudent"
import createTeam from "./endpoints/estudanteEnd/turmaEnd/createTeam";




//INCLUIR OS ENDPOINTS AQUI
//app.get("/student", getStudents)
app.post("/student", createStudent)
app.post("/create-team", createTeam)
//app.post("/user/:cep",insertAdress)
//app.get("/list", getAllAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});