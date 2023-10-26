
describe('28-StringsCalculator.js', () => {
  // La StringCanculator es una kata con un problema bastante sencillo
  // pero da mucho juego ;)
  // El problema es que nos van a pasar un texto con números y nosotros
  // tendremos que devolver el total de la suma de todos los números del texto.
  // Aquí vamos a la práctica, que tiene muchas "cositas".
  // Escribe aquí abajo tu clase:


  // Las fáciles primero
  it('está definida', () => {
    expect(MiString).not.toBeUndefined()
  })

  it('se puede construir', () => {

    const nuevaString = new MiString('unaStingCualquiera')

    expect(nuevaString instanceof MiString).toBe(true)
  })
  // Aquí empieza lo interesante ^^
  it('suma cero si se construye con una string vacía', () => {
    const stringVacia = ''
    const miString = new MiString(stringVacia)

    const total = miString.suma()

    expect(total).toBe(0)
  })

  it('suma el valor del número con el que se construye', () => {
    const miString = new MiString('1')
    // Recuerda el 20-Clases101.js y las variables de clase con this.
    // Yo, lo recuerdo... por si acaso ^^
    const total = miString.suma()

    expect(total).toBe(1)
  })

  it('suma el valor de los números con los que se construye', () => {
    const miString = new MiString('2,8')
    // Split, split, split... ^^
    const total = miString.suma()

    expect(total).toBe(10)
  })

  it('suma el valor de otros números con los que se construye', () => {
    const miString = new MiString('22,666')

    const total = miString.suma()

    expect(total).toBe(688)
  })

  it('suma el valor de más números con los que se contruye', () => {
    const miString = new MiString('2,2,62,6,6')

    const total = miString.suma()

    expect(total).toBe(78)
  })

  it('suma el valor de los números QUE PUEDE separar', () => {
    const miString = new MiString('2,2,6-2,6,6')

    const total = miString.suma()

    expect(total).toBe(16)
  })

  it('puede añadir nuevos separadores', () => {
    const miString = new MiString('2-25-6-6-6')

    miString.anyadirSeparador('-')

    expect(miString.suma()).toBe(45)
  })

  it('puede añadir más separadores', () => {
    const miString = new MiString('2*5*7*6')

    miString.anyadirSeparador('*')

    expect(miString.suma()).toBe(20)
  })

  it('separa por los separadores que se añaden más el por defecto ","', () => {
    // Este test, tiene lo más interesante de esta kata.
    // Aunque todo lo anterior ha estado bastante bien ^^
    const miString = new MiString('28-2,6-6,6')

    miString.anyadirSeparador('-')

    expect(miString.suma()).toBe(48)
  })

  it('separa por todos los separadores que se añaden más el por defecto', () => {
    const miString = new MiString('2-2,60/6,6')
    // Si el anterior te lo pensastes bien, este sale gratis ;P
    miString.anyadirSeparador('-')
    miString.anyadirSeparador('/')

    expect(miString.suma()).toBe(76)
  })
  // Por si hiciste algún hack, que no me fio ^^
  it('separa por todos los separadores que se añaden más el por defecto', () => {
    const miString = new MiString('22,6,"1=4-1')

    miString.anyadirSeparador('"')
    miString.anyadirSeparador('=')
    miString.anyadirSeparador('-')

    expect(miString.suma()).toBe(34)
  })

  it('BONUS TRACK!!!!!!!!!!!!!', () => {
    const miString = new MiString('2-2,60/6,6')

    miString.anyadirSeparador('-')

    expect(miString.suma()).toBe(10)

    miString.anyadirSeparador('/')

    expect(miString.suma()).toBe(76)
  })
})
