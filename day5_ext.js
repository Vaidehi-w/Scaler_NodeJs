/*Problem 5: File Extension Checker
Problem Statement: Create a function checkFileExtension(filePath, expectedExtension) that takes a file path 
and an expected file extension as input. The function should check if the file has the expected extension using the path module 
and print the result to the console.*/

const { checkPrime } = require('crypto');
const path=require('path');

function checkFileExtension(_filePath, expectedExtension) {
    // Implementation
    const v = path.extname(_filePath);
    if(v==expectedExtension)
    console.log("File has the expected extension:",expectedExtension);
    else 
    console.log("File does not have the expected extension. Expected:",expectedExtension," Actual: ",v);
}

checkFileExtension('C:\Users\dieta\OneDrive\Documents\Nodejs\empty.txt','.txt');
checkFileExtension('C:\Users\dieta\OneDrive\Documents\Nodejs\test.txt','.js');