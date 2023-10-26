
describe('19-MasCosasOpcionales.js', () => {
  // Bueno... No sabía cuándo meter esto y hoy decidí, que es el día ^^
  // Vamos a ver unas cuantas operaciones matemáticas que ya sabes hacer, pero
  // de una manera aunque MUY común de hacer estas operaciones en programación
  // no es tan común en el día a día.
  it('incrementar cantidades', () => {
    // Ahoramismo ya sabes sumar valores, pero en programación hay diferentes
    // formas de sumar y restar... ¿Cómo se te ha quedado el body?
    let unValorCualquiera = 10
    // Esta es la manera que ya conoces de incrementar un valor (aunque no lo
    // supieras)
    unValorCualquiera = unValorCualquiera + 5
    // No tiene trampa... es una suma.
    expect(unValorCualquiera).toBe(RellenameCorrectamente)

    let otroValorCualquiera = 10
    // Sin embargo, puede que esta no la conozcas ;P
    otroValorCualquiera += 5

    // ¿Que piensas?
    expect(unValorCualquiera === otroValorCualquiera).toBe(RellenameCorrectamente)
    // El += es como incrementar el valor que ya tenemos en la cantidad que
    // le indicamos.
  })

  it('incrementar de uno en uno', () => {
    let unValorCualquiera = 10
    let otroValorCualquiera = 10
    let unValorCualquieraMas = 10

    unValorCualquiera = unValorCualquiera + 1
    otroValorCualquiera += 1
    unValorCualquieraMas ++

    expect(unValorCualquiera).toBe(RellenameCorrectamente)
    expect(otroValorCualquiera).toBe(RellenameCorrectamente)
    expect(unValorCualquieraMas).toBe(RellenameCorrectamente)

    unValorCualquieraMas ++
    // Aquí lo tienes, otra manera de incrementar.
    expect(unValorCualquieraMas).toBe(RellenameCorrectamente)
  })

  it('reducir cantidades ^^', () => {
    let unValorCualquiera = 10
    let otroValorCualquiera = 10

    // Repetimos, pero restando.
    unValorCualquiera = unValorCualquiera - 5
    otroValorCualquiera -= 5

    expect(unValorCualquiera === otroValorCualquiera).toBe(RellenameCorrectamente)
  })

  it('reduciendo cantidades de uno en uno', () => {
    // ¡Venga! del tirón.
    let unValorCualquiera = 10

    unValorCualquiera --

    expect(unValorCualquiera).toBe(RellenameCorrectamente)
  })
  // Aunque ya no existen el **, ni el //, ni el %%...
  it('también se pueden acumular otras operaciones', () => {
    // Multiplicación
    let unValorCualquiera = 10

    unValorCualquiera *= 10

    expect(unValorCualquiera).toBe(RellenameCorrectamente)
    // División
    let otroValorCualquiera = 100

    otroValorCualquiera /= 10

    expect(otroValorCualquiera).toBe(RellenameCorrectamente)
    // Y modularizar (Me acabo de inventar el nombre, espero que sea así ;)
    let unValorCualquieraMas = 1000

    unValorCualquieraMas %= 10

    expect(unValorCualquieraMas).toBe(RellenameCorrectamente)
  })
})
