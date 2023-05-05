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

// Requisito 4 - Crie a função maiorPalavra

// Requisito 5 - Crie a função maisRepetido

// Requisito 6 - Crie a função somatorio

// Requisito 7 - Crie a função verificaFimPalavra

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
