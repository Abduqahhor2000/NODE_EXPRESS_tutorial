const OS = require("os")

console.log(OS.uptime())

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem()
}

console.log(currentOS)