"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAdress = void 0;
const insertAdressDb_1 = __importDefault(require("../data/insertAdressDb"));
const getFullAdress_1 = require("../services/getFullAdress");
const insertAdress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cep = req.params.cep;
        const address = yield (0, getFullAdress_1.getFullAdress)(cep);
        if (!address) {
            throw new Error("cep inválido");
        }
        yield (0, insertAdressDb_1.default)(address);
        res.status(201).send("Endereco criado com sucesso");
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.insertAdress = insertAdress;
