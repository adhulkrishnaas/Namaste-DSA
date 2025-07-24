function returnLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

let arr = [10, 20, 90, 5, 4, 96];
let largest = returnLargest(arr);

console.log(largest);
