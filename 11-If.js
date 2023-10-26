
describe('11-If.js', () => {
  // El "if" ejecuta un bloque de código si la condición que
  // se le pasa es verdadera (true)
  // ¿Qué tal la cabeza? ^^
  // Normal, cuando termines el archivo vuelve aquí y verás que
  // ya lo entiendes.
  it('así es un "if"', () => {
    let aquiVaLaCondicionVerdadera = true
    let cambiaraEsteValor = '¿Cambiará este valor?'
    // Así se escribe un "if"
    if(aquiVaLaCondicionVerdadera) {
      cambiaraEsteValor = 'Como la condición es verdadera, cambiará ^^'
    }
    // Así lo escribimos: Sí, la condición entre paréntesis es true,
    // se ejecutará el código escrito entre llaves (llaves curvas {}).

    // Claro está que si la condición es falsa (false), no pasa nada.

    // Y así lo leeremos en voz alta: Sí, la condición es verdadera,
    // le cambiara el valor a la variable.

    // Entonces, ¿qué valor tendrá la variable de abajo?
    expect(cambiaraEsteValor).toBe(RellenameCorrectamente)
  })
  // Vamos a hacer un par más y luego haremos cosas muy chulas con esto ;)
  it('vamos a probar más cosas con el "if"', () => {
    let unValor = 'unValor'
    // Sí, la mitad de 10 es igual a 5, cambiara el valor a 10
    // Nota, aquí la condición es: (la mitad de 10 es igual a 5)
    if((10/2) === 5) {
      // Empiezas a ver ¿por qué son tan importantes los booleanos?
      unValor = 10
    }

    expect(unValor).toBe(RellenameCorrectamente)
    // ¡Más!
    unValor = 100
    // Ahora si el valor es igual a 10 cambiará la variable
    if (unValor === 10) {
      // ¿Lo hará?
      unValor = 10
    }

    expect(unValor).toBe(RellenameCorrectamente)
    // Otra
    unValor = '¿Somos iguales?'
    // Ahora si el valor es igual a una string (concreta) cambiará el valor
    if(unValor === '¿Somos iguales?') {
      unValor = unValor + unValor
    }
    expect(unValor).toBe(RellenameCorrectamente)
    // Ahora algo más difícil y más preparación
    let esPar = function(unNumero) { return (unNumero % 2) === 0 }
    unValor = 'Es impar'
    // Aquí vale todo ^^ Solo tiene que acabar valiendo verdadero o falso
    if(esPar(4)) {
      unValor = 'Es par'
    }

    expect(unValor).toBe(RellenameCorrectamente)
  })
  // Ahora, tu.
  it('rellena correctamente', () => {
    let unValor = 'BRO'
    // Rellena la condición entre paréntesis para que ejecute el código
    // en el bloque de código entre llaves (¿Te suena?)
    if(false) {
      unValor = 'DIY'
    }

    expect(unValor).toBe('DIY')

    // Ahora rellena el valor entre paréntesis para que no se ejecute
    // en el bloque de código entre llaves
    if(true) {
      unValor = 'No existe ignorancia, sólo existe conocimiento.'
    }

    expect(unValor).toBe('DIY')
    // Subamos el nivel
    // cambia el valor de una de las variables,
    // para que se ejecute el código del "if"
    let unNombre = 'Charlie'
    let otroNombre = 'Akira'
    if(unNombre === otroNombre) {
      unValor = 'WOW'
    }

    expect(unValor).toBe('WOW')
    // ¡A tope!
    let ladosDeUnCuadrado = 4
    // ¿Qué habrá que cambiar?
    if(ladosDeUnCuadrado === 40) {
      unValor = ladosDeUnCuadrado
    }

    expect(unValor).toBe(4)
    // La última
    let alturaDeCharlie = 1.58
    let alturaDeAkira = 1.78
    let alturaDeMax = 1.58
    unValor = 'Alguien es más alto'
    // Esta condición significa que SI todos son igual de altos, se ejecutara el
    // el bloque entre llaves. Cambia el valor de las variables para que
    // esto ocurra
    if((alturaDeCharlie === alturaDeAkira) && (alturaDeAkira === alturaDeMax)) {
      unValor = 'Todos son igual de altos'
    }

    expect(unValor).toBe('Todos son igual de altos')
  })
  // Ahora vamos a empezar a programar a SKYNET ^^
  it('DIY', () => {
    // Vas a escribir una función, que recibe
    // un nombre (string) y devuelve otra string saludando
    // al nombre que recibe (Aquí aún no usaras el "if")
    // Tu función va aquí abajo


    expect(saluda('Akira')).toBe('Saludos Akira')
    expect(saluda('Charlie')).toBe('Saludos Charlie')
    // Ahora modifica tu función para SÍ recibe un nombre vacío
    // salude a un desconocido (Aquí si usaras el "if")
    expect(saluda('')).toBe('Saludos desconocido')
    // ¿Como va? Inspira... Expira...
    // Ahora crea una función que SÍ recibe un número par
    // DEVUELVA la string "es par" y SÍ es impar DEVUELVE
    // "es impar"
    // Tu función va aquí abajo


    expect(esPar(2)).toBe('es par')
    expect(esPar(228)).toBe('es par')
    expect(esPar(123)).toBe('es impar')
    expect(esPar(212314325)).toBe('es impar')
    // ¿Sabías qué 0 es impar? xDD
    // Nota: Puedes usar todos los ifs que quieras dentro de una función,
    // hay varias maneras de solucionarlo.
    expect(esPar(0)).toBe('es impar')
    // Estás haciendo cosas serias
  })
  // En la siguiente vas a hacer una Kata de código.
  // ¿Quieres saber que es una Kata de código? ^^
})
