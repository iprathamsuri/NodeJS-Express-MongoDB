const { sumReqHandler } = require('./sum');

const reqHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
                  <head>
                    <title>Practice</title>
                  </head>
                  <body>
                    <h1>Welcome to calculator</h1>
                    <a href="/calculator">Go to calculator</a>
                  </body>
              </html>`)

    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
                  <head>
                    <title>Practice</title>
                  </head>
                  <body>
                    <h1>Here is the Calculator</h1>
                    <form action="/calculate-result" method="POST">
                    <input type="text" placeholder="First Number" name="first"/>
                    <input type="text" placeholder="Second Number" name="second"/>
                    <input type="submit" value="sum">
                    </form>
                  </body>
              </html>`)

    return res.end();

  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
    return sumReqHandler(req, res);
  }



  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
                  <head>
                    <title>Practice</title>
                  </head>
                  <body>
                    <h1>404 page does not exist</h1>
                    <a href="/">Go to home</a>
                  </body>
              </html>`)

  return res.end();
}
exports.reqHandler = reqHandler;  