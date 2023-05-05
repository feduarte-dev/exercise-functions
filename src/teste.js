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
somatorio(3);
