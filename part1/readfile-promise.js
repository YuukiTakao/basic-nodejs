const fs = require('fs')

function readFile_pr(fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, s) => {
      resolve(s)
    })
  })
}

readFile_pr('../master-data/a.txt')
  .then((text) => {
    console.log('a.txtを読み込んだ', text)
    return readFile_pr('../master-data/b.txt')
  })
  .then((text) => {
    console.log('b.txtを読み込んだ', text)
    return readFile_pr('../master-data/c.txt')
  })
  .then((text) => {
    console.log('c.txtを読み込んだ', text)
  })