
//const [,, ...args] = process.argv
//console.log(`link ingresado ${args}`);


const fs = require('fs');
const path = require('path');
// const myMarked = require('marked');
//const routers =  process.argv[2];
const routers =  'C:/Users/L-5-38/LIM009-fe-md-links';



//lee ruta y la convierte a absoluta si es relativa
const linkAbsValidate = (routers) =>{
    if (path.isAbsolute(routers) === true ) {
      return routers
        // return console.log('La ruta es absoluta',routers);     
    }else {
      return path.resolve(routers)
        // return console.log('la ruta era relativa ahora es absoluta',path.resolve(routers));        
    }
}
linkAbsValidate(routers)

// const linkAbsValidate =(routers) =>{
// path.isAbsolute(routers) === true ? routers : path.resolve(routers);        
// }          
// linkAbsValidate(routers)


//lee si es file
const fileIsFiles = (routers) =>{
    let valFile = fs.statSync(routers).isFile();
    // let linkIsFile = valFile.isFile();
    // console.log(linkIsFile);
    return valFile
}
fileIsFiles(routers)


// lee si es Directorio
// const authDir = (routers) =>{
//     let valDir = fs.statSync(routers).isDirectory();
//   //  let linkIsDir = valDir;
//     return console.log(valDir);
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
// console.log(arrRouteMd);                

//Agrega al href http||https
// const linksRenderer = (href, title, text) => { 
//     let arrHref = [];
//     if (href.startsWith("http://") || href.startsWith("https://")) {
//       // console.log('aqui',       !text === href);
//       // if (!text) {
//       //   text = href
//       // }
//     let z = `href="${href}" title="${title}" >${text}`;
//     arrHref.push(z)
//     console.log(arrHref); 
//     }
//   //return `[${text}](${href})`
//   }

// //Lee los archivos md usando Marked
// const routeLinks = (routers) =>{
//     const linksFile = fs.readFileSync(routers, 'UTF-8');
//     let renderer = new myMarked.Renderer();
//     renderer.link =   linksRenderer

//   return myMarked(linksFile, { renderer })
// }
// routeLinks(routers)

 

module.exports= {
    linkAbsValidate,
    fileIsFiles
}