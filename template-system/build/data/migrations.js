"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => connection_1.connection.raw(`
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
const closeConnection = () => { connection_1.connection.destroy(); };
createTables()
    .then(() => console.log("Banco pronto!"))
    .finally(closeConnection);
