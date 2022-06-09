const arrayEquals = (a, b) =>{
    return Array.isArray(a) && Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export const isPalindrome = (palabra) => {
    if (palabra){
        let arr = palabra.split('');
        let arrInv = [];
        for (let i = (arr.length - 1); i >= 0; i--) {
            arrInv.push(arr[i]);
        }

        console.log(arr);
        console.log(arrInv);

        if (arrayEquals(arr, arrInv)) {
            return true;
        } else {
            return false;
        }
    }
}