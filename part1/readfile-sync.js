const fs = require('fs')

// 同期的
const data = fs.readFileSync('../master-data/kakugen.txt', 'utf-8')
console.log(data)

// 非同期的
fs.readFile('../master-data/kakugen.txt', 'utf-8', function (err, data) {
  console.log('start async')
  console.log(data)
})
