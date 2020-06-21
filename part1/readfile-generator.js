const fs = require('fs')

function read_gfn(g, fname) {
  fs.readFile(fname, 'utf-8', function (err, data) {
    g.next(data)
  })
}

const g = (function* () {
  const a = yield read_gfn(g, '../master-data/a.txt')
  console.log(a)
  const b = yield read_gfn(g, '../master-data/b.txt')
  console.log(b)
  const c = yield read_gfn(g, '../master-data/c.txt')
  console.log(c)
})()
g.next()