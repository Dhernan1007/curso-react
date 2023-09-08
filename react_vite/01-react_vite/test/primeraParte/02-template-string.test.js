import {describe, expect, test} from '@jest/globals';
import { getSaludo } from "../../src/bases/02-template-string";

describe('Purebas en 02-template-string', () => {
  
    test('getSaludo debe de retornar "Hola Darwin"', ()=>{

        const name = 'Darwin';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`)
        
    });

});
