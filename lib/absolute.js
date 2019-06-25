"use strict";

//const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);
var fs = require('fs');

var path = require('path');

var routers = process.argv[2]; //lee ruta y la convierte a absoluta si es relativa

var linkAbsValidate = function linkAbsValidate(routers) {
  if (path.isAbsolute(routers) === true) {
    return console.log('La ruta es absoluta', routers);
  } else {
    return console.log('la ruta era relativa ahora es absoluta', path.resolve(routers));
  }
};

linkAbsValidate(routers); //lee si es file

var fileIsFiles = function fileIsFiles(routers) {
  var valFile = fs.statSync(routers);
  var linkIsFile = valFile.isFile();
  return console.log(linkIsFile);
};

fileIsFiles(routers); //lee si es Directorio
// const authDir = (routers) =>{
//     let valDir = fs.statSync(routers);
//     let linkIsDir = valDir.isDirectory();
//     return console.log(linkIsDir);
// }
//lee extension md

var fileExtMd = function fileExtMd(routers) {
  var x = path.extname(routers) === '.md';
  return x;
};

fileExtMd(routers); //entra a directorio y lee .md

var arrRouteMd = [];

var routeMd = function routeMd(routers) {
  var inFile = fs.readdirSync(routers);

  for (var i = 0; i < inFile.length; i++) {
    var eleFile = path.join(routers, inFile[i]);

    if (fs.statSync(eleFile).isDirectory() === true) {
      routeMd(eleFile);
    } else if (fileExtMd(eleFile)) {
      arrRouteMd.push(eleFile);
    }
  }
};

routeMd(routers);
console.log(arrRouteMd); // module.exports= {
//     linkAbsValidate
// }