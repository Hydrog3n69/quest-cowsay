

var cowsay = require("cowsay");
const myInfos = require("./information.js");
console.log(cowsay.say({text: `${myInfos.name} ${myInfos.campus}`}));

