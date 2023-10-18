const user = {
  nome: "Leonardo",
  email: "leo@gmail.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
    nome: "Mariana",
    email: "m@gmail",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
};

Object.setPrototypeOf(admin, user);