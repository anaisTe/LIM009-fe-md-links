"use strict";

var routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src';

var fs = require('fs');

var inFile = fs.readdirSync(routers);

var path = require('path');

var myMarked = require('marked'); //compilador


var fnPath = require('../src/path'); //extrae los archivos .md y los inserta en un array como obj


var routeMd = function routeMd(routers) {
  var arrRouteMd = [];
  inFile.forEach(function (eleFile) {
    var newRouter = path.join(routers, eleFile);

    if (fnPath.authDir(newRouter) === true) {
      routeMd(newRouter);
    } else if (fnPath.fileExtMd(newRouter)) {
      arrRouteMd.push({
        file: newRouter
      });
    }
  }); //   console.log(arrRouteMd);   

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
  routeMd: routeMd,
  routeLinks: routeLinks
};