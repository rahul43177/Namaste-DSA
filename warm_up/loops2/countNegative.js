function countNegativeInArray(array) {
    let count = 0;
    for(let i = 0;i<array.length; i+=1) {
        if(array[i] < 0 ){
            count++;
        } 
    }
    return count; 
}


let array = [1,-10,23,-11,-45, 455];
console.log(countNegativeInArray(array));