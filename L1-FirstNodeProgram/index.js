// console.log("Hello Pratham")

const fs = require('fs');
let a = 10;
let b = 5;

let sum = a+b;
let product = a*b;

let data = `Sum: ${sum} \nProduct: ${product}`;
console.log(data);

// write data to local file

fs.writeFile('output.txt', data , (err)=>{
  if(err) throw err;
  console.log('Data written to file');
})

// fs.writeFile('output.txt', "File Written From index.js", (err)=>{
//   if(err) console.log("Error");
//   else console.log('Writte');
// })