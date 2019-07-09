#!/usr/bin/env node 
import { linkAbsValidate,
    fileIsFiles,
    authDir,
    fileExtMd,
  } from "../src/path.js";

//lee ruta y convierte de relativa a absoluta
describe('Función que retorna una ruta absoluta', () => {
    it('linkAbsValidate debería ser una función', () => {
      expect(typeof linkAbsValidate).toBe('function');
    });
    it('Es una ruta absoluta', () => {
      expect(linkAbsValidate('C:/Users/L-5-38/LIM009-fe-md-links/src/path.js')).toBe('C:/Users/L-5-38/LIM009-fe-md-links/src/path.js');        
    });
    it('convertir a una ruta absoluta', () => {
      expect(linkAbsValidate('path.js')).toBe('C:\\Users\\L-5-38\\LIM009-fe-md-links\\path.js');        
    });
  });
   
//lee si es file 
describe('Función que lee un archivo', () => {
    it('fileIsFiles debería ser una función', () => {
      expect(typeof fileIsFiles).toBe('function');
    });
    it('Devuelve un false cuando lee la Ruta y no es File', () => {
      expect(fileIsFiles('C:/Users/L-5-38/LIM009-fe-md-links')).toBe(false);        
    });
  });

//lee si es directorio
 describe('Función que lee un directorio', () => {
    it('fileIsFiles debería ser una función', () => {
      expect(typeof authDir).toEqual('function');
    });
    it('Devuelve un true cuando lee la Ruta y es directorio', () => {
      expect(authDir('C:/Users/L-5-38/LIM009-fe-md-links/src')).toBe(true);        
    });
  });

  //lee extension .md de un archivo
  describe('fileExtMd Función que lee la ext .md',()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof fileExtMd).toEqual('function');
    }),
    it("deberia retornar la extensión del archivo",()=>{
        expect(fileExtMd('C:/Users/L-5-38/LIM009-fe-md-links/index.js')).toBe(false)
    })
});