const fileSystem = require("fs")

const startTime = Date.now() //ms 
fileSystem.readFile('/Users/rahulmishra/Desktop/learning/Namaste-DSA/sampleTestFile.txt' , 'utf-8' , (err , FileData) => {
    if(err) {
        console.log("The error is :",err); 
    } 
    else {
        console.log(`The file reading is completed in - ${Date.now() - startTime} ms`)
        console.log(`The data is : ${FileData}`)
    }
})

