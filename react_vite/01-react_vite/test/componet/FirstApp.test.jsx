import {describe, expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';
FirstApp


 describe('Pruebas en <FirstApp />', () => {
  
//     test('Debe de hacer match con el snapshot', ()=>{
//         const title = 'Hola soy Darwin'
//         const { container } = render(<FirstApp title={ title }/>);

//         expect( container ).toMatchSnapshot();

//     });

    /**
     * Descripción: Debe mostrar un titulo en el h1.  si el h1 del componente tiene espacios no me servirá el "toBe"
     * @expect ya que este toma en cuenta esos espacios, para evitar esto
     * es mejor usar @toContain de manera que evalúe solo el contenido 
     * más no los espacios generados al renderizar
     */
    test('Debe mostrar un titulo en el h1', ()=>{
        const titulo = 'Hola Darwin'
        const { container, getByText, getByTestId } = render(<FirstApp titulo={ titulo }/>);
        expect( getByText(titulo) ).toBeTruthy();

        
        expect( getByTestId('test-title').innerHTML ).toContain(titulo);

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );


    });

    /**
     * si quiero repetir un valor varias veces en el renderizado y 
     * debo hacerle pruebas a ello entonces uso los "All", en este
     * caso usaré getAllByText --> regresa un Array de elementos
     */

    test('Debe de mostrar el subtitulo enviado por props', () => {
      
        const titulo = 'Hola Darwin'
        const mensaje = 'Soy subtitulo'
        const { getAllByText } = render(<FirstApp titulo={ titulo } 
        mensaje={mensaje}
        />);
        expect( getAllByText(mensaje).length ).toBe(2);

    });
    
});
