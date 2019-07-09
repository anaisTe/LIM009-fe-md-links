"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src';

var fs = require('fs');

var inFile = fs.readdirSync(routers);

var path = require('path');

var myMarked = require('marked'); //compilador


var fetch = require('node-fetch');

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
routeLinks(arrMds); // console.log(routeLinks(arrMds));
//función que verifica el estatus

var statusLink = function statusLink(routeStatus) {
  var linkStat = routeStatus.map(function (eleLink) {
    return fetch(eleLink.href).then(function (res) {
      eleLink.status = res.status;

      if (res.ok) {
        eleLink.ok = 'ok';
      } else {
        eleLink.ok = 'fail';
      }

      return eleLink;
    });
  });
  return Promise.all(linkStat);
};

statusLink(routeLinks(arrMds)); // .then((res)=>{
//     console.log(res);
// })
//stats links

var statLink = function statLink(links) {
  var arrLinks = links.then(function (res) {
    var linkStat = res.map(function (ele) {
      ele.href;
    });

    var totaLinks = _toConsumableArray(new set(linkStat));

    var brokeLink = res.filter(function (ele) {
      return ele.ok === 'fail';
    });
    console.log({
      total: res.length,
      unique: totaLinks.length,
      broken: brokeLink.length
    });
  });
};

statLink(statusLink(routeLinks(arrMds)));
module.exports = {
  routeMd: routeMd,
  routeLinks: routeLinks,
  statusLink: statusLink
};