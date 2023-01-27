// la siguiente funcion tiene dos condiciones a y b, y me devuelve que si ambas son arrays recorra a y sea igualla a recorres
//b y si los valores de a son iguales a b en la misma posicion
const arrayEquals = (a, b) =>{
    return Array.isArray(a) && Array.isArray(b) &&
        a.length === b.length && // === regresa true
        a.every((val, index) => val === b[index]);
}
// en esta funcion se condiciaona la variable palabra y se indicar que si palaba entonces la variable arr la palabra la convierta
// en un array y el array arrInv vacio , se recorre con for de atras hacia adelante y con push se van agregando los alementos
export const isPalindrome = (palabra) => {
    if (palabra){
        let arr = palabra.split('');
        let arrInv = [];
        for (let i = (arr.length - 1); i >= 0; i--) {
            arrInv.push(arr[i]);
        }

        console.log(arr);
        console.log(arrInv);
// se dan valores a la funcion array Equals retornando si es verdadero o falso
        if (arrayEquals(arr, arrInv)) {
            return true;
        } else {
            return false;
        }
    }
}