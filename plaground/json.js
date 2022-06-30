const fs=require("fs");
const book={
    title:"my Book",
    author:"max vivor"
}
// console.log(book);
// console.log(book.title);
// const bookJSON=JSON.stringify(book);
// console.log(bookJSON);
// console.log(bookJSON.title);
// bookParse=JSON.parse(bookJSON);
// console.log(bookParse.title);

// create json file and write json data into it
fs.writeFileSync("json.json",JSON.stringify(book));

// // update json data 
// const updateJson=JSON.parse(fs.readFileSync("json.json"));
// updateJson.title="your book";
// updateJson.author="harry poter";
// fs.writeFileSync("json.json",JSON.stringify(updateJson));


// read json file and get json data into in object format
console.log(JSON.parse(fs.readFileSync("json.json")));

// read json file and get json data into in JSON format
console.log(fs.readFileSync("json.json").toString());