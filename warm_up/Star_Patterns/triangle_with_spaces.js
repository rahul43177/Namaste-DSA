/*

        *
      * *
    * * *
  * * * *
* * * * *


*/
let n = 5;

for(let i =0;i<n;i+=1) {
  let rows = "";
  for(let j = 0;j<n-i-1;j++) {
    rows += "  "; 
  }
  for(let k = 0;k<=i;k++) {
    rows += "* ";
  }
  console.log(rows)
}