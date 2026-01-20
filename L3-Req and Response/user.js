const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');

    res.write('<h1>Enter Your Details:</h1>');

    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br><br>');

    res.write('<label>');
    res.write('<input type="radio" name="gender" value="male"> Male');
    res.write('</label><br>');

    res.write('<label>');
    res.write('<input type="radio" name="gender" value="female"> Female');
    res.write('</label><br><br>');

    res.write('<input type="submit" value="Submit">');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');

    return res.end();
  }

  // if (req.url === '/submit-details' && req.method === 'POST') {
  //   res.setHeader('Content-Type', 'text/html');
  //   res.write('<h1>Form Submitted Successfully</h1>');
  //   return res.end();
  // }

  // res.statusCode = 404;
  // res.end('<h1>Page Not Found</h1>');


  if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
    fs.writeFileSync('user-details.txt', 'Pratham');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }


  res.setHeader('Content-Type', 'text/HTML');
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Submit Successfull</h1></body>');
  res.write('</html>')

});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
