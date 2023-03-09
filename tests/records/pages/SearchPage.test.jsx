import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/records/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}));

describe('Pruebas en <SearchPage/>', () => {

    beforeEach(()=> jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {
      
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrarse a into y el input con el valor del querystring', () => {
      
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=into']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('into');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/98-into.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');
        screen.debug();

    });

    test('Debe de mostrar un error si no es encuentra el record', () => {
      
        render(
            <MemoryRouter initialEntries={['/search?q=into']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');

    });
    
    test('Debe de llamar el navigate a la pantalla nueva', () => {
      
        const inputValue = 'into';

        render(
            <MemoryRouter initialEntries={['/search?q=into']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue } } );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=into${ inputValue }`);

    });
  
});
