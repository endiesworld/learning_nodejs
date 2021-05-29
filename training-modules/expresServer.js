const express = require('express') ;


function operation(){
    const app = express() ;
  
    let clientPublic = 'C:\Users\emmanuel.okoro\Documents\HTML_FOLDER\projects_2021\react-self-training\todo-list\build' ;
    // app.get('/', (req, res) => {
    //     console.log('request queries are: ', req.params)
    //     console.log('request queries are: ', req.query)
    //     res.send('Hello World!')});

    // app.get('/about', (req, res) => {
    // res.render('about')
    // });
    app.use("/",express.static('public'))

    app.listen(3000, () => console.log('Server ready'))
}

module.exports = {operation} ;