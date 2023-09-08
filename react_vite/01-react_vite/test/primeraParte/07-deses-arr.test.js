import { describe, expect, test } from "@jest/globals"
import { retornaArreglo } from "../../src/bases/07-deses-arr"

describe('pruebas en 07-deses-arr', ()=>{
    test('debe de retornar un string y un número',
    ()=>{
        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe('ABC');
        // el toBe tambien evalúa el tipo de dato
        // expect( numbers ).toBe('123'); --> esto iría mal, caería en error
        expect( numbers ).toBe(123);

        //le indico el tipo de dato que espero
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect( letters ).toStrictEqual( expect.any(String) );
    })
})