// #!/usr/bin/env node 
// const path = require('path');
//     let pathObj = path.parse(__dirname);
//  console.log(pathObj);
//C:/Users/L-5-38/LIM009-fe-md-links



const[,, ...args]= process.argv
console.log(`md-links ${args}`);

let path = require('path');
const ruta =  `${args}`;

const linkAbs = (ruta) =>{
    if (path.isAbsolute(ruta) === true ) {
        return console.log('la ruta absoluta');
    }else{
    console.log('la ruta es relativa convertir a absoluta');
        
    }
}
linkAbs(ruta)

