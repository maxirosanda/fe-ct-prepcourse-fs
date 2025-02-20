function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  return resultadosTest.reduce((acc, curr) => acc + curr) / resultadosTest.length;
}

module.exports = promedioResultadosTest;
