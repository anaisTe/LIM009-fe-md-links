#!/usr/bin/env node 

// const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);


const fs = require('fs');
const path = require('path');
const myMarked = require('marked'); //compilador
const routers =   process.argv[2];
// const routers =  `${args}`;
// const routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src';



//lee ruta y la convierte a absoluta si es relativa
const linkAbsValidate = (routers) =>{
  if (path.isAbsolute(routers) === true ) {
    return routers
  }else {
    return path.resolve(routers);    
  }
}
linkAbsValidate(routers)

//lee si es file
const fileIsFiles = (routers) =>{
  let valFile = fs.statSync(routers).isFile();
  return valFile
}

//lee si es Directorio
const authDir = (routers) =>{
  let valDir = fs.statSync(routers).isDirectory();
  return valDir
}

//lee extension md
const fileExtMd = (routers) => { 
  const x = path.extname(routers) === '.md';
  return x
}

//extrae los archivos .md y los inserta en un array como obj
const routeMd = (routers) => {
  let arrRouteMd = [];
  const inFile = fs.readdirSync(routers);    
    inFile.forEach(eleFile =>{
      let newRouter =  path.join(routers, eleFile)
      if(authDir(newRouter)===true){
        routeMd(newRouter) 
      }else if(fileExtMd(newRouter)){
        arrRouteMd.push({file: newRouter})
      }
    }) 
  return arrRouteMd
};

//Usando Marked extrae las propiedades de la ruta y las coloca como obj en un arr
const routeLinks = (routerMd) =>{
  let arrHref = [];
  routerMd.forEach(eleArr => {    
    let intoLink = (eleArr).file;      
    const linksFile = fs.readFileSync(intoLink, 'UTF-8');
    let renderer = new myMarked.Renderer(); //options
      renderer.link = (href, title, text) => { 
        let z = {href, text, file:intoLink};
        arrHref.push(z)
      }
    myMarked(linksFile, { renderer })
  })
  return arrHref
}
const arrMds = routeMd(routers)
routeLinks(arrMds)
console.log(routeLinks(arrMds));



module.exports= {
  linkAbsValidate,
  fileIsFiles,
  authDir,
  fileExtMd,
  routeMd,
  routeLinks
}