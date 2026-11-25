function resumo(alunos) {
  if (alunos.length === 0) {
    throw new Error("Lista de alunos vazia");
  }

  const aprovados = alunos.filter((a) => a.nota >= 7);
  const soma = alunos.reduce((acc, a) => acc + a.nota, 0);

  return {
    total: alunos.length,
    aprovados: aprovados.map((a) => a.nome),
    mediaGeral: soma / alunos.length,
  };
}

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
];

try {
  const { total, aprovados, mediaGeral } = resumo(alunos); // desestruturação
  console.log(`${total} alunos, aprovados: ${aprovados.join(", ")}, média ${mediaGeral.toFixed(1)}`);
  console.log(resumo([])); // vai cair no catch
} catch (erro) {
  console.log("Erro:", erro.message);
}