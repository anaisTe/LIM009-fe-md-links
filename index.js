#!/usr/bin/env node 
const [,, ...args]= process.argv
console.log(`link ingresado ${args}`);

const path = require('path');
const ruta =  `${args}`;
export const linkAbsValidate = (ruta) =>{
    if (path.isAbsolute(ruta) === true ) {
        return ruta
        // console.log('la ruta es absoluta');
    }else {
        return  path.resolve(ruta)
    //console.log('la ruta es relativa convertir a absoluta');      
    }
}


    
