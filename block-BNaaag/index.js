// let path = require('path');
// let os = require('os');

// let fs = require('fs')

// let filePath = path.join(__dirname, 'index.js')
// let freeM = os.freemem()
// let cpus = os.cpus().length

// fs.readFile('./index.md',(err,content)=>{
//    console.log(err, content)
// })

// console.log(filePath,freeM,cpus)




// fs.readFile("./content.md",(err,content)=>{
//     console.log(err, content)
// })


// console.log('execute me first')


// console.time('tesk1')
// setTimeout(()=>{
//     console.log("timeout executed")
//     console.timeEnd('text1')
// },1000)

// console.time('text2')
// fs.readFile('./content.md', 'utf8',(err,content)=>{
//     console.log(content);
//     console.timeEnd('text2')
// })
// console.log('execute me last')




let {readFile ,readFileSync}= require('fs')

readFile('./content.md', 'utf8',(err,content)=>{
    console.log(content)
})


let result = readFileSync('./content.md', 'utf8')
console.log(result,"hello sinc")


let result2 = readFileSync('./content.md', 'utf8')
console.log(result2,"hello sinc2")

let buff1 = Buffer.alloc(10)
buff1.write("welcome to buffor")
console.log( buff1.write("welcome to Buffer"))
 console.log(buff1.toString())
console.log(buff1)