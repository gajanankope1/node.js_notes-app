const fs = require("fs");
// //create file and write data into that file synchronusly

// fs.writeFileSync("notes.txt","hi file is created jdhgf wow  dont worry");

// //create file and write data into that file asynchronusly

// fs.writeFile("notes.txt","hello",(err)=>{
//     if(err)
//     console.log("error");
//     else
//     console.log("file saved");
// });

// //create file and add text or update into existing file  synchronusly

// fs.appendFileSync("notes.txt","appendfilesync");

// //create file and  add text or update into existing file  synchronusly

// fs.appendFile("notes.txt", "appendfilesync", (err) => {
//     if (err)
//         console.log("error");
//     console.log("data append asynchronusly");
// });

// fs.appendFile("notes1.txt", "appendfilesync", (err) => {
//     if (err)
//         console.log("error");
//     console.log("data append asynchronusly");
// });


//importing files

const name=require("./utils");
const yargs=require("yargs");

console.log(name);
console.log(name(5));

const command=process.argv[2];
if(command=="add")
console.log("adding note");
if(command=="remove")
console.log("removing note");

console.log(yargs.argv);