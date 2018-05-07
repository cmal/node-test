console.time('add')

let rec = []

for (let i = 0 ; i < 1E6; i ++) {
  rec.push(1)
}

console.timeEnd('add')
