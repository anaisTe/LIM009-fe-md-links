
//const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);


const fs = require('fs');
const path = require('path');
const myMarked = require('marked');
const routers =  process.argv[2];


//lee ruta y la convierte a absoluta si es relativa
const linkAbsValidate = (routers) =>{
    if (path.isAbsolute(routers) === true ) {
        return console.log('La ruta es absoluta',routers);     
    }else {
        return console.log('la ruta era relativa ahora es absoluta',path.resolve(routers));        
    }
}
linkAbsValidate(routers)


//lee si es file
const fileIsFiles = (routers) =>{
    let valFile = fs.statSync(routers);
    let linkIsFile = valFile.isFile();
    return console.log(linkIsFile);
}
fileIsFiles(routers)

//lee si es Directorio
// const authDir = (routers) =>{
//     let valDir = fs.statSync(routers);
//     let linkIsDir = valDir.isDirectory();
//     return console.log(linkIsDir);
// }

//lee extension md
let fileExtMd = (routers) => { 
   const x =  path.extname(routers) === '.md';
   return x
}
fileExtMd(routers)

//entra a directorio y lee .md
let arrRouteMd = [];
const routeMd = (routers) =>{
    const inFile = fs.readdirSync(routers);  
    for (let i = 0; i < inFile.length; i++) {
        let eleFile = path.join(routers, inFile[i]);               
        if (fs.statSync(eleFile).isDirectory()===true) {
            routeMd(eleFile)            
        }else if(fileExtMd(eleFile)){
            arrRouteMd.push(eleFile);            
        }
    }
}
routeMd(routers)

// module.exports= {
//     linkAbsValidate
// }