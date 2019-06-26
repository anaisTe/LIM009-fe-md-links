"use strict";

//const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);
var fs = require('fs');

var path = require('path');

var myMarked = require('marked');

var routers = process.argv[2]; // const routers =  'C:/Users/L-5-38/LIM009-fe-md-links';
//lee ruta y la convierte a absoluta si es relativa
// const linkAbsValidate = (routers) =>{
//     if (path.isAbsolute(routers) === true ) {
//         return console.log('La ruta es absoluta',routers);     
//     }else {
//         return console.log('la ruta era relativa ahora es absoluta',path.resolve(routers));        
//     }
// }
// linkAbsValidate(routers)
// //lee si es file
// const fileIsFiles = (routers) =>{
//     let valFile = fs.statSync(routers);
//     let linkIsFile = valFile.isFile();
//     return console.log(linkIsFile);
// }
// fileIsFiles(routers)
//lee si es Directorio
// const authDir = (routers) =>{
//     let valDir = fs.statSync(routers);
//     let linkIsDir = valDir.isDirectory();
//     return console.log(linkIsDir);
// }
// //lee extension md
// let fileExtMd = (routers) => { 
//    const x =  path.extname(routers) === '.md';
//    return x
// }
// fileExtMd(routers)
// //entra a directorio y lee .md
// let arrRouteMd = [];
// const routeMd = (routers) =>{
//     const inFile = fs.readdirSync(routers);  
//     for (let i = 0; i < inFile.length; i++) {
//         let eleFile = path.join(routers, inFile[i]);               
//         if (fs.statSync(eleFile).isDirectory()===true) {
//             routeMd(eleFile)            
//         }else if(fileExtMd(eleFile)){
//             arrRouteMd.push(eleFile);            
//         }
//     }
// }
// routeMd(routers)
//Agrega al href http||https

var externalLinkRenderer = function externalLinkRenderer(href, title, text) {
  var arrHref = [];

  if (href.startsWith("http://") || href.startsWith("https://")) {
    if (text === true) {
      text = href;
    }

    var z = "<a href=\"".concat(href, "\" title=\"").concat(title, "\">").concat(text, "</a>");
    arrHref.push(z);
  } //return `[${text}](${href})`


  console.log(arrHref);
}; //Lee los archivos md usando Marked


var routeLinks = function routeLinks(routers) {
  var linksFile = fs.readFileSync(routers, 'UTF-8');
  var renderer = new myMarked.Renderer();
  renderer.link = externalLinkRenderer;
  return myMarked(linksFile, {
    renderer: renderer
  });
};

routeLinks(routers); // module.exports= {
//     linkAbsValidate
// }