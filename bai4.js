//Xây dựng hàm kiểm tra số nguyên tố trong mảng
//Số nguyên tố là số tự nhiên lớn hơn 1 không phải là tích của hai số tự nhiên nhỏ hơn: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) { //Math.sqrt: Returns the square root of a number.
        if (n % i === 0) return false;
    }
    return n > 1;
}

let input = prompt("Nhập vào các số nguyên cách nhau bằng dấu phẩy: ");
let array = input.split(",").map(Number); //tach cac so : spilt
let primeNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
        primeNumbers.push(array[i]); //Nối các phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
    }
}

console.log("Các số nguyên tố trong mảng là: " + primeNumbers.join(", "));

