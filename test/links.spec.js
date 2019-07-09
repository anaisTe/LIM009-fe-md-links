const testLinks = require('../src/links')
// import {
//     routeMd,
//     routeLinks
//  } from "../src/links.js";
import process from 'process';
import path from 'path';
import mock from 'mock-fs';
import fetchMock from '../__mocks__/node-fetch.js';
fetchMock.config.sendAsJson = false;
  fetchMock
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://developers.google.com/v8/', 200)
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)


 beforeEach(() => {
    mock({
      'testing': {
        'README.md': '[Node.js](https://nodejs.org/)',
        'testing1': {
          'README.md': '[motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)'
        },
      },
    });
  });
  afterEach(mock.restore);

  //Entra si es directorio y trae archivos .md en un array
  describe('Función que junta las rutas de los archivos con ext .md en un array', () => {
    it('routeMd debería ser una función', () => {
      expect(typeof testLinks.routeMd).toBe('function');
    });
    // it('deberia leer una carpeta y retornar el array con archivos .md', () => {
    //     expect(testLinks.routeMd(path.join(process.cwd(),'testing1'))).toEqual([path.join(process.cwd(),'testing1','README.md'), path.join(process.cwd(),'README.md')]);
    //   });
    // it('lee el contenido del directorio y retorna un arr con archivos de ext .md', () => {
    //     expect(testLinks.routeMd([{"file": "C:\\Users\\L-5-38\\LIM009-fe-md-links\\src\\READMe.md"}])).toBe(true);        
    //   });
    // it('lee el contenido del directorio y retorna un arr con archivos de ext .md', () => {
    //   expect(testLinks.routeMd('C:/Users/L-5-38/LIM009-fe-md-links/src')).toStrictEqual([{"file": "C:\\Users\\L-5-38\\LIM009-fe-md-links\\src\\READMe.md"}]);        
    // });
 });
 