#!/usr/bin/env node 
//console.log(`link ingresado ${args}`);
"use strict";

var fs = require('fs');

var path = require('path'); // const [,, ...args] = process.argv
// const routers =  `${args}`;


var routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src'; // const routers =   process.argv[2];
//lee ruta y la convierte a absoluta si es relativa

var linkAbsValidate = function linkAbsValidate(routers) {
  var newPath;

  if (path.isAbsolute(routers) === true) {
    newPath = routers; // console.log(newPath);   
  } else {
    newPath = path.resolve(routers); // console.log(newPath);    
  }

  return newPath;
}; // lee si es file


var fileIsFiles = function fileIsFiles(routers) {
  var valFile = fs.statSync(routers).isFile();
  return valFile;
}; //lee si es Directorio


var authDir = function authDir(routers) {
  var valDir = fs.statSync(routers).isDirectory();
  return valDir;
}; //lee extension md


var fileExtMd = function fileExtMd(routers) {
  var x = path.extname(routers) === '.md';
  return x;
};

module.exports = {
  linkAbsValidate: linkAbsValidate,
  fileIsFiles: fileIsFiles,
  authDir: authDir,
  fileExtMd: fileExtMd
};