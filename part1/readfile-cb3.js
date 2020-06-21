const fs = require('fs')

fs.readFile('../master-data/a.txt', 'utf-8', function (err, data) {
  console.log('a.txtを読み込んだ', data)
  fs.readFile('../master-data/b.txt', 'utf-8', function (err, data) {
    console.log('b.txtを読み込んだ', data)
    fs.readFile('../master-data/c.txt', 'utf-8', function (err, data) {
      console.log('c.txtを読み込んだ', data)
    })
  })
})