let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}

/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
/*
1
12
123
1234
*/
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

/*
1 
22
333
4444
*/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}

/*
1234
123
12
1
*/

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

/*
....*
...**
..***
.****
*****
*/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n - i; j++) {
    row += ".";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  console.log(row);
}

/*
1
10
101
1010
10101

*/
for (let i = 1; i <= n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 1; j <= i; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else if (toggle == 0) {
      toggle = 1;
    }
  }
  console.log(row);
}

/*
1
01
010
1010
10101
*/
let toggle = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else if (toggle == 0) {
      toggle = 1;
    }
  }
  console.log(row);
}
