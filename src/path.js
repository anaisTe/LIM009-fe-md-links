#!/usr/bin/env node 
//console.log(`link ingresado ${args}`);


const fs = require('fs');
const path = require('path');
// const [,, ...args] = process.argv
// const routers =  `${args}`;
const routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src'
// const routers =   process.argv[2];





//lee ruta y la convierte a absoluta si es relativa
const linkAbsValidate = (routers) =>{
  let newPath;
  if (path.isAbsolute(routers) === true ) {
    newPath = routers 
    // console.log(newPath);   
  }else {
    newPath = path.resolve(routers)    
    // console.log(newPath);    
  }
  return newPath
}

// lee si es file
const fileIsFiles = (routers) =>{
  const valFile = fs.statSync(routers).isFile();
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





module.exports= {
  linkAbsValidate,
  fileIsFiles,
  authDir,
  fileExtMd
}