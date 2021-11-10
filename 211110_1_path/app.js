const path = require("path")
let url = "/e/Learnig / nodejs - learning /211110_1_path/app.js"

// 目錄路徑
console.log(path.dirname(url))
// 路徑合併
console.log(path.join(__dirname, "app.js"))
console.log(__filename)
// 抓檔名
console.log(path.basename(url))
// 抓副檔名
console.log(path.extname(url))
// 分析路徑
console.log(path.parse(url))