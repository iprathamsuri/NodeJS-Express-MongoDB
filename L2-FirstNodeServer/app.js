const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener);

const server = http.createServer((req,res)=>{
  console.log(req);
  
}); 

const PORT= 3001;
server.listen(PORT,()=>{
  console.log(`Server running port http://localhost:${PORT}`);
});