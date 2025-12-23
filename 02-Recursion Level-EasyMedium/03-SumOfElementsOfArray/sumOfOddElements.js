function sumOfAllOddElements(arr , index) {
    let isOdd = arr[index] % 2 != 0; 
    if(index == 0) {
       return isOdd ? arr[index] : 0;
    }

    return (isOdd ? arr[index] : 0)  + sumOfAllOddElements(arr , index-1);
}


let arr = [1,2,3,4,5] //=> 1 + 3 +5 -> 9 
let lastIndex = arr.length - 1; 

console.log(sumOfAllOddElements(arr , lastIndex));