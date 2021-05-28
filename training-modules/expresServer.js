const express = require('express')

function operation(){
    const app = express()

    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(3000, () => console.log('Server ready'))
}

module.exports = {operation} ;