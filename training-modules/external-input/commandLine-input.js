const readline = require('readline');

function seconOperation(lineReader) {
    
    lineReader.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    
})

}

const lineReader = () => {
    
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    seconOperation(rl) ;

    rl.on('line', (line) => {
    console.log(`Received: ${line}`);
     rl.close();
    });
}

module.exports = lineReader ;