#!/usr/bin/env node 
//es sincrono

    

//leer archivo














//leer directorio
// const [,, ...args] = process.argv
// console.log(`directorio ingresado ${args}`);
// const fs = require('fs');
// path = require('path'); 
// //let fsRuta =  `${args}`;


// const readdingDir = (dir) =>{
//     console.log('[+]', dir);
//     let files = fs.readdirSync(dir);
//     for(let x in files){
//         let next = path.join(dir,files[x]);       
//         if (fs.lstatSync(next).isDirectory()===true) {
//             readdingDir(next)
//         } else {
//             console.log('\t', next);
//         }
//     }
// }
// readdingDir(__dirname);






















// let dirBuff = Buffer.from(fsRuta);

// const readingDir = (dirBuff) =>{
//     fs.readdir((dirBuff), (error, files) =>{
//         if (error) {
//             console.log(error);
//         }else{
//             console.log(files);  
//         }
//         });
//     }
// readingDir(dirBuff)


//fs.readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
//fs.readFileSync('<directory>'); // => <data>

// fs.readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });