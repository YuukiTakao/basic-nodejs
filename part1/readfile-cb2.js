const fs = require('fs')

fs.readFile('../master-data/kakugen.txt', 'utf-8', (err, data) => {
  console.log(data)
})