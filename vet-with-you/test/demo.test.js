describe('Pruebas en <DemoComponent />', ()=> {

    test("Hola, estamos haciendo pruebas :)", () => {
        //Inicialización
        const msg1= "hola mundo"
        //Estímulo
        const msg2= msg1.trim( )
        //Observación
        expect(msg1).toBe(msg2)
    })
    
})
