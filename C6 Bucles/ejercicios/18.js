function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  for (let i = a + 1; i < b; i++) {
    a *= i;
  }
  return a;
}

module.exports = productoEntreNúmeros;