for(let i = 0;i<20;i+=1) {
    console.log("Hello Rahul!")
}

//this will not run
for(let i = 5 ; i<4;i+=1) {
    console.log(i);
}

console.log("-----\n")
let arr = [10,21,33,40,50,60];
let size = arr.length; 
for(let i = 0;i<size;i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}

//while loop 
let i = 10; //initialisation 
while(i > 0) { //condition 
    console.log("Rahul Mishra"); 
    i--; //change or decrement or increment 
}
