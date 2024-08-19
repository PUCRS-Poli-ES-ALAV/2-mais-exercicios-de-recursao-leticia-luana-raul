function isSubstring(str, sub) {
  // sub string é vazia, logo ocorre em todas
  if (sub.length === 0) {
    return true;
  }

  // String vazia e sub nao, logo, false
  if (str.length === 0 || str.length < sub.length) {
    return false;
  }

  // Verifica do indice 0 até o tamanho da sub string
  if (str.slice(0, sub.length) === sub) {
    return true;
  }

  // Remove o primeiro caractere de 'str' e tenta novamente
  return isSubstring(str.slice(1), sub);
}

console.log(isSubstring("hello world", "world"));
console.log(isSubstring("hello world", "planet"));
console.log(isSubstring("banana", "na"));
console.log(isSubstring("banana", "peira"));
