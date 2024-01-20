let http = require("http")

let server = http.createServer(handleRequest)

function handleRequest (req, res){
 console.log(req.method)
  res.writeHead(201, {'Content-Type': 'text/html'})
  res.end('<h1>welcome</h1>')
}


server.listen(4444, ()=>{
    console.log('server is responding on port 4444')
})