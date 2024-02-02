/*Problem 2: File Writer
Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input 
content as input. The function should write the content to the specified file using the fs module.*/

const fs = require('fs');

function writeToFile(_filePath, content) {
    if(fs.existsSync(_filePath)){
    fs.writeFile(_filePath, content, 'utf-8' , (err)=> {
            console.log("Data written to test.txt");
    });
}
else 
console.log("Error writing to file: ENOENT: no such file or directory...",_filePath);
}
const fp='./test.txt';
writeToFile(fp, "This is the sample content");
