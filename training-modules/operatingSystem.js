const os = require('os') ;

function operation() {
    console.log(os.hostname()) ;
    console.log(os.homedir()) 
    console.log(os.networkInterfaces());
}

module.exports = {operation}