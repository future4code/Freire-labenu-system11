import { Team } from "../../types/typeTeam";
import { connection } from "../connection";

export async function insertTeam (team: Team): Promise<void>{
    const {id, name} = team;

    await connection("Turma").insert({
        id,
        name
    })
}