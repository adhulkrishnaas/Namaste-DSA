function isElementPresent(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 9, 8, 7, 4, 5, 2, 1, 5, 2, 51];
let key = 2;

let result = isElementPresent(arr, key);
console.log(result);
