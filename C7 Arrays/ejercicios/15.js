function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  return array.findIndex((element) => element === Math.max(...array));
}

module.exports = encontrarIndiceMayor;
