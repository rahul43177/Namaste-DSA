/*

        *
      * *
    * * *
  * * * *
* * * * *


*/
let n = 5;
for(let i = 0;i<n;i++) {
    let rows = "";
    //first loop to add the spaces 
    for(let j = 0;j<n-(i+1);j++) {
        rows += " " ;
    }
    //second loop to add the stars 
    for(let k = 0;k<=i;k++) {
        rows += "*";
    }
    console.log(rows)
}