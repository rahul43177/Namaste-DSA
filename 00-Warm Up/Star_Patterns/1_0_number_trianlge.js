/*

1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0



*/
//Approach 1 : according to the j index -> we will make 
let n = 6;
for(let i = 0;i<n;i+=1) {
    let rows = "";
    for(let j = 0;j<=i;j+=1) {
        if(j%2==0) {
            rows += " 1 "
        } else {
            rows += " 0 "
        }
    } 
      console.log(rows)
}

//Approach 2 : updating a switch
for(let i = 0;i<n;i++) {
    let rows = "" 
    let toggle = 1;

    for(let j = 0;j<=i;j++) {
        rows = rows + ` ${toggle} `; 
        if(toggle == 1) toggle = 0;
        else toggle = 1;
    }
    console.log(rows); 
}
