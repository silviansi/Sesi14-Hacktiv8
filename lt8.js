function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if (number % i == 0)
        return false;
    }
    return true;
}
function listPrima(angkaPertama, angkaKedua) {
    let num = [];

    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if(isPrime(i)) {
            num.push(i);
        }
    }
    return num;
}

console.log(listPrima(2, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));