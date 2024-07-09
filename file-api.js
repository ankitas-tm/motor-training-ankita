//callback
let fs = require('fs');

fs.writeFileSync('output.txt','This should return a file');
console.log("This should print after previous line");

fs.writeFile('output.txt', 'This should return file asynchronously',(err) => {
    console.log('This is printed after the file is written')
});

console.log("this should print after previous line");

let myLoggerAPI = function(logMessage, callback) {
    fs.writeFile('out.log', logMessage, callback);
}
myLoggerAPI('log this output', () => {
    updateLogMetrics();
});

