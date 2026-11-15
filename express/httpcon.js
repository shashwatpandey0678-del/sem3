const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.method==="Get" && req.url === "/"){
        res.end("GET Request")
    }
    else if(req.method === "POT" && req.url ==="/"){
        res.end("POST Request")
    }
    else if(req.method === "PATCH" && req.url ==="/USER"){
        res.end("PATCH Request")
})
server.listen(3000,(res,res)=>{
    console.log("server is running on the PORT:3000");
})