/*

1 2 3 4 5
1 2 3 4
1 2 3 
1 2 
1 

rows = i = 5 


*/
let n = 5 ;
for(let i = 0;i<n;i+=1) {
    let rows = "";
    for(let j = 0;j<n-i;j++) {
        rows += j+1; 
    }
    console.log(rows)
} 