const os = require('os')

//info about currrent user

const user = os.userInfo()
console.log(user)

//retunrs system uptime in sec
console.log(`The System Uptime is ${os.uptime()} secondss`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    
}

console.log(currentOS)