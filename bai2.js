function printOddNumbersWithOddSum(n) { //goi ham in so le voi tong le
    let count = Math.floor(n / 2) + 1;
    let sum = count * count;
    let result = [];
    for (let i = 1; i <= count; i++) { //dem
      result.push(2 * i - 1); //Nối các phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
    }
    if (sum % 2 === 0) {
      result.pop(); //Loại bỏ phần tử cuối cùng khỏi một mảng và trả về nó. Nếu mảng trống, kết quả không xác định được trả về và mảng không được sửa đổi.
    }
    console.log(result);
  }
  
  let n = prompt("Nhập vào số nguyên dương n: ");
  printOddNumbersWithOddSum(parseInt(n));
  
  
  