'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length < 1) {
    return [];
  }
  let pivote = array[0];
  let izq = [];
  let der = [];
  
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivote) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }
  return [].concat(quickSort(izq), pivote, quickSort(der));


}
// [5, 1, 4, 2, 8]
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //dividir el array
  //condicion de corte --> un solo elemento
  if(array.length < 1) {
    return [];
  }
  let pivote = array[0];
  let izq = [];
  let der = [];
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivote) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }
  return [].concat(mergeSort(izq), pivote, mergeSort(der));
  

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
