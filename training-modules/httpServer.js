const htttp = require('http') ;

function myServer(port = 3000) {
    const hostName = '127.0.0.1' ;
    const Port = port ;

    const server = htttp.createServer((req, res)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World\n')
    });

    server.listen(Port, hostname, () => {
    console.log(`Server running at http://${hostname}:${Port}/`)
    })

}