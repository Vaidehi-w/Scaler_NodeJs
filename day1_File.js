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
