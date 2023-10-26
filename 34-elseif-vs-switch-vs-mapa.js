
describe('34-elseif-vs-switch-vs-mapa.js', () => {
  // Aviso importante: Esta koan puede hacer que parezca un ser maligno ^^
  // Después de estar unas cuantas koans usando if elseif else. Vamos a ver
  // un par de alternativas. Primero vamos a refrescar.
  it('if elseif else', () => {
    // Para todos los ejemplos vamos a usar una funciones que te sonarán
    // de la kata MarsRover.
    const girarALaIzquierda = function(direccionActual) {
      let nuevaDireccion = ''

      if (direccionActual === 'Norte') {
        nuevaDireccion = 'Oeste'
      } else if (direccionActual === 'Oeste') {
        nuevaDireccion = 'Sur'
      } else if (direccionActual === 'Sur') {
        nuevaDireccion = 'Este'
      } else if (direccionActual === 'Este') {
        nuevaDireccion = 'Norte'
      }

      return nuevaDireccion
    }
    // Posiblemente la implementación que tienes de esta funcionalidad
    // sea algo parecido. Pero no pasa nada si es muy diferente,
    // mientras funcione.
    expect(girarALaIzquierda('Norte')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Oeste')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Sur')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Este')).toBe(RellenameCorrectamente)
  })
  // Ahora vamos a implementar la misma funcionalidad pero con el switch
  it('usando switch por primera vez', () => {
    // Aquí voy a crear la misma función que antes, con la misma funcionalidad
    // pero en lugar de usar la declaración del "if" voy a usar la declaración
    // del "switch".
    // ¿Cómo funciona el switch?
    // Pues recibe un valor y va comparando el valor recibido, con el valor
    // esperado por cada caso y cuando encuentra un caso que es igual al
    // valor recibido empieza a ejecutar todo el código que se encuentra
    // después de ese caso hasta que se encuentra un "break" o acaba el
    // bloque de código del switch (recordar que un bloque de código
    // es todo lo que hay entre llaves {})
    const girarALaIzquierda = function(direccionActual) {
      let nuevaDireccion = ''
      // La declaración del switch es la siguiente.
      switch (direccionActual) {
        case 'Norte':
          nuevaDireccion = 'Oeste'
          break
        case 'Oeste':
          nuevaDireccion = 'Sur'
          break
        case 'Sur':
          nuevaDireccion = 'Este'
          break
        case 'Este':
          nuevaDireccion = 'Norte'
          break
      }

      return nuevaDireccion
    }

    expect(girarALaIzquierda('Norte')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Oeste')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Sur')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Este')).toBe(RellenameCorrectamente)
    // Mucha gente encuentra muy interesante el "switch" pero como muchas
    // cosas en la programación, un gran poder conlleva una gran responsabilidad.
    // En este caso solo hay 4 opciones con 4 "break", que como la palabra dice,
    // rompe/corta la ejecución del bloque de código en 4 puntos, pero cuando
    // empieza a hacerse más y más grande, el código se hace difícil de seguir.
    // Con el "if else if" escribimos más, pero se lee el de la siguiente manera:
    // SI es NORTE, iguala a OESTE, SINO SI es OESTE iguala a SUR...
    // Con el switch se lee:
    // Cuando recibo OESTE, miro mi primer caso y es NORTE, igualó a OESTE y
    // paro de ejecutar. No es el primer caso, miro el segundo es OESTE,
    // igualó a SUR y cortó la ejecución.
    // El primero es "lenguaje" de persona, el segundo es lenguaje más como
    // "máquina".
    // También el segundo es más difícil de seguir, porque usa los "breaks"
    // para cortar la ejecución y tiene que haber un "break" por caso.
    // Para que veas otro motivo a parte de la semántica de porque puede
    // tener más dificultades el switch que el "if else if".
    // Vamos a implementar girar a la derecha, pero por ERROR se me va a olvidar
    // un "break".
    const girarALaDerecha = function(direccionActual) {
      let nuevaDireccion = ''

      switch (direccionActual) {
        case 'Norte':
          nuevaDireccion = 'Este'
          break
        case 'Este':
          nuevaDireccion = 'Sur'
          // Ups... se me paso, sin querer queriendo xD
        case 'Sur':
          nuevaDireccion = 'Oeste'
          // Ups... otra vez...
        case 'Oeste':
          nuevaDireccion = 'Norte'
          break
      }

      return nuevaDireccion
    }

    expect(girarALaDerecha('Norte')).toBe(RellenameCorrectamente)
    expect(girarALaDerecha('Este')).toBe(RellenameCorrectamente)
    // O.o
    // Como dije, cuando un caso coincide, sigue ejecutando hasta
    // que se encuentra un "break" o acaba el bloque de código.
    expect(girarALaDerecha('Sur')).toBe(RellenameCorrectamente)
    expect(girarALaDerecha('Oeste')).toBe(RellenameCorrectamente)
    // Pero como siempre, yo casi no gasto el "switch" (sin ánimo de condicionar tu
    // decisión de usarlo o no ;), pero por ahora, tu gasta
    // lo que más fácil te sea. De hecho te animo a que vayas a cualquiera de las
    // katas del MarsRover y la vuelvas a hacer usando el switch. Con el tiempo
    // decidirás que es lo mejor para ti y otras personas que lean tu código ^^
    // Para que lo sepas en otros lenguajes de programación el "switch" diferente
    // y más fácil de usar, porque cada caso tiene un "bloque de código" y no necesita
    // breaks. Pero ahora estamos con Javascript.
  })
  // Ahora es donde puede que pienses que soy la encarnación del mismo mal,
  // si no lo has hecho con el switch ^^
  it('EL MAPA', () => {
    // Aunque Javascript diferencia entre un diccionario y un mapa,
    // son prácticamente iguales y yo voy a usar algo que ya conoces como un
    // mapa. Ya hize un poco de spoiler, un diccionario se puede usar para
    // MAPEAR una CLAVE a un VALOR :)
    // Entonces, vamos a implementar girar a la izquierda con un mapa.
    const girarALaIzquierda = function(direccionActual) {
      const giroALaDerechaDesde = {
        Norte: 'Oeste',
        Oeste: 'Sur',
        Sur: 'Este',
        Este: 'Norte',
      }

      const nuevaDireccion = giroALaDerechaDesde[direccionActual]
      return nuevaDireccion
    }
    // ... No se porque de repente tengo un tridente y alas rojas xDDD
    expect(girarALaIzquierda('Norte')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Oeste')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Sur')).toBe(RellenameCorrectamente)
    expect(girarALaIzquierda('Este')).toBe(RellenameCorrectamente)
    // Aquí lo que hacemos es usar el diccionario para decir que cuando
    // vayamos a girar a la izquierda la clave Norte significa Oeste,
    // la clave Oeste significa Sur... Sinceramente, es mi manera favorita
    // de solucionar estos problemas, pero cuidado: algunas veces
    // puede complicarnos la vida y mucho. Aunque te recomiendo que uses cualquiera
    // de las katas de MarsRover que hiciste y apliques el mapa donde puedas ^^
  })
  // Ups... ¿y estos cuernecitos que han aparecido en mi frente? O.o
})
