function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  for (let i = 1; i < n; i++) {
    n += i;
  }
  return n;
}

module.exports = sumarHastaN;
