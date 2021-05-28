const path = require('path') ;
const fs = require("fs") ;

function operation(){
    console.log(path.basename('/test/something.txt') )  //something.txt)
    const name = 'Emmanuel'
    console.log(path.join('/', 'users', name, 'notes.txt')) ;
    const fileName = 'tutorial.txt' ;
    const filePath = path.resolve(fileName) ;

    const content = " Begining of File" ;

    fs.writeFile(filePath, content, { flag: "a+" }, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log("Content written succesfully")
    });

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(err)
            return
        }

        console.log(`is it a file: ${stats.isFile()}`) //true
        console.log(`is it a directory: ${stats.isDirectory()}`) //false
        console.log(`is it a symbolic link: ${stats.isSymbolicLink() }`)//false
        console.log(`file size: ${stats.size}`) //1024000
    })
}

module.exports = {operation} ;