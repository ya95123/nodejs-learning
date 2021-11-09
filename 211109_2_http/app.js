// node.js 內建的 http
const http = require("http")
http.createServer((request, response) => {
  console.log(request.url)
  // plain 文字 , json ,html
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.write("Hello!")
  response.end()
}).listen(8080) // 127.0.0.1:8080 可以找到被建立的 http