function separateCharacters(string) { //Goi ham ky tu dac biet 
    let alphabets = [];  // ki tu chu tu a-->z
    let numbers = []; // ki tu so 0-->9
    let specialCharacters = []; //ki tu dac biet  
 
    for (let i = 0; i < string.length; i++) {
        let character = string[i]; // goi ki tu co trong chuoi
        if (character.match(/[a-zA-Z]/)) { //ki tu chu o dau 
            alphabets.push(character); //Nối các phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
        } else if (character.match(/[0-9]/)) { // ki tu so o giua
            numbers.push(character); //Nối các phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
        } else {
            specialCharacters.push(character); //ki tu dac biet o cuoi cung, //Nối các phần tử mới vào cuối mảng và trả về độ dài mới của mảng.
        }
    }
 
    return alphabets.concat(numbers, specialCharacters); //Array.concat(..): Kết hợp hai hoặc nhiều mảng. Phương thức này trả về một mảng mới mà không sửa đổi bất kỳ mảng hiện có nào.
 }
 
 let inputString = prompt("Nhập chuỗi: ");
 
 let separatedCharacters = separateCharacters(inputString);
 
 console.log("Kết quả: ", separatedCharacters);


