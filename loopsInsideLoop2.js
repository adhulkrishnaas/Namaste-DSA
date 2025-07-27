for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

console.log("---------------------------------------------------------------");

for (i = 0; i < 5; i++) {
  for (j = 0; j < i; j++) {
    console.log(i + " " + j);
  }
}

console.log("----------------------------------------------------------");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i + " " + j);
  }
}
