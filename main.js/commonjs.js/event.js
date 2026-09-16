// import fs from "fs";
// setTimeout(() => {
//     console.log("SetTimeout");
// }, 1000);

// fs.readfile("intro.txt", "utf8", (err,data) =>{
//     console.log("file read completed");
// })

// setInterval(() => {
//     console.log("Set Interval after 5 ms");
// }, 500);
// fs.readFile("intro.txt","utf8",)
import fs from "fs";

setTimeout(() => {
    console.log("SetTimeOut");
}, 1000);

fs.readFile("intro.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File reading complete");

    setTimeout(() => {
        console.log("setTimeout inside readFile");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate inside readFile");
    });
});

setInterval(() => {
    console.log("set interval after 500 ms");
}, 500);