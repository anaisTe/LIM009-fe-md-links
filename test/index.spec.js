import { linkAbsValidate, readingFiles } from "../index.js";

//lee ruta y convierte de relativa a absoluta
describe('Función que retorna una ruta absoluta', () => {
    it('linkAbsValidate debería ser una función', () => {
      expect(typeof linkAbsValidate).toBe('function');
    });
    it('Es una ruta absoluta', () => {
      expect(linkAbsValidate('C:/Users/L-5-38/LIM009-fe-md-links/index.js')).toBe('C:/Users/L-5-38/LIM009-fe-md-links/index.js');        
    });
    it('convertir a una ruta absoluta', () => {
      expect(linkAbsValidate('index.js')).toBe('C:\\Users\\L-5-38\\LIM009-fe-md-links\\index.js');        
    });
  });
   
//lee archivo  
  describe('Función que lee un archivo', () => {
    it('readingFiles debería ser una función', () => {
      expect(typeof readingFiles).toBe('function');
    });
    it('Muestra un error al leer un archivo', () => {
      expect(readingFiles('C:/Users/L-5-38/LIM009-fe-md-links/index.js')).toBe('C:/Users/L-5-38/LIM009-fe-md-links/index.js');        
    });
    it('Devuelve un array con el ', () => {
      expect(readingFiles('index.js')).toBe('C:\\Users\\L-5-38\\LIM009-fe-md-links\\index.js');        
    });
  });
