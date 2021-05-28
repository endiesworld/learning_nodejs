const https = require('https')

function operation() {
    const options = {
    hostname: 'dog.ceo',
    port: 443,
    path: '/api/breeds/list/all',
    method: 'GET',
}

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
        //note: we use process.stdout.write() here, and not console.log(), because we are receiving binary data from a stream, in chunks, and we stream each chunk to `stdout`, so the user (you) can see it.
    })
})

req.on('error', (error) => {
    console.error(error)
})

req.end()
}

function operation2(){
    const data = JSON.stringify({
        todo: 'Buy the milk',
    })

const options = {
    hostname: 'ptsv2.com',
    port: 443,
    path: '/t/wdv29-1621319997/post',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
    }

    const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
    })

    req.on('error', (error) => {
    console.error(error)
    })

    req.write(data)
    req.end()
}

module.exports = {operation, operation2} ;