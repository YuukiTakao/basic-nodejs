const fs = require('fs')

function readFileEx(fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}

async function readAll() {
  const a = await readFileEx('../master-data/a.txt')
  console.log(a)
  const b = await readFileEx('../master-data/b.txt')
  console.log(b)
  const c = await readFileEx('../master-data/c.txt')
  console.log(c)
}

readAll()