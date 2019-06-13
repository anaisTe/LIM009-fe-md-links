#!/usr/bin/env node 
//es sincrono
// const [,, ...args] = process.argv
// console.log(`link ingresado ${args}`);

// const path = require('path');
// const ruta =  `${args}`;
//  const linkAbsValidate = (ruta) =>{
//     if (path.isAbsolute(ruta) === true ) {
//        // return ruta
//          console.log('la ruta es absoluta');
//     }else {
//         //return  path.resolve(ruta)
//         console.log('la ruta es relativa convertir a absoluta',path.resolve(ruta));      
//     }
// }
// linkAbsValidate(ruta)
    

//leer archivo
// const [,, ...args] = process.argv
// console.log(`archivo ingresado ${args}`);
// const fs = require('fs');
// const fsRuta =  `${args}`;

// const readingFiles = (fsRuta) =>{
//     fs.readFile((fsRuta),'UTF-8', (error, data) => {
//         if (error) {
//             console.log(error);            
//         }else{
//             console.log(data);
//         }
//     });
// }
// readingFiles(fsRuta)


const [,, ...args] = process.argv
console.log(`directorio ingresado ${args}`);
const fs = require('fs');
let fsRuta =  `${args}`;
let dirBuff = Buffer.from(fsRuta);

const readingDir = (dirBuff) =>{
    fs.readdir((dirBuff), (error, files) =>{
        if (error) {
            console.log(error);
        }else{
            console.log(files);  
        }
        });
    }
readingDir(dirBuff)
//fs.readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
//fs.readFileSync('<directory>'); // => <data>

// fs.readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });