import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';
FirstApp


 describe('Pruebas en <FirstApp />', () => {
  
    const titulo = 'Hola Darwin'
    const mensaje = 'Soy el subtitulo'
    test('Debe hacer match con el snapshot', ()=>{
        const { container } = render(<FirstApp titulo={ titulo }/>);
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Hola Darwin"',()=>{

        /*screen.debug() --> para ver el objeto. tiene asociado el body HTML. Ejecutalo y verás. 
        si lo coloco antes del render se mostrará vacio, si lo coloco despues mostrará lo renderizado hasta ahora
        */

        render(<FirstApp titulo={ titulo }/>);
        expect( screen.getByText(titulo) ).toBeTruthy();
    });

    test('Debe de mostrar el titulo en un h1', ()=>{
        render(<FirstApp titulo={ titulo }/>);
        expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain(titulo);

    });

    test('Debe de mostrar el subtitulo enviado por props ', () => {
      
        render(
            <FirstApp
                titulo={ titulo }
                mensaje={ mensaje }
            />
        );

        expect( screen.getAllByText(mensaje).length ).toBe(2);
    });
    

});
