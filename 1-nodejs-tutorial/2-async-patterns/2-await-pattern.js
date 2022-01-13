const {readFile, writeFile} = require("fs").promises
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFile("./content/first.txt", "utf-8")
        const second = await readFile("./content/second.txt", "utf-8")
        await writeFile("./content/subfolder/test.txt", `${first} ::: ${second}`, {flag: "a"})
        console.log(first, second)
    }
    catch(error){
        console.log(error)
    }

}

start()



// const getPath = function (path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getPath("./content/first.txt")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })