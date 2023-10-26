
describe('42-PotterBooks.js', () => {
  // La famosa kata Potter, esta vez dejo el problema caer junto con
  // los tests, ya te apañas. Suerte ;P
  // EL PROBLEMON:
  // Para tratar de mejorar las ventas de los 5 (Está un  poco desactualizada :)
  // libros de Harry Potter que todavía le quedan en stock a una librería,
  // han decidido ofrecer descuentos en compras de libros múltiples.
  // Las ofertas son:

  // - Una copia de cualquiera de los cinco libros cuesta 8 EUR.
  // - Sin embargo, si compras dos libros diferentes, obtienes un 5% descuento en
  //    esos dos libros.
  // - Si compras 3 libros diferentes, obtienes un 10% de descuento.
  // - Si compras 4 libros diferentes, obtienes un 20% de descuento.
  // - Si quieres el lote completo y compras los 5, obtienes un 25% de descuento.
  // Ten en cuenta que si compras, por ejemplo, cuatro libros, de los cuales 3 son
  // diferentes títulos, obtienes un 10% de descuento en los 3 que forman parte
  // de un conjunto, pero el cuarto libro todavía cuesta 8 euros.
  // Tu misión es escribir un código para calcular el precio de cualquier cesta de la
  // compra concebible (que contiene sólo Libros de Harry Potter), dando el mayor
  // descuento posible. Ejemplo:
  // Una cesta de la compra con:
  // - 2 copias del primer libro
  // - 2 copias del segundo libro
  // - 2 copias del tercer libro
  // - 1 copia del cuarto libro
  // - 1 copia del quinto libro

  // Su precio sería: 5 libros, uno de cada (40*0.75=30) más 3 libros, uno
  // de cada (24*0.90=21.60), entonces: 30 + 21.60 = 51.60 €
  // Pufff... menudo lio xD
  // Aquí abajo tu código:


  it('calcula un total de cero cuando no tiene nada en la cesta', () => {
    const cesta = Cesta.vacia()

    const total = cesta.calcularTotal()

    expect(total).toBe(0.0)
  })

  it('calcula el precio de un libro cuando solo se añadió uno', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)

    const total = cesta.calcularTotal()
    expect(total).toBe(8.0)
  })

  it('calcula el precio de un libro cuando añade dos libros iguales', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(unLibro)

    const total = cesta.calcularTotal()
    expect(total).toBe(16.0)
  })

  it('calcula el precio con descuento cuando añadio dos libros diferentes', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const otroLibro = 'Harry Potter y la cámara secreta'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)

    const total = cesta.calcularTotal()
    expect(total).toBe(15.2)
  })

  it('calcula el precio con descuento cuando añadio otros dos libros diferentes', () => {
    const unLibro = 'Harry Potter y el prisionero de Azkaban'
    const otroLibro = 'Harry Potter y el cáliz de fuego'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)

    const total = cesta.calcularTotal()
    expect(total).toBe(15.2)
  })

  it('calcula el precio con descuento cuando añadio tres libros diferentes', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const otroLibro = 'Harry Potter y la cámara secreta'
    const otroLibroMas = 'Harry Potter y el prisionero de Azkaban'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)
    cesta.anyadir(otroLibroMas)

    const total = cesta.calcularTotal()
    expect(total).toBe(21.6)
  })

  it('calcula el precio con descuento cuando añadió tres libros diferentes', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const otroLibro = 'Harry Potter y el cáliz de fuego'
    const otroLibroMas = 'Harry Potter y el prisionero de Azkaban'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)
    cesta.anyadir(otroLibroMas)

    const total = cesta.calcularTotal()
    expect(total).toBe(21.6)
  })

  it('calcula el precio con descuento cuando añadió cuatro libros diferentes', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const otroLibro = 'Harry Potter y el cáliz de fuego'
    const otroLibroMas = 'Harry Potter y el prisionero de Azkaban'
    const yOtroLibroMas = 'Harry Potter y la cámara secreta'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)
    cesta.anyadir(otroLibroMas)
    cesta.anyadir(yOtroLibroMas)

    const total = cesta.calcularTotal()
    expect(total).toBe(25.6)
  })

  it('calcula el precio con descuento cuando añadió otros cuatro libros diferentes', () => {
    const unLibro = 'Harry Potter y la piedra filosofal'
    const otroLibro = 'Harry Potter y el cáliz de fuego'
    const otroLibroMas = 'Harry Potter y el prisionero de Azkaban'
    const yOtroLibroMas = 'Harry Potter y la Orden del Fénix'
    const cesta = Cesta.vacia()

    cesta.anyadir(unLibro)
    cesta.anyadir(otroLibro)
    cesta.anyadir(otroLibroMas)
    cesta.anyadir(yOtroLibroMas)

    const total = cesta.calcularTotal()
    expect(total).toBe(25.6)
  })

  it('calcula el precio con descuento cuando añadió cinco libros diferentes', () => {
    const cesta = Cesta.vacia()
    // Demasiadas variables. A esto se le llama INLINEAR ^^
    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')
    cesta.anyadir('Harry Potter y la cámara secreta')
    cesta.anyadir('Harry Potter y la Orden del Fénix')

    const total = cesta.calcularTotal()
    expect(total).toBe(30.0)
  })

  it('calcula el precio con descuento cuando añadió dos lotes de cinco libros diferentes', () => {
    const cesta = Cesta.vacia()

    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')
    cesta.anyadir('Harry Potter y la cámara secreta')
    cesta.anyadir('Harry Potter y la Orden del Fénix')
    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')
    cesta.anyadir('Harry Potter y la cámara secreta')
    cesta.anyadir('Harry Potter y la Orden del Fénix')

    const total = cesta.calcularTotal()
    expect(total).toBe(60.0)
  })

  it('calcula el precio con descuento cuando añadio tres lotes de dos libros diferentes', () => {
    const cesta = Cesta.vacia()

    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')

    const total = cesta.calcularTotal()
    expect(total).toBe(45.6)
  })
  // Esta kata es de las buenas. Recuerda parar a beber agua de vez en cuando
  // y aprovecha para despejar un poco la cabeza ;)
  // A POR EL EJEMPLO!
  it('calcula el precio para un pack de 5 libros diferentes junto a otro de 3 libros diferentes', () => {
    const cesta = Cesta.vacia()

    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')
    cesta.anyadir('Harry Potter y la cámara secreta')
    cesta.anyadir('Harry Potter y la Orden del Fénix')
    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')

    let total = cesta.calcularTotal()
    expect(total).toBe(51.60)
    // BONUS TRACK!! Ahora iremos añadiendo poco a poco ^^
    cesta.anyadir('Harry Potter y la Orden del Fénix')
    cesta.anyadir('Harry Potter y la piedra filosofal')

    total = cesta.calcularTotal()
    expect(total).toBe(63.6)

    cesta.anyadir('Harry Potter y la Orden del Fénix')
    cesta.anyadir('Harry Potter y la piedra filosofal')

    total = cesta.calcularTotal()
    expect(total).toBe(78.8)

    cesta.anyadir('Harry Potter y la piedra filosofal')
    cesta.anyadir('Harry Potter y el cáliz de fuego')
    cesta.anyadir('Harry Potter y el prisionero de Azkaban')

    total = cesta.calcularTotal()
    expect(total).toBe(97.2)
  })
  // En esta kata ya montas un negocio de verdad. Venga! a vender xD
})
