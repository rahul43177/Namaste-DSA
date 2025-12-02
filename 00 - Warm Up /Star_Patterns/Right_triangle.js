/* 

n = 4
*
* *
* * *
* * * * 

Here we have 4 rows
1st row -> *
2nd row -> * *
3rd row -> * * *
4th row -> * * * *

hence i = 4 (simple)
but columns are dynamic 
for(i=0;i<4;i++) 

first iteration -> i = 0 , we want one star -> j < i+1; (j < 1)
second iteration -> i = 1 , we want two stars -> j < i+1; (j < 2)
third iteration -> i = 2 , we want three stars -> j < i+1; (j < 3)
fourth iteration -> i = 3 , we want four stars -> j < i+1; (j < 4)

*/

for(let i = 0;i<4;i+=1) {
    let row = "";
    for(let j = 0;j<i+1;j++) {  // for(let j = 0;j<=i;i+=1 ) this is also same -> < i+1 or <= i , they both are same. 
        row += "* ";
    }
    console.log(row) ; 
}