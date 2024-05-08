const http = require('http')
const fs = require('fs')
const port = 4282
const myserver = (req, res) => {
    let filename = ""
    switch (req.url) {
        case '/':
            filename = './home.html'
            break
        case '/about':
            filename = './about.html'
            break
        case '/contact':
            filename = './contact.html'
            break
        case '/blog':
            filename = './blog.html'
            break
        default:
            filename = './error.html'
    }
    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result)
        }
    })
}

const server = http.createServer(myserver)

server.listen(port, (err) => {
    if (err) {
        console.log("server note started");
        return false
    }
    console.log("server started", port);
})