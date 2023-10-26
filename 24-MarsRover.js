
describe('24-MarsRover.js', () => {
  // La MarsRover uno de mis katas favoritas ^^
  // Esta Kata trata de programar el sistema de conducción de uno de los
  // Rovers que se mandan a Marte. El problema en realidad es sencillo,
  // pero la implementación se puede convertir en algo muy divertido.
  // Si, si, he puesto sencillo ^^
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
  // al sur, etc... Nota: Que no se te olvide que se le puede dar una COLECCIÓN
  // de comandos.
  // Pasa, test a test y lee atentamente tanto los tests como los errores.
  // Escribe tu clase adí abajo:


  it('existe', () => {
    expect(MarsRover).not.toBeUndefined()
    // ¡Fácil!
  })

  it('puede aterrizar', () => {
    // Hay maneras mucho más semánticas de hacer esto, pero por ahora a lo que conoces.
    const marsRover = new MarsRover()

    expect(marsRover instanceof MarsRover).toBe(true)
  })

  it('conoce la posición X donde aterriza', () => {
    const posicionX = 10

    const marsRover = new MarsRover(posicionX)

    expect(marsRover.x).toBe(posicionX)
  })

  it('conoce la posición Y donde aterriza', () => {
    const posicionX = 10
    const posicionY = 2

    const marsRover = new MarsRover(posicionX, posicionY)

    expect(marsRover.y).toBe(posicionY)
  })

  it('conoce la dirección hacia donde mira al aterrizar', () => {
    const posicionX = 10
    const posicionY = 2
    const puntoCardinal = 'Norte'

    const marsRover = new MarsRover(posicionX, posicionY, puntoCardinal)

    expect(marsRover.direccion).toBe(puntoCardinal)
  })

  it('ejecuta las ordenes que se le pasan', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const ningunaOrden = ''

    marsRover.ejecutarOrdenes(ningunaOrden)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Norte')
  })
  // ¡Guay! Poco a poco y cada cambio que hagas, tira los test para ver
  // si ese cambio hace lo que querías que hiciera.
  it('se mueve en el eje Y cuando avanza mirando al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const ordenDeMoverHaciaDelante = 'm'

    marsRover.ejecutarOrdenes(ordenDeMoverHaciaDelante)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(2)
    expect(marsRover.direccion).toBe('Norte')
  })
  // ¡Perfecto!
  it('se mueve más en el eje Y cuando avanza varias veces mirando al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const avanzarDosVeces = 'mm'

    marsRover.ejecutarOrdenes(avanzarDosVeces)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(3)
    expect(marsRover.direccion).toBe('Norte')
  })

  it('se mueve en el eje X cuando avanza mirando al Este', () => {
    const marsRover = new MarsRover(1, 1, 'Este')

    marsRover.ejecutarOrdenes('m')

    expect(marsRover.x).toBe(2)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Este')
  })
  // Puff... De ti, empezaría a mirar puestos de trabajo en la NASA ^^
  it('se mueve más en el eje X cuando avanza varias veces mirando al Este', () => {
    const marsRover = new MarsRover(1, 1, 'Este')

    marsRover.ejecutarOrdenes('mm')

    expect(marsRover.x).toBe(3)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Este')
  })

  it('se mueve en el eje X cuando avanza mirando al Oeste', () => {
    const marsRover = new MarsRover(1, 1, 'Oeste')

    marsRover.ejecutarOrdenes('m')

    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Oeste')
  })

  it('se mueve en el eje Y cuando avanza mirando al Sur', () => {
    const marsRover = new MarsRover(1, 1, 'Sur')

    marsRover.ejecutarOrdenes('m')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direccion).toBe('Sur')
  })
  // ¿Qué tal? Un descansito, un poco de agua y a seguir ^^ Todo lo que necesitas
  // están en las Koans que ya hiciste. Si te bloqueas, intenta escribir en un papel
  // lo que piensas, cuéntale a otra persona lo que tienes en la cabeza (aunque no
  // sepa de programación), el simple hecho de exteriorizar lo puede hacer que encuentres
  // la solución.
  // Espero no llegar tarde ;P
  // ¡Vamos a conseguir que gire como una peonza!
  it('gira al Oeste cuando se le ordena girar a la izquierda mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const ordenDeGirarALaIzquierda = 'i'

    marsRover.ejecutarOrdenes(ordenDeGirarALaIzquierda)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Oeste')
  })

  it('gira al Sur cuando se le ordena girar dos veces a la izquierda mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')

    marsRover.ejecutarOrdenes('ii')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Sur')
  })

  it('gira al Este cuando se le ordena girar tres veces a la izquierda mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')

    marsRover.ejecutarOrdenes('iii')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Este')
  })

  it('mira al mismo punto cuando hace un giro completo por la izquierda', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const giroCompletoALaIzquierda = 'iiii'

    marsRover.ejecutarOrdenes(giroCompletoALaIzquierda)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Norte')
  })
  // Esto está casi listo para mandar a Marte ;P Pero ¡cuidado! por ahora
  // solo hemos pasado un máximo de 4 órdenes, pero en cualquier momento
  // puede aparecer un test que le pase 100 ó 1000 ó 10000.....
  // Lo digo por si no estás usando un bucle o un iterador para recorrer las órdenes ^^
  it('gira al Este cuando se le ordena girar a la derecha mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')
    const ordenDeGirarALaDerecha = 'd'

    marsRover.ejecutarOrdenes(ordenDeGirarALaDerecha)

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Este')
  })
  // ¿Te imaginas lo que viene? ;P
  it('gira al Sur cuando se le ordena girar dos veces a la derecha mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')

    marsRover.ejecutarOrdenes('dd')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Sur')
  })

  it('gira al Oeste cuando se le ordena girar tres veces a la derecha mientras mira al Norte', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')

    marsRover.ejecutarOrdenes('ddd')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Oeste')
  })

  it('mira al mismo punto cuando hace un giro completo por la derecha', () => {
    const marsRover = new MarsRover(1, 1, 'Norte')

    marsRover.ejecutarOrdenes('dddd')

    expect(marsRover.x).toBe(1)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('Norte')
  })
  // Ready for fun?
  it('la prueba de fuego...', () => {
    const marsRover = new MarsRover(12, 31, 'Sur')

    marsRover.ejecutarOrdenes('dimmmdmmimmi')

    expect(marsRover.x).toBe(10)
    expect(marsRover.y).toBe(26)
    expect(marsRover.direccion).toBe('Este')

    marsRover.ejecutarOrdenes('mmimdmimdmd')

    expect(marsRover.x).toBe(14)
    expect(marsRover.y).toBe(28)
    expect(marsRover.direccion).toBe('Sur')
  })
  // Ya puedes ir a celebrarlo y a contale a todo el mundo lo que has programado ^^
  // Aunque siempre podemos hacer un ¡BONUS TRACK!
  it('BONUS TRACK: ...', () => {
    // ¡Va! ¿No fue suficiente?
    expect('El bonus track para otro día, ahora a descansar ^^').toBe(RellenameCorrectamente)
  })
})
