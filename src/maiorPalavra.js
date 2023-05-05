function maiorPalavra(array) {
  let palavra = '';
  for (index = 0; index <= array.length; index += 1) {
    if (array[index].length > array[index + 1].length) {
      palavra = array[index];
    }
  }
  return palavra;
}
maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(palavra);
