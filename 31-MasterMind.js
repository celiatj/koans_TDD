
describe('31-MasterMind.js', () => {
  // ¿Has jugado alguna vez al MasterMind?
  // Es un juego para dos personas, en el que una elige una
  // combinación secreta de 4 colores en un orden concreto.
  // Y el otro jugador tiene que descubrir esa combinación,
  // para ello va diciendo combinaciones de colores en un orden
  // y el jugador con la combinación secreta le dice que cantidad de colores
  // ha colocado correctamente y cuántos están en la combinación secreta
  // pero en un lugar diferente (nunca indica que color es, solo la cantidad).
  // Vamos a ver un ejemplo de partida.
  // Combinación secreta: Rojo, Verde, Morado, Azul.
  // Primera combinación de prueba: Amarillo, Amarillo, Amarillo, Azul.
  // Respuesta: 1 color bien colocado.
  // Segunda combinación de prueba: Verde, Rojo, Amarillo, Amarillo.
  // Respuesta: 2 colores acertados.
  // Tercera combinación de prueba: Rojo, Morado, Verde, Azul.
  // Respuesta: 2 colores bien colocados y 2 acertados.
  // Cuarta combinación de prueba: Rojo, Verde, Morado, Azul.
  // Respuesta: 4 colores bien colocados.

  // Listas de colores... esto huele a Arrays ^^, recuerda que Javascript NO
  // comparar arrays, así que tendrás que implementarlo tu. Pero como siempre,
  // poco a poco, test a test.
  // Escribe aquí abajo tu código:


  it('está definido', () => {
    expect(MasterMind).not.toBeUndefined()
  })

  it('se puede crear', () => {

    const nuevaPartida = new MasterMind()

    expect(nuevaPartida instanceof MasterMind).toBe(true)
  })

  it('sabe cuando no se acierta ningún color', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Amarillo', 'Amarillo', 'Amarillo', 'Amarillo']
    const comparacion = partida.compara(combinacionDePrueba)

    const ningunAcierto = []
    expect(comparacion).toBe(ningunAcierto)
  })

  it('sabe cuando un color esta bien colocado', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Rosa', 'Rosa', 'Rosa', 'Azul']
    const comparacion = partida.compara(combinacionDePrueba)
    // Añadiremos la string 'bien colocado' por cada color bien colocado.
    expect(comparacion).toBe(['bien colocado'])
  })

  it('sabe cuando dos colores están bien colocados', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Rojo', 'Rosa', 'Rosa', 'Azul']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['bien colocado', 'bien colocado'])
  })

  it('sabe cuando tres colores están bien colocados', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Rojo', 'Verde', 'Rosa', 'Azul']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['bien colocado', 'bien colocado', 'bien colocado'])
  })

  it('sabe cuando cuatro colores están bien colocados', () => {
    const combinacionSecreta = ['Rosa', 'Rosa', 'Rosa', 'Rosa']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Rosa', 'Rosa', 'Rosa', 'Rosa']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['bien colocado', 'bien colocado', 'bien colocado', 'bien colocado'])
  })

  it('sabe cuando acierta un color, aunque no esté en el mismo lugar', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Amarillo', 'Rojo', 'Amarillo', 'Amarillo']
    const comparacion = partida.compara(combinacionDePrueba)
    // Añadiremos la string 'acierto' por cada color acertado, pero en la posición incorracta.
    expect(comparacion).toBe(['acierto'])
  })

  it('sabe cuando acierta dos colores, aunque no esté en el mismo lugar', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Verde', 'Rojo', 'Amarillo', 'Amarillo']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['acierto', 'acierto'])
  })

  it('sabe cuando acierta tres colores, aunque no esté en el mismo lugar', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Verde', 'Rojo', 'Amarillo', 'Morado']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['acierto', 'acierto', 'acierto'])
  })

  it('sabe cuando acierta cuatro colores, aunque no esté en el mismo lugar', () => {
    const combinacionSecreta = ['Rojo', 'Verde', 'Morado', 'Azul']
    const partida = new MasterMind(combinacionSecreta)

    const combinacionDePrueba = ['Verde', 'Rojo', 'Azul', 'Morado']
    const comparacion = partida.compara(combinacionDePrueba)

    expect(comparacion).toBe(['acierto', 'acierto', 'acierto', 'acierto'])
  })

  it('BONUS TRACK: Vamos a jugar una partida', () => {
    // Si lo tienes todo bien hecho, esto saldrá grátis o cambiando muy poco ^^
    const partida = new MasterMind(['Rojo', 'Amarillo', 'Morado', 'Lila'])

    let combinacionDePrueba = ['Amarillo', 'Verde', 'Azul', 'Rosa']
    expect(partida.compara(combinacionDePrueba)).toBe(['acierto'])
    combinacionDePrueba = ['Verde', 'Azul', 'Rojo', 'Amarillo']
    expect(partida.compara(combinacionDePrueba)).toBe(['acierto', 'acierto'])
    combinacionDePrueba = ['Rojo', 'Negro', 'Verde', 'Amarillo']
    expect(partida.compara(combinacionDePrueba)).toBe(['bien colocado', 'acierto'])
    combinacionDePrueba = ['Rojo', 'Amarillo', 'Lila', 'Negro']
    expect(partida.compara(combinacionDePrueba)).toBe(['bien colocado', 'bien colocado', 'acierto'])
    combinacionDePrueba = ['Rojo', 'Amarillo', 'Lila', 'Morado']
    expect(partida.compara(combinacionDePrueba)).toBe(['bien colocado', 'bien colocado', 'acierto', 'acierto'])
    combinacionDePrueba = ['Rojo', 'Amarillo', 'Morado', 'Lila']
    expect(partida.compara(combinacionDePrueba)).toBe(['bien colocado', 'bien colocado', 'bien colocado', 'bien colocado'])
    // I WIN!!!!! xDDDD
  })
})
