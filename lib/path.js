#!/usr/bin/env node 
// const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);
"use strict";

var fs = require('fs');

var path = require('path'); // const myMarked = require('marked'); //compilador


var routers = process.argv[2]; // const routers =  `${args}`;
// const routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src/path.js';
//lee ruta y la convierte a absoluta si es relativa

var linkAbsValidate = function linkAbsValidate(routers) {
  if (path.isAbsolute(routers) === true) {
    return routers;
  } else {
    return path.resolve(routers);
  }
};

linkAbsValidate(routers); //lee si es file

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
}; //extrae los archivos .md y los inserta en un array como obj


var routeMd = function routeMd(routers) {
  var arrRouteMd = [];
  var inFile = fs.readdirSync(routers);
  inFile.forEach(function (eleFile) {
    var newRouter = path.join(routers, eleFile);

    if (authDir(newRouter) === true) {
      routeMd(newRouter);
    } else if (fileExtMd(newRouter)) {
      arrRouteMd.push({
        file: newRouter
      });
    }
  });
  return arrRouteMd;
}; //Usando Marked extrae las propiedades de la ruta y las coloca como obj en un arr


var routeLinks = function routeLinks(routerMd) {
  var arrHref = [];
  routerMd.forEach(function (eleArr) {
    var intoLink = eleArr.file;
    var linksFile = fs.readFileSync(intoLink, 'UTF-8');
    var renderer = new myMarked.Renderer(); //options

    renderer.link = function (href, title, text) {
      var z = {
        href: href,
        text: text,
        file: intoLink
      };
      arrHref.push(z);
    };

    myMarked(linksFile, {
      renderer: renderer
    });
  });
  return arrHref;
};

var arrMds = routeMd(routers);
routeLinks(arrMds);
console.log(routeLinks(arrMds));
module.exports = {
  linkAbsValidate: linkAbsValidate,
  fileIsFiles: fileIsFiles,
  authDir: authDir,
  fileExtMd: fileExtMd,
  routeMd: routeMd //   routeLinks

};