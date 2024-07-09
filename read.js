const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of Node Js?", (answer) => {
    console.log(`Thank you for valuable:" ${answer}`);
    rl.close();
})