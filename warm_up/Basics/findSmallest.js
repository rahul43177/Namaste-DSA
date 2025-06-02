function findSmallest(array) {
    let smallest = Infinity;
    for(let i = 0;i<array.length;i+=1) {
        if(array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest; 
}

let array = [55 , 12 ,13 , 1 , 13 , 13 , 155 ] 
let smallestNumber = findSmallest(array);
console.log("The smallest number is : ", smallestNumber);