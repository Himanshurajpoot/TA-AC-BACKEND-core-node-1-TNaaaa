let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url);

  if (req.url === '/') {
    fs.readFile('../../index.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }

  if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('../stylesheets/' + req.url, (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }

  if (req.url === '/about') {
    fs.readFile('../../about.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }

  if (req.url.split('.').pop() === 'jpg') {
    res.setHeader('Content-Type', 'image/jpg');
    fs.readFile('../images/' + req.url, (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }
}

server.listen(4000, () => {
  console.log('server is listening on port 4000');
});
