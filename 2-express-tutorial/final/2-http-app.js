const {readFileSync} = require("fs")
const http = require("http")


const server = http.createServer((req, res) => {
    const url = req.url
    const homePage = readFileSync("./navbar-app/index.html")
    const styles_css_home = readFileSync("./navbar-app/styles.css")
    const logo_svg_home = readFileSync("./navbar-app/logo.svg")
    const js_home = readFileSync("./navbar-app/browser-app.js")

    if( url === "/"){
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(homePage)
        res.end()
    }else if(url === "/about"){
        res.writeHead(200, {"content-type" : "text/html"})
        res.write("<h1>About Page</h1>")
        res.end()
    }else if(url === "/logo.svg"){
        res.writeHead(200, {"content-type" : "image/svg+xml"})
        res.write(logo_svg_home)
        res.end()
    }else if(url === "/styles.css"){
        res.writeHead(200, {"content-type" : "text/css"})
        res.write(styles_css_home)
        res.end()
    
    }else if(url === "/browser-app.js"){
        res.writeHead(200, {"content-type" : "text/javascript"})
        res.write(js_home)
        res.end()
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.write("<h1>Error 404!</h1>")
        res.end()
    }
})

server.listen(5000)