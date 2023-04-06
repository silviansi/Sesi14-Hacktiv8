function reverseString(text) {
    let reversedString = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversedString = reversedString + text[i];
    }
    return reversedString;
}

console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
console.log(reverseString('I am a bookworm'));