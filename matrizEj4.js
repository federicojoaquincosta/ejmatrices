/**
 * Muestra una matriz correctamente
 * @param {Array} matriz a mostrar
 */
 function verMatriz(matriz){
    let matrizString = ``;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
           matrizString += `\t[${matriz[i][j]}]`
        }
        matrizString += "\n\n";
    }
    console.log(matrizString);
}

const taTeTi1 = [
    [" ","O","X"],
    ["O","X","O"],
    ["X","X","O"]
]

const taTeTi2 = [
    [" ","X","O"],
    ["X","O","X"],
    ["O","O","X"]
]

const taTeTi3 = [
    ["X","X","O"],
    ["X","X","O"],
    ["O","O","X"]
]

const taTeTi4 = [
    ["X","O","O"],
    ["X","X","O"],
    ["O","X","O"]
]

verMatriz(taTeTi1);
verMatriz(taTeTi2);

/*
Desarrollar un algoritmo para evaluar
el estado del juego actual (SOLO cuando se gana con linea diagonal)
El programa debe mencionar quien gano
Tiene que funcionar con ambas matrices
 */

function chequearResultado(matriztateti){
if (matriztateti[0][0] === matriztateti[1][1] && matriztateti[0][0] === matriztateti[2][2] || matriztateti[0][2] === matriztateti[1][1] && matriztateti[0][2] === matriztateti[2][0]){
    console.log("el jugador que escribe con " + matriztateti[1][1] + " ganó")
} else {
    console.log("no hay ganador")
};
}

chequearResultado(taTeTi1);

chequearResultado(taTeTi2);

chequearResultado(taTeTi3);

chequearResultado(taTeTi4);