"use strict";

// const  routeLinks = require('./path.js')
// // import routeLinks from "./path.js";
// console.log(routeLinks);
var http = require('http'); // http.get({
//     host: 'www.github.com',
//     method: 'GET',
//     path: '/'
// },(res)=> {
// // console.log(J);
// console.log(res.statusCode);
// })


function getStatusCodeResult(website) {
  website = 'C:/Users/L-5-38/LIM009-fe-md-links/src/path.js';
  return new Promise(function (resolve, reject) {
    http.get(website, function (res) {
      var statusCode = res.statusCode;
      error = statusCode >= 400 && statusCode <= 500 ? "error: ".concat(website) : null;

      if (error) {
        reject(error);
      } else if (statusCode >= 200 && statusCode <= 300) {
        resolve("Success: ".concat(website));
      }
    });
  });
}

module.exports = {
  getStatusCodeResult: getStatusCodeResult //   //Entra si es directorio y trae archivos .md en un array
  //   describe('Función que junta las rutas de los archivos con ext .md en un array', () => {
  //     it('routeMd debería ser una función', () => {
  //       expect(typeof routeMd).toBe('function');
  //     });
  //     it('deberia leer una carpeta y retornar el array con archivos .md', () => {
  //         expect(routeMd(path.join(process.cwd(),'testing1'))).toEqual([path.join(process.cwd(),'testing1','README.md'), path.join(process.cwd(),'README.md')]);
  //       });
  //     it('lee el contenido del directorio y retorna un arr con archivos de ext .md', () => {
  //         expect(routeMd([{"file": "C:\\Users\\L-5-38\\LIM009-fe-md-links\\src\\READMe.md"}])).toBe(true);        
  //       });
  //     it('lee el contenido del directorio y retorna un arr con archivos de ext .md', () => {
  //       expect(routeMd('C:/Users/L-5-38/LIM009-fe-md-links/src')).toStrictEqual([{"file": "C:\\Users\\L-5-38\\LIM009-fe-md-links\\src\\READMe.md"}]);        
  //     });
  //  });
  //  //Entra si es directorio y trae archivos .md en un array
  //  describe('Función que junta el href, text y file en un array', () => {
  //     it('routeLinks debería ser una función', () => {
  //       expect(typeof routeLinks).toBe('function');
  //     });
  //     // test('lee el contenido del directorio y retorna un arr con archivos de ext .md', () => {
  //     //   expect(routeLinks('C:/Users/L-5-38/LIM009-fe-md-links/src')).toBe([ { file: 'C:\\Users\\L-5-38\\LIM009-fe-md-links\\src\\READMe.md' } ]);        
  //     // });
  //  });

};