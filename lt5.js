function threeStepsAB (text) {
    //Menggunakan RegEx
    if (/a.{3}b/.test(text) || /b.{3}a/.test(text)) {
        return true;
    }
    return false;
}

console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are booring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));