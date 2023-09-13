import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string.js', ()=> {
    test('Prueba 01 debe retornar "Hola Fernando"', ()=> {
            const name = "Fer"
            const message = getSaludo(name)
            expect(message).toBe(`Hola ${name}`)
    })
})