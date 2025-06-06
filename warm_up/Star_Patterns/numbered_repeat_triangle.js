/*

1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
 
 */

//rows = i = 5
for(let i = 0;i<5;i+=1) {
    let rows = "";
    for(let j = 0;j<=i;j+=1) {
        rows += i+1;
    }
    console.log(rows);
}