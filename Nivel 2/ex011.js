function dividir(a, b) {
  if (b === 0) throw new Error("impossível dividir por zero");
  return a / b;
}

try {
  console.log(dividir(4, 0));
} catch (erro) {
  console.log(erro.message);
}