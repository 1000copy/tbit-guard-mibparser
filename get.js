var fs = require('fs')
var file = './rFc_base_minimum/mib.JSON'
let rawdata = fs.readFileSync(file);
// console.log(rawdata.toString());
let student = JSON.parse(rawdata.toString());
console.log(student.reco.Name);



