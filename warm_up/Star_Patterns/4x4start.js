/*
n = 4 
* * * * 
* * * * 
* * * * 
* * * * 
*/

let n = 4;
for(let i = 0;i<n;i+=1) {
    let row = ""
    for(let j = 0;j<n;j+=1) {
        row += "* "; 
    }
    console.log(row); 
}

console.log("\n")

/*

3 x 4 
* * *  
* * * 
* * * 
* * * 

i -> rows -> 4 
j -> columns  -> 3 

*/

for(let i = 0;i<4;i++) {
    let rows = "" ;
    for(let j = 0;j<3;j++) {
        rows += "* ";
    }
    console.log(rows);
}

