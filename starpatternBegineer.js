let n = 4;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log("*");
  }
}

console.log("------------------------");

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("*");
  }
}
