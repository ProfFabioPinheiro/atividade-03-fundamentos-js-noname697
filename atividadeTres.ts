const saudacao = (nome: string, hora: number): string => {
  if (hora < 24 && hora >= 0) {
    if (hora < 12 && hora > 4) {
      return `Bom dia ${nome}`;
    } else if (hora < 18 && hora >= 12) {
      return `Boa tarde ${nome}`;
    } else {
      return `Boa noite ${nome}`;
    }
  } else {
    return "Hora inválida";
  }
};


console.log(saudacao("Arthur", 4))
