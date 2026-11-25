const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
  { nome: "Vitor", nota: 8 },
];

console.log((alunos.reduce((media, n) => media + n.nota, 0))/alunos.length)