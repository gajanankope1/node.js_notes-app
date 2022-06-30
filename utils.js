const validator=require("validator");

console.log("utils.js");
const name=(a)=>{
    console.log(a*a);
};

console.log(validator.isEmail("a@gamil.com"));

module.exports=name;