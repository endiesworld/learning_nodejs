var intervalCounter = 0 ;
var myTimeIntervalReturnValue ;

const timerExecutedFunction = time => {
    console.log(`hello world after every ${time} second`) ; 
    intervalCounter++ ;
    if(intervalCounter === 5) 
    {
        console.log(`counter value is ${intervalCounter}`)
        clearInterval(myTimeIntervalReturnValue) ; 
    }
}

function myTimeInterval(){
    const firstTime = 1 ;
   myTimeIntervalReturnValue = setInterval(timerExecutedFunction,  firstTime*1000, firstTime) ;
} ;

module.exports = myTimeInterval ;