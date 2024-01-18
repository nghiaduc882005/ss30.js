function capitalizeLastLetterOfWords(inputString) { //Khai bao ham VietHoaChuCaiCuoiCungCuaTu
    let words = inputString.split(' '); //Tach ra cac chuoi 
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase(); //tach cac chu 
    }
    return words.join(' ');
  }
  
  let userInput = prompt("Nhập vào chuỗi bất kỳ:");
  let result = capitalizeLastLetterOfWords(userInput);
  console.log(result); //ket qua 
  