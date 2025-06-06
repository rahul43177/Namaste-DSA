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
        row += "*"; 
    }
    console.log(row); 
}