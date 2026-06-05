
//! Version 1
// function isPalindrome(x: number): void | boolean {
//     let numString = x.toString();
//     for(let i = 0; i < numString.length; i++){
//         for(let j = numString.length - 1; j >= 0; j--){
//             console.log(numString[i], numString[j]);
//             if(numString[i] != numString[j]){
//                 return false
//             }
//         }
//     }
//     return true;
// };

//* Version 2
function isPalindrome(x: number): void | boolean {
    let numString = x.toString();
    for(let i = 0; i < numString.length / 2; i++){
        if(numString[i] != numString[numString.length - 1 - i]){
            return false
        }
    }
    return true;
}


//* Version 3
// function isPalindrome(x: number): void | boolean {
//     let numString = x.toString();
//     let reversedString = numString.split('').reverse().join(''); //Se hace asi para revertir primero convirtiendo en array el string, luego se revierte el array y finalmente se vuelve a convertir en string
//     return numString === reversedString;
// }

console.log(isPalindrome(121));
// isPalindrome(121);