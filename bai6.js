
function countTriangles(arr) { //tao ham dem hinh tam giac
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (
            arr[i] + arr[j] > arr[k] &&
            arr[i] + arr[k] > arr[j] &&
            arr[j] + arr[k] > arr[i]
          ) {
            count++;
          }
        }
      }
    }
    return count;
  }
  
  let inputArray = [4, 6, 3, 7];
  let result = countTriangles(inputArray);
  console.log(result);
  