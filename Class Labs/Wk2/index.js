const fs = require('fs')

//through function



//Async
console.log('START')
fs.readFile('input.txt', (err, data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data.toString())
})
console.log('END')

//Sync Call
console.log('START')
const data = fs.readFileSync('input.txt')
console.log(data)
console.log('END')

//Writing file
fs.writeFile('output.txt', 'Hello, GBC', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Data written successfully...')
})

//through function
// async function appendData(data){
//     await fs.appendFile('output.txt', data)
// }
async function appendData(data){
    try{    
        await fs.writeFile('output.txt', data, {flag: 'a'}) //Append with write
    }catch(err){
        console.log('Error : ' + err)
    }
}

appendData('Tang ina ko ')
//Append file
// fs.appendFile('output.txt', 'Hello, GBC', (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Data written successfully...')
// })

// fs.unlink('filetodelete.txt', (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('File Deleted!')
// })