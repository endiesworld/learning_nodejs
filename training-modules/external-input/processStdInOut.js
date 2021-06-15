

function myProcess() {
    process.stdin.resume();
process.stdin.setEncoding('utf-8');
    let inputString = '';
    process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
    console.log(`data entered is ${inputStdin}`) ;

    //console.log(`cummulative data entered is ${inputString}`)
});

// This doesnt trigger because windows lacks the ability to end a node process with ^D(ctrl+Z), hence we use readline module.
    process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    console.log('Stream is closed for reading')
});

console.log('other sync code running') ;
}

module.exports = {myProcess}