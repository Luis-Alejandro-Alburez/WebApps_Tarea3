// Primera función de la parte 2 de la tarea
function rotarMatriz(matrix) {
  const rows = matrix.length; // Número de filas
  const cols = matrix[0].length; // Número de columnas

  // Inicializamos una nueva matriz con la misma cantidad de columnas y filas
  const rotatedMatrix = [];

  // Recorremos las filas de la matriz original desde el final hacia el inicio
  for (let i = 0; i < cols; i++) {
    const newRow = [];
    // Recorremos las filas originales en orden, pero invertimos la dirección
    for (let j = rows - 1; j >= 0; j--) {
      newRow.push(matrix[j][i]);
    }
    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
}

// Ejemplo de uso
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Ejemplo de uso 2
/* const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; */

const rotated = rotarMatriz(matrix);
console.log(rotated);

// Segunda función de la parte 2 de la tarea
function multiply(matrizA, matrizB) {
  // Verificamos si las matrices son compatibles para la multiplicación
  const filasA = matrizA.length;
  const columnasA = matrizA[0].length;
  const filasB = matrizB.length;
  const columnasB = matrizB[0].length;

  // Si la cantidad de columnas de matrizA no es igual a la cantidad de filas de matrizB, no son compatibles
  if (columnasA !== filasB) {
    console.log("Las matrices no son compatibles para la multiplicación.");
    return [];
  }

  // Creamos la matriz de resultado con la cantidad de filas de matrizA y columnas de matrizB
  let resultado = [];
  for (let i = 0; i < filasA; i++) {
    resultado[i] = [];
    for (let j = 0; j < columnasB; j++) {
      let suma = 0;
      for (let k = 0; k < columnasA; k++) {
        suma += matrizA[i][k] * matrizB[k][j];
      }
      resultado[i][j] = suma;
    }
  }

  return resultado;
}

// Ejemplo de matrices
const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrizB = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const resultado = multiply(matrizA, matrizB);
console.log(resultado);
