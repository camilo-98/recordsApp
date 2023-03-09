import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Prueba en el <AppRouter/>', () => {
  
    test('Debe de mostrar el login si no esta autenticado', () => {
      
        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/inquisition']}>
                <AuthContext.Provider value={ contextValue }>
                        <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBe(2)

    });

    test('Debe de mostrar el componente de Inquisition si est autenticado', () => {
      
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'camilo'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                        <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Inquisition') ).toBeTruthy();

    });
    
    

});
