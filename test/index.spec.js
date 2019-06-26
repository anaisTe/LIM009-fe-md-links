import { linkAbsValidate, fileIsFiles} from "../src/absolute.js";

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
   
//lee si es file 
  describe('Función que lee un archivo', () => {
    it('fileIsFiles debería ser una función', () => {
      expect(typeof fileIsFiles).toBe('function');
    });
    it('Devuelve un boolean cuando lee la Ruta y es File', () => {
      expect(fileIsFiles('C:/Users/L-5-38/LIM009-fe-md-links/index.js')).toBe(true);        
    });
    it('Devuelve un boolean cuando lee la Ruta y no es File', () => {
      expect(fileIsFiles('C:/Users/L-5-38/LIM009-fe-md-links')).toBe(false);        
    });
  });
