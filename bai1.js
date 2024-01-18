function isArraySymmetric(arr) { //mảng đối xứng 
    for (let i = 0; i < arr.length / 2; i++){ //độ dài mảng 
        if (arr[i] !== arr(arr.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

//Tách các mảng đối xứng
let array1 = [1, 2, 3, 2, 1];
let array2 = ["z", "z"];
let array3 = [1, "c", "c", 1];

console.log(isArraySymmetric(array1)); 
console.log(isArraySymmetric(array2)); 
console.log(isArraySymmetric(array3)); 