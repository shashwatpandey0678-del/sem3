import fs, { WriteStream, writeSync } from 'fs'

// readable Streams
const readStream = fs.createReadStream("input.txt", {encoding: "utf-8"});

readStream.on("data", (chunk)=>{
    console.log("Data Received");
    console.log("Data: ", chunk)
})
readStream.on("end", ()=>{
    console.log("END");
})
readStream.on("error,"(error)=>{
    console.log("Error:", error.message)
})

//create writable streams
const writaStream = fs.createWriteStream("output.txt")
WriteStream.write("Hello\n")

WriteStream.on("finish", ()=>{
    console.log("Data has been written.")
})
WriteStream.on("error", (error)=>{
    console.log("Error:". error)
})

readStream.pipe(WriteStream)