
describe('21-StringsEpisodioII.js', () => {
  // Strings Episodio II: El ataque de los carácteres.

  // Bueno pues ahora que sabemos que existen los objetos
  // y que las Strings es uno de esos objetos. Puede que
  // podamos hacer algo más interesantes con ellas, a parte
  // de guardar caracteres.
  // Por si no sabes que es un caracter, son: todas las letras,
  // números (dentro de un string :) y caracteres especiales (|@€#¬~...).
  // Y una string puede contener, ninguno, uno o varios caracteres.
  it('sabe la cantidad de caracteres que contiene', () => {

    const unaStringDeDiezCaracteres = '1234567890'

    expect(unaStringDeDiezCaracteres.length).toBe(RellenameCorrectamente)
    // ¿Coincidirá la cantidad de caracteres con su "length"? ^^
    const otraString = new String()
    // ¿Recuerdas cómo era una nueva string? ;)
    expect(otraString.length).toBe(RellenameCorrectamente)
  })

  it('sabe la si contiene otra string', () => {
    const unaString = 'una string con cosas'

    let contieneLaSubString = unaString.includes('una string')

    expect(contieneLaSubString).toBe(RellenameCorrectamente)

    contieneLaSubString = unaString.includes('otra string')

    expect(contieneLaSubString).toBe(RellenameCorrectamente)

    contieneLaSubString = unaString.includes('cosas')

    expect(contieneLaSubString).toBe(RellenameCorrectamente)
  })

  it('puede reemplazar un trozo de la string por otro trozo', () => {
    const unaStringCualquiera = 'una string cualquiera'

    const unaStringReemplazada = unaStringCualquiera.replace('una', 'otra')

    expect(unaStringReemplazada).toBe(RellenameCorrectamente)
    // Pero cuidado, cuando a la función "replace" de string como primer
    // argumento le pasa otra string, solo sustituye la primera ocurrencia.
    // Keep calm... (Respira, pero en moderno)
    // Ejemplo:
    const contienePalabrasRepetidas = 'repetida repetida'

    const noContienePalabrasRepetidas = contienePalabrasRepetidas.replace('repetida', 'no')

    expect(noContienePalabrasRepetidas).toBe(RellenameCorrectamente)
    // Más adelante veremos maneras de que las reemplace todas.
  })

  it('puede transformar todos los caracteres en mayúsculas', () => {
    const algunasMinusculas = 'algunasMinúsculas ^^'

    const todoEnMayusculas = algunasMinusculas.toUpperCase()

    expect(todoEnMayusculas).toBe(RellenameCorrectamente)
    // Puedes imaginarte ¿como saber si una string esta en mayúsculas?
    const estaEnMayusculas = function(string) {
      const stringEnMayusculas = string.toUpperCase()
      // Recuerda este momento:
      return (stringEnMayusculas === string)
    }

    expect(estaEnMayusculas('unaString')).toBe(RellenameCorrectamente)
    expect(estaEnMayusculas('OTRASTRING')).toBe(RellenameCorrectamente)
  })

  it('puede transformar todos los caracteres en minúsculas', () => {
    const stringEnMayusculas = 'STRING_EN_MAYÚSCULAS'

    const stringEnMinusculas = stringEnMayusculas.toLowerCase()
    // Fácil, ¿no?
    expect(stringEnMinusculas).toBe(RellenameCorrectamente)
  })

  it('puede concatenar strings', () => {
    // En nuestro idioma... que suma strings, nada que no supiéramos.
    const unaString = 'unaString'
    const otraString = 'otraString'

    const stringConcatenada = unaString.concat(otraString)

    expect(stringConcatenada).toBe(RellenameCorrectamente)
  })

  it('puede trimmearse', () => {
    // ¿No sabes que significa "trimmearse"?...
    // Normal xDD Viene de Trim en Inglés, que significa ajustar.
    // En programación: Quita los espacios en blanco, del principio y del
    // final de la string.
    // Ejemplo:
    const stringConEspaciosEnBlanco = '     s t tings con e spacios    '

    const stringTrimmeada = stringConEspaciosEnBlanco.trim() // xDD

    expect(stringTrimmeada).toBe(RellenameCorrectamente)
  })

  it('sabe el carácter que tiene en una posición en concreta', () => {
    // En el caso de las Strings la posición de un carácter, se le conoce
    // como índice (index en Inglés)
    const indiceDelPrimerCaracter = 0
    const unaStringCualquiera = '1234567890'

    const primerCaracter = unaStringCualquiera.charAt(indiceDelPrimerCaracter)
    // Con la función "charAt" nos da el caracter en esa posición
    expect(primerCaracter).toBe(RellenameCorrectamente)
    // Si, la primera posición no es el ÍNDICE 1, es el ÍNDICE 0
    // Esto te puede hacer reventar la cabeza. Pero solo te digo una cosa,
    // si te parece raro... te acostumbraras xDDD
    const ultimaPosicion = (unaStringCualquiera.length - 1)
    // ¿Qué, porque menos uno? porque el length te dice la cantidad de caracteres
    // contando desde uno. Y la posición empieza "contando" desde cero.
    expect(unaStringCualquiera.charAt(ultimaPosicion)).toBe(RellenameCorrectamente)
    // Va un poco de práctica, que en el futuro esto te será muy, muy útil.
    expect(unaStringCualquiera.charAt(3)).toBe(RellenameCorrectamente)
    expect(unaStringCualquiera.charAt(6)).toBe(RellenameCorrectamente)
    // ¿Qué pasará si usamos un índice que está fuera del rango?
    expect(unaStringCualquiera.charAt(123123132131)).toBe(RellenameCorrectamente)
    // Interesante la string ^^
  })

  it('sabe el carácter que tiene en una posición en concreta', () => {
    // ¡¿Dos tests seguidos con el mismo nombre?!
    // Si, porque hay dos maneras. La de antes es la que más me gusta
    // a mi... Pero la siguiente es la más común.
    const indiceDelPrimerCaracter = 0
    const unaStringCualquiera = '1234567890'

    const primerCaracter = unaStringCualquiera[indiceDelPrimerCaracter]

    expect(primerCaracter).toBe(RellenameCorrectamente)

    const ultimaPosicion = (unaStringCualquiera.length - 1)
    expect(unaStringCualquiera[ultimaPosicion]).toBe(RellenameCorrectamente)
    expect(unaStringCualquiera[3]).toBe(RellenameCorrectamente)
    expect(unaStringCualquiera[6]).toBe(RellenameCorrectamente)
    expect(unaStringCualquiera[123123132131]).toBe(RellenameCorrectamente)
    // Ahh... pues, puede que tengan alguna diferencia los "[]" con el "charAt".
  })

  it('puede cortar un string por su índice', () => {
    // Pues eso, puedes generar una SUBSTRING a partir de una string.
    const unaStringCualquiera = '0123456789'

    const subString = unaStringCualquiera.substring(3)

    expect(subString).toBe(RellenameCorrectamente)
    // ¿Qué piensas que ocurriría, si le pasamos dos indices? ^^
    const otraSubString = unaStringCualquiera.substring(3, 7)

    expect(otraSubString).toBe(RellenameCorrectamente)
    // Lo se, lo se. ¿Por qué incluye el primer índice y no el segundo?
    // Seguro que hay una gran razón, pero para otro día xDD
  })
  // Ufff... Mira que el título de la Koan era gracioso, pero lo que ha costado
  // llegar al final ;)
  // Pues hay un episodio más xDDDD Aunque lejano queda.
})
