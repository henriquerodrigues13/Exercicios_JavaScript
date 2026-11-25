function calculoMedia(aluno) {
  if (!aluno.notas || aluno.notas.length === 0) {
    throw new Error("Aluno sem notas");
  }

  let soma = 0;
  for (const nota of aluno.notas) {
    soma += nota;
  }
  const media = soma / aluno.notas.length;

  return `${aluno.nome}: média ${media.toFixed(1)}`;
}

try {
  const texto = '{"nome":"Ana","notas":[7,8,6]}'; // string JSON
  const aluno = JSON.parse(texto);                 // vira objeto
  console.log(calculoMedia(aluno));                // Ana: média 7.0
} catch (erro) {
  console.log("Erro:", erro.message);
}