const fs = require('fs');
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method)
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


  if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for(const[key, val] of params.entries()){
      //   bodyObject[key] = val;
      // }

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync('user-details.txt', JSON.stringify(bodyObject));

    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }


  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Submit Successfull</h1></body>');
  res.write('</html>')
  res.end('<h1>Page Not Found</h1>');
};


module.exports = userRequestHandler;