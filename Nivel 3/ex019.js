const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
];

const aprovados = alunos.filter((n) => n.nota >= 7);
console.log(aprovados.map((n) => n.nome.toUpperCase()));