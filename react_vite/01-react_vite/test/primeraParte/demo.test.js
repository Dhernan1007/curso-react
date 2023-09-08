import {describe, expect, test} from '@jest/globals';
describe('Puebas en <DemoComponet/>', () => {
  



test('Esta prueba no debe fallar',()=>{
   
    // 1. inicializacion 
    const message1 = 'Hola mundo'

    // 2. estimulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento... esperado
    expect( message1 ).toBe( message2 );

});
});
/*
expect: es como un if
toBe: es como un igual
*/