function verificaFimPalavra(palavra1, palavra2) {
  if (palavra1.endsWith(palavra2)) {
    return true;
  } else {
    return false;
  }
}

verificaFimPalavra('trybe', 'be');
