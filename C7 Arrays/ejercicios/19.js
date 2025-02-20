function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (Array.from(arguments) < 1) return 0;
  return Array.from(arguments).reduce((acc, curr) => acc * curr);
}

module.exports = multiplicarArgumentos;
 
console.log(multiplicarArgumentos(1, 2, 3, 4, 5)); // 120