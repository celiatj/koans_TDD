
describe('38-LanzarYCapturarErrores.js', () => {
  // Errores... como todo en la vida... la programación también los tiene ^^
  // ¿Recuerdas en algún momento que se te cerrará una aplicación de golpe?
  // Pues eso ocurrió porque la aplicación lanzo un error, estos errores se lanzan
  // para indicar que ha ocurrido algo inesperado o no contemplado y la aplicación
  // no quiere/sabe manejar esas situaciones.

  // Un ejemplo. Hacemos un programa que le pasamos el tamaño de los lados
  // de un triángulo y nos dice que tipo de triángulo es. Y usando el programa
  // sin querer le pasamos un tamaño de cero y como no puede existir un triángulo
  // sin uno de sus lados, pues nos devolvería un error y se terminaría.
  // Entonces, no puedo enseñarte a lanzar errores, si no te enseño a capturarlos
  // primero, porque si no se cerraría el programa xDD
  it('Capturando y lanzando errores', () => {
    // Vamos a prepararnos unas variables para jugar un poco ;)
    let unaVariable = 'valor inicial'
    let otraVariable = 'valor inicial'
    let otraVariableMas = 'valor inicial'
    // "try" captura los errores que ocurre en su bloque de código y le pasa ese
    // error al catch de modo informativo, por si quiere reaccionar a unos errores
    // y a otro de otra manera.
    try {
      unaVariable = 'el principio del try'
      throw 'Así se lanza un error y se corta la ejecución'
      otraVariable = 'el fin del try'
    } catch (error) {
      // Y catch es donde decimos qué hacer cuando salte un error, que puede
      // ser, no hacer nada. Pero vamos a hacer algo ^^
      otraVariableMas = 'Estuve en un catch'
    }

    expect(unaVariable).toBe(RellenameCorrectamente)
    expect(otraVariable).toBe(RellenameCorrectamente)
    expect(otraVariableMas).toBe(RellenameCorrectamente)
    // Esta vez el error fue una string, pero se puede usar lo que quieras como error,
    // aunque de normal se usan las clases de error.
  })

  it('¿qué tipos existen?', () => {
    // Aquí tienes la lista ^^
    // EvalError
    // RangeError
    // ReferenceError
    // SyntaxError
    // TypeError
    // URIError
    // Lo más importante de todo, fijate que todos acaban con la palabra "Error",
    // es una convención de casi todos los lenguajes de programación que todos los
    // errores tienen que acabar con ese nombre y heredar de la clase Error.

    const unError = new SyntaxError('Aquí va un mensaje de error')
    // vamos a desgranarlo un poco ^^
    expect(unError instanceof Error).toBe(true)
    // Vale cumple todas las condiciones.
    expect(unError.message).toBe(RellenameCorrectamente)
  })

  it('se puede capturar y reaccionar dependiendo del error', () => {
    let queValorAcabareTeniendo = 'Ya se verá'

    try {
      throw new ReferenceError()
      queValorAcabareTeniendo = '¿Será este?'
    } catch (error) {
      if (error instanceof ReferenceError) {
        queValorAcabareTeniendo = '¿O este?'
      } else {
        queValorAcabareTeniendo = '¿Y que hay de este?'
      }
    }
    expect(queValorAcabareTeniendo).toBe(RellenameCorrectamente)
  })

  it('DIY: Coloca tu los errores', () => {
    // Aquí solo tienes que lanzar errores en el lugar que tu
    // pienses que tiene que estar para que el expect pase.
    let unaVariable = 'valor inicial'
    let otraVariable = 'valor inicial'

    try {
      unaVariable = 'valor dentro del try'
      otraVariable = 'valor dentro del try'
    } catch(error) {
      unaVariable = 'valor dentro del catch'
    }

    expect(unaVariable).toBe('valor dentro del catch')
    expect(otraVariable).toBe('valor inicial')
    unaVariable = 'valor inicial'
    otraVariable = 'valor inicial'

    try {
      unaVariable = 'valor dentro del try'
      otraVariable = 'valor dentro del try'
    } catch(error) {
      if (error instanceof Error) {
        otraVariable = 'valor dentro del catch'

      } else {
        unaVariable = 'valor dentro del catch'
      }
    }

    expect(unaVariable).toBe('valor inicial')
    expect(otraVariable).toBe('valor dentro del catch')
  })
})
