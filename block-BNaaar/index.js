let http = require('http')
const { parse } = require('path')
let url = require("url")

let server = http.createServer(handleRequest)

function handleRequest(req, res){
    let parseUrl =url.parse(req.url);
    let pathName = parseUrl.pathname;
     console.log(req.method, req.url)
     if(req.method==="GET" && req.url==="/"){
        res.setHeader("Content-Type", "text/plain")
        res.end("Welcome to homepage")
     }else if(req.method==="GET" && pathName==="/about"){
        res.setHeader("Content-Type", "text/html")
        res.end("<h2>this is all about NodeJS</h2>")
     }else if(req.method==="POST" && pathName==="/about"){
        res.setHeader("Content-Type", "application/json")
        res.end( "{message: this is a post request}")
     }else{
        req.write(404, {"Content-Type": "text/html"})
        res.end("<h2>Page Not Found</h2>")
     }

}


server.listen(3000, ()=>{
    console.log("server listening on port 3000")
})