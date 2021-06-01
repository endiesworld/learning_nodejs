const express = require('express') ;
const session = require('express-session') ;
const path = require('path') ;


function operation(){
    const app = express() ;
    
  
    let myPublic = 'C:/Users/emmanuel.okoro/Documents/HTML_FOLDER/projects_2021/react-self-training/todo-list/build' ;
    // app.get('/', (req, res) => {
    //     console.log('request queries are: ', req.params)
    //     console.log('request queries are: ', req.query)
    //     res.send('Hello World!')});

    // app.get('/about', (req, res) => {
    // res.render('about')
    // });
    
    app.use('/',express.static(myPublic));
   
    app.use('/static', (req, res)=>{
        console.log("request body: ", req);
        res.send(req.params)
    });
     app.use(session({
        'secret': '343ji43j4n3jn4jk3n' //add a random string here
    }))

    app.get("/others", (req,res) =>{
        req.session.name +=  1 ;
        console.log(req.session) ;
        res.send(`your session token is: ${req.session.name}`)
    })

   

    app.listen(3000, () => console.log('Server ready'))
}

module.exports = {operation} ;