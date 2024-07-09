const fs = require('fs');
const readline = require('readline');

const writeToFile = (name) => {
    fs.writeFile("greeeting.txt", `Hello ${name}!`, err => {
        if(err) {
            console.log("error occured when writing to file");
        }
    })
    
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", (name) => {
    writeToFile(name);
    rl.close();
})