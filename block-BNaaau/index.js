let http = require('http');
let url = require('url');
let fs = require('fs');

// question -1

// let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req);
//   console.log(res);
// }
// server.listen(5000, () => {
//   console.log('server is listing on port 5000');
// });

// // question-2

// let nodeServer = http.createServer(handleNodeRequst);

// function handleNodeRequst(req, res) {
//   res.end('My first server in NodeJS');
// }
// nodeServer.listen(5100, () => {
//   console.log('nodeServer is listing on port 5100');
// });

// // question-3

// let nodeServer_1 = http.createServer(handleNodeRequstOne)

// function handleNodeRequstOne(req, res){
//  console.log(req.headers)
//  res.end(req.headers['user-agent'])
// }

// nodeServer_1.listen(5555, ()=>{
//     console.log('nodeServerOne is listing on port 5555');

// })

// // question-4

// let nodeServer_2 = http.createServer(handleNodeRequstToo);

// function handleNodeRequstToo(req, res) {
//   console.log(req.method, req.url);
//   res.end(`${req.url}  ${req.method}`);
// }

// nodeServer_2.listen(5566, () => {
//   console.log('nodeServerToo is listing on port 5566');
// });

// // question-5

// let nodeServer_3 = http.createServer(handleNodeRequstThree);

// function handleNodeRequstThree(req, res) {
//   console.log(req.headers)
//   res.end(JSON.stringify(req.headers));
// }

// nodeServer_3.listen(7000, () => {
//   console.log('nodeServerThree is listening on port 7000');
// });

// // question-6

// let nodeServer_4 = http.createServer(handleNodeRequstFour);

// function handleNodeRequstFour(req, res) {
//   res.statusCode=202
//   res.end("this is a node js")
// }

// nodeServer_4.listen(3333, () => {
//   console.log('nodeServerFour is listening on port 3333');
// });

// // question-7

// let nodeServer_5 = http.createServer(handleNodeRequstFive);

// function handleNodeRequstFive(req, res) {

//   res.setHeader('Content-Type', 'text/html')
//   res.end(`<h3>Welcome to altcampus</h3>`)
// }

// nodeServer_5.listen(8000, () => {
//   console.log('nodeServerFive is listening on port 8000');
// });

// // question-8

// let nodeServer_6 = http.createServer(handleNodeRequstSix);

// function handleNodeRequstSix(req, res) {

//   res.writeHead(203, {'Content-Type': 'text/html'})
//   res.end(`<h3>Welcome to altcampus</h3>`)
// }

// nodeServer_6.listen(8000, () => {
//   console.log('nodeServerSix is listening on port 8000');
// });

// // question-9
// let nodeServer_7 = http.createServer(handleNodeRequstSeven);

// function handleNodeRequstSeven(req, res) {

//   res.writeHead(200, {'Content-Type': 'application/json'})
//   res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
// }

// nodeServer_7.listen(8888, () => {
//   console.log('nodeServerSeven is listening on port 8888');
// });

// // question-10
// let nodeServer_8 = http.createServer(handleNodeRequstEight);

// function handleNodeRequstEight(req, res) {
//   console.log(req.method)
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.end(`<h2>posted for first time</h2>`)
// }

// nodeServer_8.listen(5050, () => {
//   console.log('nodeServerEight is listening on port 5050');
// });

// question-11
// let nodeServer_9 = http.createServer(handleNodeRequstNine);

// function handleNodeRequstNine(req, res) {
//    if(req.method==="GET"&& req.url==='/'){
//     res.writeHead(200, {'Content-Type': 'text/Plain'})
//     res.end('Himanshu Rajpoot')
//    }else if(req.method==='GET' && req.url==='/about'){
//     res.writeHead(202, {'Content-Type': 'text/html'})
//     res.end(`<h2>HIMANSHU RAJPOOT </h2>`)
//    }else{
//     res.writeHead(404, {'Content-Type': 'text/html'})
//     res.end("Page not found 404")
//    }
// }

// nodeServer_9.listen(2345, () => {
//   console.log('nodeServerNine is listening on port 2345');
// });

// question-12

// let server_10 = http.createServer(handleTooRequst);

// function handleTooRequst(req, res) {
//   if (req.method === 'GET' && req.url === '/users') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.createReadStream('./index.html').pipe(res);
//   }

//   if (req.method === 'POST' && req.url === '/users') {
//     res.end('Posted for the second time');
//   }
// }
// server_10.listen(2345, () => {
//   console.log('server_10 is listening on port 2345');
// });

// question-13

let server_11 = http.createServer(handleRequstQuery);

function handleRequstQuery(req, res) {
   let parseUrl = url.parse(req.url, true)
  //  console.log(parseUrl)
   let pathName = parseUrl.pathname
   console.log(pathName)
   console.log(req.url)
   let query=parseUrl.query
   res.setHeader('Content-Type', 'application/json')
   res.end( JSON.stringify(query))
}
server_11.listen(2345, () => {
  console.log('server_11 is listening on port 2345');
});
