const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit();


  if (req.url === '/') {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/products') {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>CheckOut Our Product</h1></body>');
    res.write('</html>');
    return res.end();
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body><h1>Bye Bye</h1></body>');
  res.write('</html>');
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running port http://localhost:${PORT}`);
});