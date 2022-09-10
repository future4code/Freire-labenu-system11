"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = require("./Connection");
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => Connection_1.connection.raw(`
      CREATE TABLE IF NOT EXISTS aula_servicos_adress (
         id_user VARCHAR(255) PRIMARY KEY,
         logradouro VARCHAR(255) NOT NULL,
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)
    .then(() => { console.log("Tabela criada"); })
    .catch(printError);
const closeConnection = () => { Connection_1.connection.destroy(); };
createTables()
    .then(() => console.log("Banco pronto!"))
    .finally(closeConnection);
