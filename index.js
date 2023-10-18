import User from "./classes/User.js";
import Docente from "./classes/Docente.js";
import Admin from "./classes/Admin.js";

const novoUser = new User("Mariana", "m@m.com", "2021-02-10");
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Leo", "l@l.com", "2021-02-10");
// console.log(novoAdmin.nome);
// novoAdmin.nome = "André";
// console.log(novoAdmin.nome);

const novoUser2 = new User("Juliana", "Souza", "j@s.com", "2021-02-10");
console.log(novoUser2.nome);
console.log(novoUser2.nome);
console.log(novoUser2.sobrenome);

const novoDocente = new Docente("Guilherme", "g@g.com", "2021-02-02");
console.log(novoDocente.exibirInfos());