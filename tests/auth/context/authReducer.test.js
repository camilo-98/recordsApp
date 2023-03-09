import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
      
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    });

    test('Debe de llamar el login autenticar y establecer el usuario', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'juan',
                id: '123'
            }
        }

        const state = authReducer( { logged: false }, action );

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('Debe de borrar el nombre de usuario y logged en flase', () => {
      
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({ logged: false });

    });
    

})
