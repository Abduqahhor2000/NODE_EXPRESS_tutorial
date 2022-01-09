const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("hello. you intered home page")
    }
    if(req.url === "/about"){
        res.end("you are in about page")
    }

    res.end(`
        <h1>Oops!!!</h1>
        <p>Siz hozir kalla qo'ydingiz. Yana boshqatta kalla qo'yishni xohlasangiz <a href="/">buyerni</a> bosing.</p>
   `)
})

server.listen(5000) 