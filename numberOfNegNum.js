function noOfNegNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [1, 2, 3, -9, -5, -20, 7, 4];

let count = noOfNegNumber(arr);
console.log(count);
