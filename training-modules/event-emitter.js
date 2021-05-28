const EventEmita = require('events') ;
const eventEmitter = new EventEmita() ;

function operation() {
  eventEmitter.on('in3YearsTime', (firstChild, secondChild) => {
  console.log(`Congraulations man!, your children, ${firstChild} and ${secondChild}, both came out top of their classes`)
}); 

eventEmitter.emit('in3YearsTime', 'Dubem', 'Kamuma')
}

module.exports = operation ;