import { linkAbsValidate } from "../index.js";

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
   