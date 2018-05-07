const fs = require('fs');

const readline = require('readline');

let cells = 186;

let buffer = Buffer.alloc(cells)

let rand;

while(cells--) {
    // 0, 1 or greater
    rand = Math.floor(Math.random() * 3);
    // 78 = "N", 87 = "W", 76 = "L"
    buffer[cells] = rand === 0 ? 78 : rand === 1 ? 87 : 76;
}

fs.open('scores.txt', 'r+', (err, fd) => {
    fs.write(fd, buffer, 0, buffer.length, 0, (err, writtenBytes, buffer) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        let quest = () => {
            rl.question('month/day:', index => { // rl.question , index is input
                if(!index) return rl.close()
                let md = index.split('/');
                let pos = parseInt(md[0] - 1) * 31 + parseInt(md[1] - 1);

                // Buffer.alloc(1) is where the read data will be written to
                // buff is the Buffer.alloc(1) after read data being written
                fs.read(fd, Buffer.alloc(1), 0, 1, pos, (err, br, buff) => {
                    let v = buff.toString();
                    console.log(v === "W" ? "Win!" : v === "L" ? "Loss..." : "No game");
                    quest()
                })
            })
        }
        quest();
    })
})
