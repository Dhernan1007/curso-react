import { describe, test, expect } from "@jest/globals";
import { getImagen } from "../../src/bases/11-async-await";

describe('Pruebas en 11-async-await.js', ()=>{

    test('getImagen debe retornar el URL de la imagen', async() => {
      
        const url = await getImagen();
        expect( typeof url ).toBe('string');
    });
    
});