function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  const count = numero - 1;
  if (numero < 2) return false;
  while(count > 1) {
    if(numero % count === 0) {
      return false;
    };
    count--;
  }
  return true;

}

module.exports = esNumeroPrimo;
