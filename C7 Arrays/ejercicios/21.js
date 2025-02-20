function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = array.filter((element) => element === 'Enero' || element === 'Marzo' || element === 'Noviembre');
  return meses.length === 3 ? meses : 'No se encontraron los meses pedidos';

}

module.exports = mesesDelAño;
