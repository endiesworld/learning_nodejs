const myMinimist = require('minimist') ;

const rawArgs = process.argv.slice(2) ;
const args = myMinimist(process.argv.slice(2)) ;



const runningNodeProcess  = () => {
   
    console.log(`${process.env.NODE_ENV} is a value that is set in the package.json 
    file when the app is started with 'npm start' script command`) 

     console.log(`${rawArgs} is the data entered, when you run the process with node <applicationName.js>,
      while ${args.name} is extracted by minimist lib. `)
};

module.exports = runningNodeProcess ;