function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
    const index = array.findIndex((element, index) => element === num) 
    return index;

}

module.exports = encontrarElemento;
