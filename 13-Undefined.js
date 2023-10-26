
describe('13-Undefined.js', () => {
  // Vuelta a conocer nuevos valores primitivos, que esto es fácil.
  // Si, si, es la primera vez que me refiero a ellos como valores
  // primitivos, estos son las strings, los números (integers y floats),
  // los booleanos, undefined y null (este último ya lo veremos).
  // Ya te puedes imaginar que pronto vendrán valores no primitivos ^^

  // Vale volviendo al tema del undefined, aunque ya lo hemos visto
  // un poco antes, vamos a dedicarle un rato así te recuperas un poco.
  // Undefined es el valor que nos podemos encontrar en diferentes ocasiones.
  it('lo encontramos cuando a una variable no se le asigna valor', () => {
    // Este lo vimos al principio, pero lo repasamos por si acaso ;P
    let variableSinDefinirleUnValor

    expect(variableSinDefinirleUnValor).toBe(RellenameCorrectamente)
  })

  it('también lo encontramos cuando una función no tiene return', () => {

    let funcionSinReturn = function() {
      // No tiene return
    }

    expect(funcionSinReturn()).toBe(RellenameCorrectamente)

    // O si tiene return, pero no dice que valor
    let funcionQueDevuelveNingunValor = function() {
      return
    }

    expect(funcionQueDevuelveNingunValor()).toBe(RellenameCorrectamente)
  })

  it('y también cuando no se le pasan los argumentos esperados a una función', () => {

    let unaFuncion = function(unArgumentoEsperadoPeroNoPasado) {
      return unArgumentoEsperadoPeroNoPasado
    }

    expect(unaFuncion()).toBe(RellenameCorrectamente)
  })
  // En bastante más ocasiones nos encontramos el valor undefined, pero ya las iremos
  // viendo. Ahora que sepas que existe.
  it('¿te imaginas si le pasaramos un undefined en la condición de un if?', () => {
    let unValor = 'valor original'

    if(undefined) {
      // Menudo melón abrimos con esto ;)
      unValor = 'valor cambiado'
    }

    expect(unValor).toBe(RellenameCorrectamente)

    if(undefined === false) {
      unValor = 'valor cambiado'
    }

    expect(unValor).toBe(RellenameCorrectamente)
    // CHA!!!! NA!!!!! Aquí vendría sonido de suspense, pero esto es leído,
    // así que imaginación.
    // ¿Qué es lo que ha pasado? Pues que si tratamos undefined, como una
    // operación booleana, Javascript la interpreta como un valor falso,
    // pero como valor primario unfedined y false, son diferentes.
    // Pasa lo mismo con todos los valores, PERO dependiendo del valor
    // se evalúa como verdadero o como falso. Los iremos probando casi todos.
  })
})
