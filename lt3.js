//Menggunakan build in function
function urutHuruf(text) {
    return text.split('').sort().join('');
}

console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));

//Tanpa build in function
function urutAbjad(text) {
    let string = text.split("");
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] > string[i]) {
                temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }
    return string.join("");
}

console.log(urutAbjad("halo"));
console.log(urutAbjad("qwerty"));
console.log(urutAbjad("qwertyuiopasdfghjklzxcvbnm"));