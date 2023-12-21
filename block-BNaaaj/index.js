// Q. Write code to run index.js with content console.log('Welcome to Nodejs') in node environment ?

// Q. In above index.js file

// require os module
// write code to get number of cpu's, free memory, uptime and version from os module
// write code to require only readFile and unlink method from fs module.
// Q. Create 2 files

// area.js
// app.js
// In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
// In app.js, require functions from area.js and execute the areas of given figures and console.log the results.
// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.

// create a fixed length buffer of 12.
// write code to convert buffer back to string.
// Q. Write code example to demonstrate blocking and non-blocking code.

console.log("'Welcome to Nodejs")

let os = require('os')
console.log(os.cpus().length, os.freemem(), os.uptime(),os.version())

let {readFile, unlink} = require('fs')
console.log(readFile,unlink)


let buff1 = Buffer.alloc(12)
let buff2 = Buffer.allocUnsafe(12)
buff1.write("welcom to node js")
buff2.write("welcom to altcampus")

console.log(buff1.toString())

 console.log(buff2.toString())
// console.log(buff1,buff2)

// Q. Write code example to demonstrate blocking and non-blocking code.
console.log('I am 1st')
console.time('task1')
for(let i  = 0 ; i<10000 ; i++){
}
console.timeEnd('task1')
console.log('I am last')



// Non-blocking codes
console.log('I am first console')
console.time('task2')
setTimeout(()=>{
console.log('I am inside setTimeout')
console.timeEnd('task2')
})
console.log('I am last console')