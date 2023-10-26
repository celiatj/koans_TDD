
describe('27-StringsEpisodioIII.js', () => {
  // Strings Episodio III: La venganza de los NaN
  // (En un rato, sabrás que es NaN ;)
  // Ahora, a las Strings.

  it('puede crear una array donde cada carácter sea un elemento', () => {
    let unaString = '0123456789'

    let unaArray = unaString.split('')
    // Split es una función que tienen las strings, que le permite "partir"
    // la string en elementos de una array, por un separador, pero si el
    // separador es una string vacía, separa carácter a carácter.
    expect(unaArray).toBe(RellenameCorrectamente)
    // Aunque esto anterior lo podríamos hacer recorriendo la string con un "for of"
    // y guardandonos cada caracter en una array ^^
    unaArray = unaString.split()
    // Si no se le indica ningún separador toda la string pasa a ser
    // un elemento de la array :( no parece muy útil.
    expect(unaArray).toBe(RellenameCorrectamente)
    unaString = 'a,b,c,d,e,f,g,h,...'

    unaArray = unaString.split(',')
    // Si le indicas un separador...
    expect(unaArray).toBe(RellenameCorrectamente)

    unaString = 'a,b-c,d-e,f,g-h,...'

    unaArray = unaString.split(',', '-')
    // ¿Qué pasará si se le indican múltiples separadores?
    expect(unaArray).toBe(RellenameCorrectamente)
    // Ups... parece que no funciona muy bien. Y sí probamos...
    unaArray = unaString.split(',-')
    // ¿Qué pasará si se le indican múltiples separadores?
    expect(unaArray).toBe(RellenameCorrectamente)
    // Ok, decidido, no se le pueden pasar múltiples separadores.
    // Ahora viene el pero. ¡PERO...! Si te dijera que hay una cosa
    // espcial que se le llama REGEX con la que podemos hacerlo

    // Ya le dedicaremos un rato a esto de las REGEX, por ahora
    // que sepas que existen y cómo se ven ^^
    const regexParaEncontrarGuionesOComas = /-|,/
    // No, no es un emoji.
    unaArray = unaString.split(regexParaEncontrarGuionesOComas)

    expect(unaArray).toBe(RellenameCorrectamente)
    // Las REGEX o expresiones regulares, son algo muy muy potente,
    // pero algo muy muy complejo. Personalmente, las evito, pero hay
    // momentos, que te pueden salvar la vida ^^. Ya las veremos.
  })

  it('puede reemplazar un trozo de la string por otro trozo', () => {
    // Esto ya lo vimos en episodios anteriores ^^ pero se dejó claro
    // que solo sustituye la primera ocurrencia...
    const unaString = 'a,b,c,d,e,f,g,h,...'
    // Vamos a probar solo por recordar
    let nuevaString = unaString.replace(',', ' ')

    expect(nuevaString).toBe(RellenameCorrectamente)
    // Parece que es cierto, solo cambia la primera ocurrencia que encuentra.
    const regexParaEncontrarComas = /,/g
    // ¿Y con una regex? ¿Cambiará todas las ocurrencias?
    nuevaString = unaString.replace(regexParaEncontrarComas, ' ')

    expect(nuevaString).toBe(RellenameCorrectamente)
    // Pero como no nos manejamos muchos con la expresiones regulares
    // podemos usar la siguiente función.
    nuevaString = unaString.replaceAll(',', ' ')

    expect(nuevaString).toBe(RellenameCorrectamente)
  })

  it('si contiene un número entero, puede "transformase" a entero', () => {
    // Lo de "transformarse" es por la parte que viene al final del test.
    const stringConUnEntero = '1'

    let entero = parseInt(stringConUnEntero)
    // Parsea una string a un Integer. Parsear, convertir, adaptar...
    expect(entero).toBe(RellenameCorrectamente)

    const stringConMuchosNumero = '13212328'

    entero = parseInt(stringConMuchosNumero)

    expect(entero).toBe(RellenameCorrectamente)

    let stringConNumerosYLetras = '1a9'

    entero = parseInt(stringConNumerosYLetras)

    expect(entero).toBe(RellenameCorrectamente)
    // Interesante...
    stringConNumerosYLetras = '19a6'

    entero = parseInt(stringConNumerosYLetras)

    expect(entero).toBe(RellenameCorrectamente)
    // Solo transforma los números que se encuentra hasta la primera letra.
    // Y si probamos a...
    stringConNumerosYLetras = 'a196'

    const resultadoIncierto = parseInt(stringConNumerosYLetras)
    // Esto se va a poner muy, muy tenso.
    // Te adelanto, que no sabe convertir esta última string en un número.
    // Lo que devuelve es NaN (que son las siglas de not a number) y NaN
    // es un tipo de valor bastante peculiar por lo siguiente.
    expect(NaN === NaN).toBe(RellenameCorrectamente)
    // Entonces...
    expect(resultadoIncierto === NaN).toBe(RellenameCorrectamente)
    // la única manera de saber si algo es NaN es usando la función isNaN
    expect(isNaN(NaN)).toBe(RellenameCorrectamente)
    expect(isNaN(6)).toBe(RellenameCorrectamente)
    expect(isNaN(resultadoIncierto)).toBe(RellenameCorrectamente)
    // Ves como no mentía ^^ Y dejamos la explicación de NaN, solo que sepas
    // que alguna vez te encuentras un NaN es porque de alguna manera, estas
    // intentando transformar algo a un número y Javascript no puede.
    // Algo normal cuando intentas convertir "pepe1976" a número.
  })

  it('si contiene un número decimal, puede "transformase" a decimal', () => {
    // Decimal === Float
    // Como puedes imaginar, esto es igual que el parseInt, pero para floats.
    const stringConUnDecimal = '5.8'

    let decimal = parseFloat(stringConUnDecimal)

    expect(decimal).toBe(RellenameCorrectamente)

    const stringConUnDecimalYTerminadoEnLetra = '3.48a'

    decimal = parseFloat(stringConUnDecimalYTerminadoEnLetra)

    expect(decimal).toBe(RellenameCorrectamente)

    const stringConUnDecimalYUnaLetra = '6.3a8'

    decimal = parseFloat(stringConUnDecimalYUnaLetra)

    expect(decimal).toBe(RellenameCorrectamente)

    const stringConUnDecimalEmpezandoConLetra = 'a6.38'

    decimal = parseFloat(stringConUnDecimalEmpezandoConLetra)

    expect(isNaN(decimal)).toBe(RellenameCorrectamente)
    // Todo igual que el parseInt.
  })

  it('si contiene un número, puede "transformase" a número', () => {
    // Ahora verás la diferencia entre transformar de Integer/Float a Number.
    // Number es el tipo de valor que puede ser Integer o Float. Vamos a probar.
    const stringConUnEntero = '1'

    let entero = Number(stringConUnEntero)
    // Parsea una string a un Integer. Parsear, convertir, adaptar...
    expect(entero).toBe(RellenameCorrectamente)

    const stringConMuchosNumero = '13212328'

    entero = Number(stringConMuchosNumero)

    expect(entero).toBe(RellenameCorrectamente)

    let stringConNumerosYLetras = '1a9'

    entero = Number(stringConNumerosYLetras)

    expect(isNaN(entero)).toBe(RellenameCorrectamente)
    // O.o En cuanto tiene un carácter que no es un número, ¡PUM! NaN que te crió.
    const stringConUnDecimal = '6.38'

    let decimal = Number(stringConUnDecimal)

    expect(decimal).toBe(RellenameCorrectamente)

    const stringConUnDecimalEmpezandoConLetra = 'a6.38'

    decimal = Number(stringConUnDecimalEmpezandoConLetra)

    expect(isNaN(decimal)).toBe(RellenameCorrectamente)
    // Entonces las ventajas, son que puede convertir cualquier String
    // que contenga un número de verdad, porque los parse pueden
    // transformar cosas que no queremos. Y la otra diferencia es:
    const stringVacia = ''

    entero = Number(stringVacia)

    expect(entero).toBe(RellenameCorrectamente)
    // Esto puede ser útil o no. Depende de la situación ^^
    entero = parseInt(stringVacia)

    expect(isNaN(entero)).toBe(RellenameCorrectamente)

    decimal = parseInt(stringVacia)

    expect(isNaN(decimal)).toBe(RellenameCorrectamente)
  })

  it('DIY tu propia función de split', () => {
    // Pues vas a escribir una función que recibe dos argumentos
    // El primero será la String a partir y la segunda el separador
    // por el que queremos partir.
    // Escribe aquí abajo tu función:


    // El primero siempre fácil
    expect(miSplit).not.toBeUndefined()
    // ¡RECUERDA! No puedes usar el ".split" es hacer trampas.
    // Puedes recorrer la string e ir puseando uno a uno los caracteres a una...
    expect(miSplit('a-b-c-d', '-')).toBe(['a','b','c','d'])
    expect(miSplit('e-f-g-h', '-')).toBe(['e','f','g','h'])
    expect(miSplit('i*j*k*l', '*')).toBe(['i','j','k','l'])
    expect(miSplit('m n ñ o', ' ')).toBe(['m','n','ñ','o'])
    // ¡Hey, multa!, que te has saltado una letra, la dejamos para otro día ^^
    // ¡BONUS TRACK!
    expect(miSplit('abcd', '')).toBe(['a','b','c','d'])
    expect(miSplit('efgh', undefined)).toBe(['e','f','g','h'])
    expect(miSplit('ijkl')).toBe(['i','j','k','l'])
    // Si lo hiciste bien, estos anteriores salen gratis.
  })
})
// La verdad que estas Koans se llaman StringEpisodioIII pero vimos Strings,
// Arrays, NaN, Regex. Yo de ti me tomaba un descansito ^^
