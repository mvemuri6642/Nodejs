const os=require('os')
const user=os.userInfo()
console.log(`uptime is ${os.uptime}`)
const currentOS={
    platform:os.platform(),
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS)
