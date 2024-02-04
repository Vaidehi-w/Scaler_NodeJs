/*Problem 4: Resolve Path Problem Statement: Create a function resolvePath(relativePath) that takes a relative 
path as input and resolves it to an absolute path using the path module. The function should print the resolved 
path to the console.
*/

const path=require('path');

function resolvePath(rPath){
    //implementation
  const p=path.resolve(rPath);
  console.log(p);
}
//existed file
resolvePath('./test.txt');
console.log('\n');
//non-existed file path
resolvePath('./t.txt');