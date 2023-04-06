function isArithmeticProgression(arr) {
    let d = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++)
        if (arr[i] - arr[i - 1] != d){
            return false;
        }
        return true;
}
console.log(isArithmeticProgression([1,2,3,4,5]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7,9]));
