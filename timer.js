function timerExecution(time){
        console.log(`hello after ${time} second`) ; 
};

function myTimer(){
    const firstTime = 4;
    const secondTime = 8 ;
    setTimeout(timerExecution,  firstTime*1000, firstTime) ;
    setTimeout(timerExecution,  secondTime*1000, secondTime) ;
} ;

module.exports = myTimer ;