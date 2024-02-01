Problem 1: File Reader
Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.
 
Solution : 
const fs=require('fs');
function readFileContent(_filePath) {
 console.log('File Content:');
 fs.readFile(_filePath,'utf-8',(err,result)=>{
        if(err)
        console.log('ENOENT: no such file or directory...',err);
        else
        console.log(result);
 });
}
readFileContent('./demo.txt');
