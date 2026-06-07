/*
El Reto: Imagina que recibes una matriz bidimensional que representa una grilla de datos de un inventario
o una imagen de un producto. Tu objetivo es rotar esa matriz 90 grados en el sentido de las agujas del reloj, 
modificando la matriz original directamente (in-place), es decir, sin crear una matriz nueva para ahorrar memoria
*/


/*
 Do not return anything, modify matrix in-place instead.
//* Ejemplo de entrada:
 const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//*Salida esperada:

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
 */



function rotate(matrix: number[][]): void {
    const n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n ; j++){
            let temp = matrix[i][j]; //valor original guardado en una variable temporal
            matrix[i][j] = matrix[j][i]; //intercambiamos
            matrix[j][i] = temp; 
        }
    }

    /*
        En este punto tenemos el arreglo:

        [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
        ]
    */

    //Invertimos cada arreglo ya mutado
    for(let i = 0; i < n ; i++){
        matrix[i].reverse();
    }

};