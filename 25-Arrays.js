
describe('25-Arrays.js', () => {
  // Refresquemos:
  // En algún momento mencione, que tanto los Numbers, Strings, Null y algún
  // valor más, son valores primarios. Pues el Array es un tipo de valor y
  // NO es primario. Ahora mismo no es muy importante, solo para que lo sepas.
  // ¡PERO! En algún otro momento mencioné, que las Strings son colecciones
  // de caracteres. Pues, el Array es una colección de valores. Y ¿qué significa
  // esto de colección de valores? Pues eso, un Array es una colección que
  // puede contener 0, 1 o más valores. Es algo muy sencillo, en la práctica,
  // porque a nivel conceptual, es bastante duro xDD
  // ¡Pues a la práctica!
  it('conoce la cantidad de valores que contiene', () => {
    const unArrayConUnMontonDeValores = ['unValor', 'otro', true, 3, (10 === 11), class OtroMas {}]
    // El array en lugar de usar comillas para indicar donde empieza y acaba usa []
    // Los valores van separados por comas.
    // Y como puedes ver, cualquier cosa que puedas asignar a una variable
    // lo puedes introducir como un valor.
    const cantidadDeValores = unArrayConUnMontonDeValores.length
    // Lo del length... ¿no te suena de las strings?
    expect(cantidadDeValores).toBe(RellenameCorrectamente)
  })
  // Casi todo lo que puedes hacer con la String (colección de caracteres) lo puedes
  // hacer con la Array (colección de valores).

  it('sabe si contiene un valor concreto', () => {
    const unaArray = ['una', 'array', 'con', 'cosas', false, 11]
    // ¿Tienes la sensación de que me he copiado el test? xDDD
    let contieneElValor = unaArray.includes('una')

    expect(contieneElValor).toBe(RellenameCorrectamente)

    contieneElValor = unaArray.includes('otra')

    expect(contieneElValor).toBe(RellenameCorrectamente)

    contieneElValor = unaArray.includes(11)

    expect(contieneElValor).toBe(RellenameCorrectamente)
  })

  it('sabe el valor que tiene en una posición en concreta', () => {
    // Con las Strings se usaba "charAt" y con las Arrays más fácil, solo "at".
    const unaArray = ['primer elemento', 'segundo elemento', 'tercero', '...']

    const elementoEnLaPrimeraPosición = unaArray.at(0)
    // ¡Y sí!, Aquí también la primera posición es el 0 ^^
    expect(elementoEnLaPrimeraPosición).toBe(RellenameCorrectamente)
    expect(unaArray.at(1)).toBe(RellenameCorrectamente)
    expect(unaArray.at(2)).toBe(RellenameCorrectamente)
    expect(unaArray.at(3)).toBe(RellenameCorrectamente)
    expect(unaArray.at(3231231232)).toBe(RellenameCorrectamente)
    // Al igual que la String, si accedes a una posición/índice que no tiene ningún valor
    // devuelve undefined ^^
  })

  it('sabe el valor que tiene en una posición en concreta', () => {
    // Y sí, otra vez otro test con el mismo nombre ^^ Pero esta vez en lugar
    // de usar "at" también se puede usar []
    const unaArray = ['primer elemento', 'segundo elemento', 'tercero', '...']

    const elementoEnLaPrimeraPosición = unaArray[0]
    // ¡Y sí!, Aquí también la primera posición es el 0 ^^
    expect(elementoEnLaPrimeraPosición).toBe(RellenameCorrectamente)
    expect(unaArray[1]).toBe(RellenameCorrectamente)
    expect(unaArray[2]).toBe(RellenameCorrectamente)
    expect(unaArray[3]).toBe(RellenameCorrectamente)
    expect(unaArray[3231231232]).toBe(RellenameCorrectamente)
    // Aunque siempre digo que hay que usar la forma más semántica, l
  })

  it('sabe la posición de un valor', () => {
    const unaArray = ['primer elemento', 'segundo elemento', 'tercero', '...']

    let index = unaArray.indexOf('segundo elemento')
    // Antes le decíamos una posición y nos devolvía el valor, y ahora
    // le damos un valor y nos dice la posición.
    expect(index).toBe(RellenameCorrectamente)

    index = unaArray.indexOf('un valor que no existe')
    // Piensa antes de contestar ^^
    expect(index).toBe(RellenameCorrectamente)
    // No se si acertaste, pero yo no lo hubiera hecho xD
  })

  it('sabe cambiar el valor en una posición en concreto', () => {
    const unaArray = ['primer elemento', 'segundo elemento', 'tercero', '...']

    unaArray[0] = 'nuevo elemento'

    expect(unaArray).toBe(RellenameCorrectamente)
    // ¿Y si ponemos una posición donde no hay nada?
    unaArray[4] = 'otro nuevo elemento'

    expect(unaArray).toBe(RellenameCorrectamente)
    // Pues cambia undefined por ese valor ^^
  })

  it('sabe añadir un nuevo valor en la siguiente posición sin usar', () => {
    const unaArray = [0, 1, 2, 3]

    unaArray.push('nuevo valor')

    expect(unaArray).toBe(RellenameCorrectamente)
    // Ha esto se le conoce como pushear xD
    unaArray.push('otro nuevo valor')

    expect(unaArray).toBe(RellenameCorrectamente)

    unaArray.push('otro nuevo valor')
    unaArray.push('otro nuevo valor')
    unaArray.push('otro nuevo valor')
    unaArray.push('otro nuevo valor')

    expect(unaArray).toBe(RellenameCorrectamente)
    // Y hasta el infinito y más allá...
  })

  it('sabe quitar el último valor', () => {
    const unaArray = [0, 1, 2, 3, 4, 5, 6]

    unaArray.pop()

    expect(unaArray).toBe(RellenameCorrectamente)

    unaArray.pop()
    unaArray.pop()

    expect(unaArray).toBe(RellenameCorrectamente)
    // También devuelve el valor quitado / popeado ;)
    const valorQuitado = unaArray.pop()

    expect(unaArray).toBe(RellenameCorrectamente)
    expect(valorQuitado).toBe(RellenameCorrectamente)
  })

  it('sabe quitar el primer valor', () => {
    const unaArray = [0, 1, 2, 3, 4, 5, 6]

    unaArray.shift()

    expect(unaArray).toBe(RellenameCorrectamente)
    // También devuelve el valor quitado ;)
    const valorQuitado = unaArray.shift()

    expect(unaArray).toBe(RellenameCorrectamente)
    expect(valorQuitado).toBe(RellenameCorrectamente)
  })

  it('sabe concatenarse con otras arrays', () => {
    const unaArray = ['unValor']
    const otraArray = ['otroValor']

    const concatenacion = unaArray.concat(otraArray)

    expect(concatenacion).toBe(RellenameCorrectamente)
    // También se le puede pasar como argumentos a la función "concat",
    // un montón de valores en lugar de pasarle otra Array.
    const ortaConcatenacion = unaArray.concat('yOtro', 'yMas', '...')

    expect(ortaConcatenacion).toBe(RellenameCorrectamente)
  })

  it('sabe unir todos sus valores en una String', () => {
    // Despacito ^^
    const unaArray = ['unValor', 2, 3, false, class Clase {}]

    let unaString = unaArray.join()

    expect(unaString).toBe(RellenameCorrectamente)
    // Por defecto une con comas, pero se le puede indicar que String usar para unir.
    const otraString = unaArray.join('+')

    expect(otraString).toBe(RellenameCorrectamente)
    // Le puede pasar lo que quieras
    const otraStringMas = unaArray.join('mas')

    expect(otraStringMas).toBe(RellenameCorrectamente)
    // Hay otra manera de convertir a String, que si no queremos
    // indicarle un separador, es una manera más semántica.
    unaString = unaArray.toString()
    // Esta es mucho más semántica, pero menos "potente", porque no le puedes
    // indicar un separador.
    expect(unaString).toBe(RellenameCorrectamente)
  })
  // Queda poco ^^
  it('como casi todos los valores es un objeto', () => {
    // Aunque se puede intuir, por todas las funciones y la propiedad "length"
    // Yo solo recuerdo que los objetos/clases siguen entre nosotros ;)
    const unaNuevaArray = new Array()

    expect(unaNuevaArray).toBe(RellenameCorrectamente)

    unaNuevaArray.push('unValor')

    expect(unaNuevaArray).toBe(RellenameCorrectamente)

    const unaNuevaArrayConValores = new Array(0,1,2,3,4,5)

    expect(unaNuevaArrayConValores).toBe(RellenameCorrectamente)

    const unaNuevaArrayConUnaArray = new Array(['0','1','2'])

    expect(unaNuevaArrayConUnaArray.length).toBe(RellenameCorrectamente)
    // WHAT! ¿Habías llegado a pensar que un valor de una Array podría ser otra?
    expect(unaNuevaArrayConUnaArray[0]).toBe(RellenameCorrectamente)
    expect(unaNuevaArrayConUnaArray[0][0]).toBe(RellenameCorrectamente)
    // Y sí... esa array que contiene como uno de sus valores, otra array, a su vez
    // contuviera otra array... [0][0][0][0][0][0][0][0] = 'unValor'. Puede ocurrir ^^
  })
  // Al igual que la String se podía recorrer sus caracteres uno a uno, la Array
  // se puede recorrer sus valores uno a uno, todo igual que la String, pero por
  // si a estas alturas, no te fias vamos a verlo ¡CHALLENGE ACCEPTED!
  it('se puede iterar', () => {
    const gastos = [45, 34, 12, 7, 373]
    let cantidadTotalGastada = 0

    for(let gasto of gastos) {
      cantidadTotalGastada += gasto
    }
    // Esto da bastante juego ^^
    expect(cantidadTotalGastada).toBe(RellenameCorrectamente)
  })
  it('no sabe compararse con otras arrays', () => {
    // Ohh.... si, esto es un problema.
    const unaArray = [0,1,2,3,4]
    const otraArray = [0,1,2,3,4]

    let sonIguales = (unaArray === otraArray)

    expect(sonIguales).toBe(RellenameCorrectamente)
    // Y si... probamos con menos iguales ^^ el temido ==
    sonIguales = (unaArray == otraArray)

    expect(sonIguales).toBe(RellenameCorrectamente)
    // Pintaba bien, pero no. Por ahora para que tengas un truco
    // por si necesitas comparar dos arrays.
    sonIguales = (unaArray.toString() === otraArray.toString())

    expect(sonIguales).toBe(RellenameCorrectamente)
    // WoW! Esta es buena ^^, pero cuidado que los valores tienen que estar
    // exactamente en las mismas posiciones.
    const otraPeroDesordenada = [4,3,2,1,0]

    sonIguales = (unaArray.toString() === otraPeroDesordenada.toString())

    expect(sonIguales).toBe(RellenameCorrectamente)
  })
})
