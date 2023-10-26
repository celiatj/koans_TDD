
describe('23-Bucles.js', () => {
  // Los bucles ejecuta un bloque de código "{}" mientras se cumpla una
  // condición. Hay diferentes maneras de escribir un bucle, vamos a ver esas
  // maneras y al mismo tiempo ver cómo funcionan exactamente.
  it('while', () => {
    // El bucle "while" es como un "if", pero que ejecuta el bloque de código
    // mientras se cumpla la condición que le pasen.
    let contador = 0
    // Para empezar vamos a hacer que el contador se incremente hasta llegar a 5.
    while (contador < 5) {
      contador += 1
    }

    expect(contador).toBe(RellenameCorrectamente)
    // ¡Bien! Ha ido incrementando 1 a 1 el contador, que es lo que tiene bloque
    // de código. Hasta que se ha dejado de cumplir la condición del "while", que
    // ha sido cuando llega a 5.
    // Otro while... Ahora va a ir acumulando el valor del contador en una string.
    let unaString = ''
    contador = 0

    while(contador <= 9) {
      unaString += contador
      contador ++ // ^^
    }

    expect(contador).toBe(RellenameCorrectamente)
    // Como cambia la cosa de un "mayor que" a un "mayor o igual que" ;P
    expect(unaString).toBe(RellenameCorrectamente)
    // Ahora otro... que solo guarde los números pares.
    unaString = ''
    contador = 0

    while(contador < 10) {
      const esContadorPar = (contador % 2) === 0
      if (esContadorPar) {
        unaString += contador
      }
      contador  = contador + 1 // xDD
    }

    expect(unaString).toBe(RellenameCorrectamente)
    expect(contador).toBe(RellenameCorrectamente)
    // Por ahora parece que tiene utilidad, pero tampoco se le ve como una gran cosa.
    // Te prometo, que esto lo vas a gastar, seguramente no con while. Pero los bucles
    // son muy comunes en el día a día de la programación.
    // Recuerdas ¿cuandó acediamos a los caracteres de una string por su posición? ^.-
    const esUnaVocal = function(character) {
      return 'aeiou'.includes(character)
    }
    let cantidadDeVocales = 0
    unaString = 'una string con un monton de caracteres'
    let posicionActual = 0
    const ultimaPosicionDelString = unaString.length - 1 // Recuerda que las posiciones cuentan
    // desde 0 y la función length cuenta desde 1. Por eso usar una resta.
    // Aunque si no le restamos uno. En la condición podríamos usar "<" en lugar de "<="
    // y funcionaría igual.
    while (posicionActual <= ultimaPosicionDelString) {
      const caracterActual = unaString.charAt(posicionActual) // También se puede usar "[]"

      if (esUnaVocal(caracterActual)) {
        cantidadDeVocales += 1
      }

      posicionActual += 1
    }

    expect(ultimaPosicionDelString).toBe(RellenameCorrectamente)
    expect(posicionActual).toBe(RellenameCorrectamente)
    expect(cantidadDeVocales).toBe(RellenameCorrectamente)
  })

  it('DIY: While edition', () => {
    // En mi trabajo usamos una herramienta para transformar frases en
    // nombres que se puedan usar en GIT como nombre de rama.
    // Si no sabes que es GIT, olvida la frase anterior xD
    // Lo que hace la herramienta a grandes rasgos, es poner en minúsculas
    // todas las letras y cambiar los espacios en blaco por "-" a este proceso
    // le llamamos UGLIFICAR... hacer fea una frase ^^
    // Escribe aquí tu función.


    // Recuerda pasa los tests uno a uno, leer bien los expects y los errores.
    expect(uglify).not.toBeUndefined()
    // Solucionar el siguiente es muy fácil.
    expect(uglify('UnAStrinGSinEsPacioS')).toBe('unastringsinespacios')
    // Haciendo memoría esta también es sencilla.
    expect(uglify('una stringconunesPaciO')).toBe('una-stringconunespacio')
    // Esta ya sin usar un "while" y solo con lo enseñado en estas Koans
    // es imposible de resolver. (¡NO VALE BUSCAR EN INTERNET!)
    expect(uglify('una strIng coN mUchos esPacios En bLanco')).toBe('una-string-con-muchos-espacios-en-blanco')
    // BONUS TRACK!!!!! Cambia los '-' originales por '_' (Toma emojis ;)
    expect(uglify('El partido acabo 10-9 ¡AJUSTADISIMO!')).toBe('el-partido-acabo-10_9-¡ajustadisimo!')
    // Solo por asegurar ^^
    expect(uglify('Este partido han ganado 10-9 y el anterior quedaron empate 9-9')).toBe('este-partido-han-ganado-10_9-y-el-anterior-quedaron-empate-9_9')
  })

  it('for', () => {
    // ¿Recuerdas este bucle?
    let contador = 0
    while (contador < 5) {
      contador += 1
    }
    // Ejecuta el bloque 5 veces.
    expect(contador).toBe(RellenameCorrectamente)
    // Ahora usando "for" en lugar de "while"
    contador = 0

    for (let contadorDelFor = 0; contadorDelFor < 5; contadorDelFor ++) {
      contador += 1
    }
    // ¡Tachan!
    expect(contador).toBe(5)
    // La diferencia es que el for define su propio contador,
    // después la condición para ejecutar el bucle y lo que
    // se quiere ejecutar cuando termine el bloque, todo en
    // una línea. Dependiendo de la situación yo uso uno u otro.
    // Por ahora tu ves usando el que más cómodo te sea. Aunque es
    // mucho más común ver "for" en lugar de "while".

    // Por ejemplo, para el caso de contar vocales hubiera usado "for",
    // porque el contador no lo necesito para nada fuera del bucle.
    // Vamos a ver como queda:
    const esUnaVocal = function(character) {
      return 'aeiou'.includes(character)
    }
    let cantidadDeVocales = 0
    unaString = 'una string con un monton de caracteres'
    for (let posicionActual = 0; posicionActual < unaString.length; posicionActual += 1) {
      const caracterActual = unaString[posicionActual] // También se puede usar "charAt" ^^

      if (esUnaVocal(caracterActual)) {
        cantidadDeVocales += 1
      }
    }

    expect(cantidadDeVocales).toBe(RellenameCorrectamente)
    // Pero decide tú lo que más fácil te sea de entender.
  })

  it('DIY: for edition', () => {
    // Dictador mode on: Aquí sólo puedes usar "for", nada de "while" ^^
    // Vas a crear una función que compara dos strings y nos diga
    // cuantos caracteres tienen en la misma posición.


    expect(cuentaCaracteres).not.toBeUndefined()
    expect(cuentaCaracteres('unaString', '          ')).toBe(0)
    expect(cuentaCaracteres('', 'unaString')).toBe(0)
    expect(cuentaCaracteres('0123456789', '9876543210')).toBe(0)
    expect(cuentaCaracteres('0123456789', '01234')).toBe(5)
    expect(cuentaCaracteres('otraString', 'otherString')).toBe(2)
    expect(cuentaCaracteres('    String', 'otraString')).toBe(6)
    expect(cuentaCaracteres('otraString', 'otraString')).toBe(10)
    expect(cuentaCaracteres('anotherString', 'anotherString')).toBe(13)
    // BONUS TRACK! Sé que estas palabras ya dan miedo... xDD
    expect(cuentaCaracteres('BONUS TRACK!', 'bonus track!')).toBe(12)
    expect(cuentaCaracteres('BoNUs TrAcK!', 'boNuS tRacK!')).toBe(12)
    // Yo de ti, tendría papel higiénico a mano...
    // MEGA BONUS TRACK!!!!!! ;P
    expect(cuentaCaracteres(undefined, 'MeGA boNuS tRacK!')).toBe(0)
    expect(cuentaCaracteres('MEGA BONUS TRACK!')).toBe(0)
  })

  it('for of', () => {
    // Calma. Esto no es como el "if else", "for of" es otro tipo de "for".
    // De echo, "for" es un bucle y "for of" es un iterador (espero que tuvieras
    // extra de papel higiénico a mano) ^^
    // Voy a intentar explicarlo por escrito. Un iterador ejecuta un bloque de código
    // por cada elemento de una colección (Espero, que tuvieras todo el rollo a mano ;)
    // Por ahora solo conoces una colección y son las Strings. Que son colecciones de
    // caracteres. Ahora te estarás preguntando, cuántos tipos de colecciones existen xD
    // Poco a poco.
    // Vamos a ver unos ejemplos de "for of":
    const esUnaVocal = function(character) {
      return 'aeiou'.includes(character)
    }
    let cantidadDeVocales = 0
    unaString = 'una string con un monton de caracteres'
    for(let caracterActual of unaString) {
      // Va recorriendo los caracteres que hay dentro de la variable
      // "unaString" y se los va asignando a la variable "caracterActual".
      // Si "unaString" tiene los caracteres "abc", ejecuta el bloque asignando
      // "a" a la variable "caracterActual", luego asignando "b" y por último
      // asignando "c"
      if (esUnaVocal(caracterActual)) {
        cantidadDeVocales += 1
      }
    }

    expect(cantidadDeVocales).toBe(RellenameCorrectamente)
    // Este ejemplo te va a encantar.
    const uglify = function(frase) {
      let result = ''

      for(let caracter of frase) {
        if (caracter === ' ') {
          result += '-'
        } else if (caracter === '-') {
          result += '_'
        } else {
          result += caracter.toLowerCase()
        }
      }

      return result
    }

    expect(uglify).not.toBeUndefined()
    expect(uglify('UnAStrinGSinEsPacioS')).toBe(RellenameCorrectamente)
    expect(uglify('una stringconunesPaciO')).toBe(RellenameCorrectamente)
    expect(uglify('una strIng coN mUchos esPacios En bLanco')).toBe(RellenameCorrectamente)
    expect(uglify('El partido acabo 10-9 ¡AJUSTADISIMO!')).toBe(RellenameCorrectamente)
    expect(uglify('Este partido han ganado 10-9 y el anterior quedaron empate 9-9')).toBe(RellenameCorrectamente)
  })

  it('DIY: for of deluxe edition', () => {
    // Dictador mega on: Aquí sólo puedes usar "for on".
    // Crea una función que cuente las consonantes en una string ^^
    // Escribe aquí tu función:
    // 'bcdfghjklmnñpqrstvxzwy' ^^


    expect(cuentaConsonantes).not.toBeUndefined()
    expect(cuentaConsonantes('')).toBe(0)
    expect(cuentaConsonantes('aeiou')).toBe(0)
    const todasLasConsonantes = 'bcdfghjklmnñpqrstvxzwy'
    expect(cuentaConsonantes(todasLasConsonantes)).toBe(22)
    expect(cuentaConsonantes(todasLasConsonantes + todasLasConsonantes)).toBe(44)
    expect(cuentaConsonantes('en algún lúgar de la mancha,')).toBe(13)
    expect(cuentaConsonantes('de cuyo nombre no quiero acordarme')).toBe(15)
    // Bonus track ;P
    expect(cuentaConsonantes()).toBe(0)
    // Me ha contado un pajarito: que este iterador es más rápido que otros.
    // A lo que conteste: El día que tenga un problema de velocidad en
    // mi aplicación, ya me preocuparé de eso. Por ahora usare lo que más
    // semántica aporte ^^
  })
  // A partir de aquí ya puedes usar el bucle que quieras.
  // Dictador mode off (TEMPORALLY)
})
