function moveZeroes(arr) {
    let x = 0;
    for(let i = 0;i<arr.length;i+=1) {
        if(arr[i] != 0) {
            arr[x] = arr[i] ; 
            x+=1 ;
        }
    }

    for(let i = x;i<arr.length;i+=1) {
        arr[i] = 0;
    }
    return arr; 
}