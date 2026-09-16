const fs=require("fs")
fs.watch("intro.txt",(eventType,filenaam)=>{
    console.log("Event:",eventType)
    console.log("filename:",filename )
})

setTimeout(()=>{
    watcher.close()
    console.log("Watcher closed")
},5000)