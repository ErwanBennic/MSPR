const colors = {
   black : "\x1b[30m",
   red : "\x1b[31m",
   green : "\x1b[32m",
   yellow : "\x1b[33m",
   blue : "\x1b[34m",
   magenta : "\x1b[35m",
   cyan : "\x1b[36m",
   white : "\x1b[37m",
}

const today = new Date();
const h = today.getHours();
const m = (today.getMinutes()<10?'0':'') + today.getMinutes()
const s = (today.getSeconds()<10?'0':'') + today.getSeconds()
const fullTime = `${h}:${m}:${s}`;

const logger = {
   blue(source, m){console.log(colors.blue, `${fullTime} [${source}] - ${m}`)},
   red(source, m, f){console.log(colors.red, `${fullTime} [${source}] - ${m} in ${f}`)},
   green(source, m){console.log(colors.green, `${fullTime} [${source}] - ${m}`)},
   yellow(source, m){console.log(colors.yellow, `${fullTime} [${source}] - ${m}`)},
   magenta(source, m){console.log(colors.magenta, `${fullTime} [${source}] - ${m}`)},
   cyan(source, m){console.log(colors.cyan, `${fullTime} [${source}] - ${m}`)},
   white(source, m){console.log(colors.white, `${fullTime} [${source}] - ${m}`)},
   hello(m){console.log(colors.blue,"⚡  " + m + " ⚡")}
}

module.exports = logger;