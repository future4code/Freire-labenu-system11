"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAddress_1 = require("./endpoints/getAddress");
const insertAdress_1 = require("./endpoints/insertAdress");
app_1.default.post("/user/:cep", insertAdress_1.insertAdress);
app_1.default.get("/endereco/:cep", getAddress_1.getAddress);
const server = app_1.default.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
