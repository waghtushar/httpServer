const http = require('http')
const fs = require('fs')
const port = 4282

const server = (req, res) => {
    let filename = ""
    switch (req.url) {
        case '/':
            filename = './home.html'
            break
        case '/about':
            filename = "./about.html"
            break
        case '/blog':
            filename = "./blog.html"

    }
    fs.readFile(filename,(err,result)=>{
        if(!err){
            res.end(result)
        }
    })
}