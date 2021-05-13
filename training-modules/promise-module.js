
const asyncFuntion = async () => 'async as a promise'

function operation(){

    let done = false ;

    console.log('Defined before a promise operation') ;

    const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
    }) ;
     
    isItDoneYet.then(report => console.log(report)).catch(error => console.log('error message: ',error)) ;

    asyncFuntion().then(data => console.log(data)) ;

    console.log('Defined after a promise operation') ;
}; 

module.exports = operation ;