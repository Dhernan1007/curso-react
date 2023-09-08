import { describe, test, expect } from "@jest/globals";
import { getUser } from "../../src/bases/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
    const user = getUser();
    console.log(user);

    // si se usa toBe en el manejo de un objeto el test dará error
    expect( testUser ).toStrictEqual( user );
    })
})

/**si voy a evaluar objetos no debo usar:
 * @toBe ya que Js aunque dos objetos sean aparentemente iguales
 * apuntan a espacios de memorias distintos.
 * @toStrictEqual sería lo correcto a usar en caso de evaluar objetos
 */