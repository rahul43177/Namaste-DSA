/* 

1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5

rows -> 5 
i => j>=i 
console.log i+1 

*/

for(let i = 0;i<5;i++) {
    let rows = "";
    for(let j = 0;j<i+1;j++) {
        rows += j+1; 
    }
    console.log(rows) ;
}

