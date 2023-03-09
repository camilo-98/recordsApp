import { types } from "../../../src/auth/types/types";

describe('Pruebas en el types', () => {

    test('Debe de regresar estos types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
      
    });
    
  
})
