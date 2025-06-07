/*

1 
0  1 
0  1  0
1  0  1  0
1  0  1  0  1
0  1  0  1  0  1

here toggle or switch is being handled outside the loop

*/

let n = 6;
let toggle = 1;
for(let i = 0;i<n;i++) {
    let rows = ""
    for(let j = 0;j<i+1;j++) {
        rows += ` ${toggle} `;
        if(toggle == 1) {
            toggle = 0; 
        } else toggle = 1; 
    }
    console.log(rows); 
}