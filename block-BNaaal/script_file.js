let http = require("http")

// http.createServer((request , response)=>{
//     console.log(request , response)
//     response.end("welcom")
// }).listen(3000, 'localhost')

let createServer = http.createServer(hendleRequest)

function hendleRequest(req , res){
   //hendle request
   res.end("welcom")
}

createServer.listen(4000,()=>{
    console.log("server listening on 4000 port")
})