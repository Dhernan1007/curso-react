import { describe, expect, test } from "@jest/globals";
import { getHeroeByIdAsync } from "../../src/bases/09-promesas";

describe('Pruebas en 09-promesas', ()=>{
    test('getHeroeByIdAsync debe de retornar un héroe', (done)=>{

        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero =>{
            expect(hero).toEqual({ 
                id: 1, 
                name: 'Batman', 
                owner: 'DC' 
            });
            done();
        })
    });

    test('getHeroeByIdAsync debe de retornar un error si el héroe no éxiste', (done)=>{

        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error =>{
            expect( error ).toBe(`No se pudo encontrar el héroe con el ID ${id}`);
            done();
        });
    });
});

/*
describe('', ()=>{
    test('', ()=>{

        expect()
    });
});


describe('', ()=>{
    test('', ()=>{

        expect()
    });
});
*/