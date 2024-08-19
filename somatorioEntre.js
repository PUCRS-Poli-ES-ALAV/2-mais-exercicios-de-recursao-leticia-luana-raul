function somatorioEntre(k, j) {
  if (k === j) {
    return k;
  }
  if (k - j === 0) {
    return 0;
  }
  if (k < j) {
    return k + somatorioEntre(k + 1, j);
  }
  if (k > j) {
    somatorioEntre(j, k);
  }
}

console.log(somatorioEntre(3, 6));
