import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12332145612);
const gerente = new Gerente("Samuel", 5000, 32132112342);

const estaLogado = SistemaAutenticacao.login(diretor,"123456789");
console.log(estaLogado);
