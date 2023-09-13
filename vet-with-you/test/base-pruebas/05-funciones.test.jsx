import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', ()=> {
    test('Prueba 05 en getUser debe retornar un objeto', ()=> {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        console.log(user)
        expect(testUser).toEqual(user)
    })
    test('Prueba 05 en getUsuarioActivo debe retornar el mismo usuario', ()=> {
        const name = "Fernando"
        const user = getUsuarioActivo(name)
        console.log(user)
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})