import { describe, test,expect } from "@jest/globals";
import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', ()=>{

    test('getHeroeById debe de retornar un héroe por ID', ()=> {

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
    })
})
describe('Pruebas en 08-imp-exp', ()=>{

    test('getHeroeById debe de retornar undefined si no existe', ()=> {

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toBeFalsy();
    })
})

/* 
Tarea:
* Debe de retornar un arreglo con los héroes de DC
* Length === 3
* toEqual al arreglo filtrado

* Debe de retornar un arreglo con los héroes de Marvel
* length === 2

*/

describe('Debe retornar un arreglo con los héroes de DC', ()=>{

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', ()=>{

        const owner = 'DC'
        const allHeroDC = getHeroesByOwner(owner);
                
        expect( allHeroDC ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
    })
    test('getHeroesByOwner debe de retornar la longitud del arreglo con los héroes de DC igual a 3', ()=>{

        const owner = 'DC'
        const allHeroDC = getHeroesByOwner(owner);
        console.log(allHeroDC);
        
        expect( allHeroDC.length ).toBe(3);
    })
})

describe('Debe de retornar un arreglo con los héroes de Marvel', ()=>{

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', ()=>{
    const owner = 'Marvel';
    const allHeroMarvel = getHeroesByOwner(owner);
    console.log(allHeroMarvel);

    //otra forma de hacerlo --> LA RECOMENDADA
    expect( allHeroMarvel ).toEqual(heroes.filter( (heroe)=> heroe.owner === owner))
 })
 test('getHeroesByOwner debe de retornar la longitud del arreglo con los héroes de Marvel igual a 2',()=>{
    const owner = 'Marvel';
    const allHeroMarvel = getHeroesByOwner(owner);

    expect( allHeroMarvel.length ).toBe(2);
 })
})