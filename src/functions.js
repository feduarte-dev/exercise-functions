// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(palavra) {
  const array = palavra.split('');
  const reverse = array.reverse();
  const joined = reverse.join('');
  if (palavra === joined) {
    return true;
  }
  if (palavra !== joined) {
    return false;
  }
}
// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(array) {
  let maiorNumero = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      maiorNumero = index;
    }
  }
  return maiorNumero;
}
// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(array) {
  let menorNumero = 0;
  for (index = 0; index <= array.length; index += 1) {
    if (array[index + 1] < array[index]) {
      menorNumero = index + 1;
    }
  }
  return menorNumero;
}
// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(array) {
  let palavra = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > array[palavra].length) {
      palavra = index;
    }
  }
  return array[palavra];
}
// Requisito 5 - Crie a função maisRepetido
function maisRepetido(array) {
  let repetido = array[0];

  for (index = 0; index < array.length; index += 1) {
    repetido = 0;
    for (index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] === array[index]) {
        repetido += 1;
      }
    }
  }
  console.log(repetido);
  return repetido;
}
function repeticoes(repetido) {
  let repeticoes = 0;
  if (repetido > repeticoes) {
    repeticoes = repetido;
    repetido = array[index];
  }
}

// Requisito 6 - Crie a função somatorio
function somatorio(n) {
  let sum = 0;
  if (n < 0) {
    return 'ERRO';
  }
  if (n > 0) {
    for (let index = 0; index <= n; index += 1) {
      sum += index;
    }
    return sum;
  }
}
// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  if (palavra1.endsWith(palavra2)) {
    return true;
  }
  if (!palavra1.endsWith(palavra2)) {
    return false;
  }
}
// Não modifique essas linhas
module.exports = {
  verificaPalindromo:
    typeof verificaPalindromo === 'function' ? verificaPalindromo : () => {},
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : () => {},
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : () => {},
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : () => {},
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : () => {},
  somatorio: typeof somatorio === 'function' ? somatorio : () => {},
  verificaFimPalavra:
    typeof verificaFimPalavra === 'function' ? verificaFimPalavra : () => {},
};
