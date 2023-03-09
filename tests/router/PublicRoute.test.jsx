import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute />', () => {
  
    test('Debe de mostrar el children si no esta autenticado', () => {
      
        const contextValue = {
            logged: false
        }

        render( 
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Esto es publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Esto es publica') ).toBeTruthy();

    });

    test('Debe de navegar si esta autenticado', () => {
    
        const contextValue = {
            logged: true,
            user: {
                name: 'Camilo',
                id: 'asd123' 
            }
        }

        render( 
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='/login' element={
                            <PublicRoute>
                                <h1>Esto es publica</h1>
                            </PublicRoute>
                        }></Route>
                        <Route path='homepage' element={ <h1>Pagina inquisition</h1> }></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
                    
        expect( screen.getByText('Pagina inquisition') ).toBeTruthy();

    });
    
    

})
