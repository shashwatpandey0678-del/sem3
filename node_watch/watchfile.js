const fs= require("fs");
const watcher=fs.watchFile("intro.txt",(curr,prev)=>{
    console.log("Current:",curr.birthtime.tolSOString())
    console.log("Previous:",prev.birthtime.tolSOString())

});