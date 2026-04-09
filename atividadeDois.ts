const calculaHipotenusa = (catetoA: number, catetoB: number): number => {
  return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
};

console.log(`A hipotenusa é igual a: ${calculaHipotenusa(15, 8)}`);
