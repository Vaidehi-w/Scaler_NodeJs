/*Problem 3: Execute Command
Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.
*/
const cp = require('child_process')

function executeCommand(command) {
    // Implementation
    const r = cp.execSync(command);
     console.log(r.toString());
}
//executeCommand('dir');
executeCommand('echo "Hello, Node.js!"');