
function externalFunction(){
    console.log('Running an external function')
}

function operation(){
    console.log('Process running...') ;
    process.nextTick(() =>{
        console.log('A nextTick process currently running..')
    })

    for(let i = 0 ; i<5; i++){
        console.log('Process running after process.nextTick...') ;
    }
    externalFunction() ;
}

module.exports = operation