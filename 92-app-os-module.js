const os = require("os")

// info about current user
const user = os.userInfo()
console.log(`UserInfo: ${user}`);
console.log(user);
console.log(user.username);

// returns the system uptime in seconds
const uptime = os.uptime()
console.log(`The System Uptime is ${uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)