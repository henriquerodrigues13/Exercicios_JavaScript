const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
];

const [aluno] = alunos;               
const { nome, nota } = aluno;         
console.log(`${nome} tirou ${nota}`); 