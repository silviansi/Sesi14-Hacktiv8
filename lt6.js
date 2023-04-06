function gcd(firstNumber, secondNumber) {
    if (firstNumber == 0)
        return secondNumber;

    //Looping sampai kedua angka tidak sama
    while (secondNumber != 0) {
        if (firstNumber > secondNumber)
            firstNumber -= secondNumber;
        else
            secondNumber -= firstNumber;
    }

    return firstNumber;
}

//versi simple
// function gcd(a, b) {
//     if (b == 0) {
//         return a;
//     }
//     return gcd(b, a % b);
// }

console.log(gcd(12,16));
console.log(gcd(50,40));
console.log(gcd(22,99));
console.log(gcd(24,36));
console.log(gcd(17,23));