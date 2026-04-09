const calculaDesconto = (valorInicial: number, desconto: number): number => {
  return valorInicial * (1 - desconto / 100);
};

const valorProduto: number = 1000;
const desconto: number = 5;

console.log(`Valor original: ${valorProduto}`);
console.log(`Valor do desconto: ${desconto}%`);
console.log(`Valor final: ${calculaDesconto(valorProduto, desconto)}`);
