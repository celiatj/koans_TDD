
describe('33-MarsRoverTurbo.js', () => {
  // Vuelve el MarsRover pero... ahora... ¡TURBO EDITION! ;)
  // En realidad va a ser como la MarsRover que ya hiciste, pero
  // esta vez, en lugar da recibir tres parámetros (x, y, dirección)
  // recibira un diccionario con esas tres claves. Y en lugar de pretuntarle
  // por su atributo "x", "y" y "dirección", devolverá un diccionario con esas
  // tres claves. Te voy a copiar el problema para que no tengas que cambiar de
  // archivo.
    // EL PROBLEMA:
  // El Rover empieza aterrizando en una posición X, Y e mirando a un punto cardinal.
  // Entonces al Rover se puede pueden dar una secuencia de comandos entre los que
  // se encuentra, avanzar, girar a la izquierda 90 grados y girar a la derecha
  // 90 grados.
  // Entonces si el Rover aterriza en la posición X: 1, Y: 1 y mirando al Norte.
  // Si le damos la orden de avanzar, se moverá un punto al norte, lo que hará
  // que incremente Y en un punto.
  // Si le damos la orden de girar a la derecha 90 grados, se quedará mirando al
  // al este. Y si le hubiéramos dicho que girara a la izquierda 90 grados, se
  // hubiera quedado mirando al oeste y si girara otra vez, se quedaría mirando
  // al sur, etc...
  // Pasa, test a test y lee atentamente tanto los tests como los errores.
  // Escribe tu clase adí abajo:


  it('existe', () => {
    expect(MarsRoverTurbo).not.toBeUndefined()
  })

  it('puede instanciarse', () => {

    const marsRover = new MarsRoverTurbo()

    expect(marsRover instanceof MarsRoverTurbo).toBe(true)
  })
  // Vamos a prácticar un poco la famosa semántica de la que tanto hablo.
  it('puede aterrizar', () => {

    const marsRover = MarsRoverTurbo.aterrizaEn()
    // Esto esta hecho ya en alguna koan... static... static... ^^
    expect(marsRover instanceof MarsRoverTurbo).toBe(true)
  })

  it('conoce la posición donde aterriza', () => {
    const posicionInicial = { x: 10, y: 2, direccion: 'N' }

    const marsRover = MarsRoverTurbo.aterrizaEn(posicionInicial)

    expect(marsRover.posicionActual()).toBe(posicionInicial)
  })

  it('ejecuta las ordenes que se le pasan', () => {
    const posicionInicial = { x: 10, y: 2, direccion: 'N' }
    const marsRover = MarsRoverTurbo.aterrizaEn(posicionInicial)
    const ningunaOrden = []

    marsRover.ejecutarOrdenes(ningunaOrden)

    expect(marsRover.posicionActual()).toBe(posicionInicial)
  })
  // ¿No copies de la otra vez? prueba a hacer la kata desde cero y compara con lo
  // que hiciste, que luego te haré una pregunta.
  it('se mueve en el eje Y cuando avanza mirando al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })
    const ordenDeMoverHaciaDelante = ['m']

    marsRover.ejecutarOrdenes(ordenDeMoverHaciaDelante)

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 2, direccion: 'N' })
  })

  it('se mueve más en el eje Y cuando avanza varias veces mirando al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })
    const avanzarDosVeces = ['m', 'm']

    marsRover.ejecutarOrdenes(avanzarDosVeces)

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 3, direccion: 'N' })
  })

  it('se mueve en el eje X cuando avanza mirando al Este', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'E' })

    marsRover.ejecutarOrdenes(['m'])

    expect(marsRover.posicionActual()).toBe({ x: 2, y: 1, direccion: 'E' })
  })
  // Cuidado hay alguna raza alienigena que se empieza a interesar por tu código xD
  it('se mueve más en el eje X cuando avanza varias veces mirando al Este', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'E' })

    marsRover.ejecutarOrdenes(['m', 'm'])

    expect(marsRover.posicionActual()).toBe({ x: 3, y: 1, direccion: 'E' })
  })

  it('se mueve en el eje X cuando avanza mirando al Oeste', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'O' })

    marsRover.ejecutarOrdenes(['m'])

    expect(marsRover.posicionActual()).toBe({ x: 0, y: 1, direccion: 'O' })
  })

  it('se mueve en el eje Y cuando avanza mirando al Sur', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'S' })

    marsRover.ejecutarOrdenes(['m'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 0, direccion: 'S' })
  })
  // Recuerda, descansar un poquito, hidratate, mira al cielo, etc... ^^
  it('gira al Oeste cuando se le ordena girar a la izquierda mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })
    const ordenDeGirarALaIzquierda = ['i']

    marsRover.ejecutarOrdenes(ordenDeGirarALaIzquierda)

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'O' })
  })

  it('gira al Sur cuando se le ordena girar dos veces a la izquierda mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['i', 'i'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'S' })
  })

  it('gira al Este cuando se le ordena girar tres veces a la izquierda mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['i', 'i', 'i'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'E' })
  })

  it('mira al mismo punto cuando hace un giro completo por la izquierda', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['i', 'i', 'i', 'i'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'N' })
  })

  it('gira al Este cuando se le ordena girar a la derecha mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })
    const ordenDeGirarALaDerecha = ['d']

    marsRover.ejecutarOrdenes(ordenDeGirarALaDerecha)

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'E' })
  })
  // ¡Vamos! Que no queda casi nada.
  it('gira al Sur cuando se le ordena girar dos veces a la izquierda mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['d', 'd'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'S' })
  })

  it('gira al Oeste cuando se le ordena girar tres veces a la derecha mientras mira al Norte', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['d', 'd', 'd'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'O' })
  })

  it('mira al mismo punto cuando hace un giro completo por la derecha', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 1, y: 1, direccion: 'N' })

    marsRover.ejecutarOrdenes(['d', 'd', 'd', 'd'])

    expect(marsRover.posicionActual()).toBe({ x: 1, y: 1, direccion: 'N' })
  })

  it('El momento de la verdad...', () => {
    const marsRover = MarsRoverTurbo.aterrizaEn({ x: 12, y: 31, direccion: 'S' })

    marsRover.ejecutarOrdenes(['d','i','m','m','m','d','m','m','i','m','m','i'])

    expect(marsRover.posicionActual()).toBe({ x: 10, y: 26, direccion: 'E' })

    marsRover.ejecutarOrdenes(['m','m','i','m','d','m','i','m','d','m','d'])

    expect(marsRover.posicionActual()).toBe({ x: 14, y: 28, direccion: 'S' })
  })
  // Antes de seguir viene la pregunta que te dije, ¿has comparado el códgio que hiciste
  // la vez anterior con el que estas haciendo? ¿mejor? ¿peor?... y no te preguntas...
  // ¡¿Cómo he acabado haciendo esto?! xD
  it('BONUS TRACK: Puede volar', () => {
    // ¡Es una broma!, esto para otro día :P
    expect('El bonus track para otro día, ahora a descansar ^^').toBe(RellenameCorrectamente)
  })
})
