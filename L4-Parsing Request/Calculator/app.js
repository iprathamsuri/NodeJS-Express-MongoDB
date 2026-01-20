const http = require('http');
const {reqHandler} = require('./handler')

const server = http.createServer(reqHandler);




const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
