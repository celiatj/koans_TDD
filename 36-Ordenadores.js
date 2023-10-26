
describe('36-Ordenadores.js', () => {
  // Ordenadores: Una kata improvisada por mi, para practicar la herencia ^^
  // Vamos a programar una manera de crear nuevos ordenadores, con la idea
  // de que la IA programada en otras katas, pueda empezar a construir más
  // ordenadores para que le ayuden en su objetivo ;P

  // Al final lo que vamos a tener una clase Ordenador que contendrá
  // una serie de atributos y funciones que heredarán otros tipos
  // de ordenadores, que dependen de su tipo, tendrán más propiedades
  // y atributos. Vamos a por el ordenador. Recuerda pasar test a test,
  // leyendo despacito, bla, bla, bla... lo de siempre.
  // Escribe aquí tu clase:


  it('Ordenador se puede construir', () => {

    const ordenador = new Ordenador()
    // Seemántica... static...
    expect(ordenador instanceof Ordenador).toBe(true)
  })

  it('Ordenador se construye apagado', () => {

    const ordenador = new Ordenador()

    expect(ordenador.estaEncendido).toBe(false)
  })

  it('Ordenador se puede encender', () => {
    const ordenador = new Ordenador()

    ordenador.encender()

    expect(ordenador.estaEncendido).toBe(true)
  })

  it('Ordenador se puede apagar', () => {
    const ordenador = new Ordenador()
    ordenador.encender()

    ordenador.apagar()

    expect(ordenador.estaEncendido).toBe(false)
  })
  // Bien, ya tenemos ordenadores ^^
  // Ahora a por los portátiles.
  //  Escribe aquí tu nueva clase:


  it('Portatil se puede contruir', () => {

    const portatil = new Portatil()

    expect(portatil instanceof Portatil).toBe(true)
  })

  it('Portatil es un ordenador', () => {

    const claseDeLaQueHereda = Portatil.prototype
    // Esto para cuando seas mayor ^^ Pero por ahora es para ver
    // de la clase de la que hereda.
    expect(claseDeLaQueHereda instanceof Ordenador).toBe(true)
  })

  it('Portatil se contruye apagado y con cero batería', () => {

    const portatil = new Portatil()
    // Aquí toca tirar de super.
    expect(portatil.estaEncendido).toBe(false)
    expect(portatil.cargaBateria).toBe(0)
  })

  it('Portatil no se puede encender sin batería', () => {
    const portatil = new Portatil()

    portatil.encender()

    expect(portatil.estaEncendido).toBe(false)
  })

  it('Portatil se puede cargar la batería', () => {
    const portatil = new Portatil()

    portatil.cargarBateria()

    expect(portatil.cargaBateria).toBe(100)
  })
  // El siguiente si lo hiciste bien, pasará solo.
  it('Portatil se puede encender con la batería cargada', () => {
    const portatil = new Portatil()
    portatil.cargarBateria()

    portatil.encender()

    expect(portatil.estaEncendido).toBe(true)
  })
  // Venga, ahora vamos a hacer un portátil para programar.
  // Escribe aquí tu clase:


  it('PortatilParaProgramar se puede construir', () => {

    const portatil = new PortatilParaProgramar()

    expect(portatil instanceof PortatilParaProgramar).toBe(true)
  })

  it('PortatilParaProgramar es un portátil', () => {

    const claseDeLaQueHereda = PortatilParaProgramar.prototype

    expect(claseDeLaQueHereda instanceof Portatil).toBe(true)
  })
  // Bien extendido :)
  it('PortatilParaProgramar no está programando cuando se construye', () => {

    const portatil = new PortatilParaProgramar()

    expect(portatil.estaProgramando).toBe(false)
  })

  it('PortatilParaProgramar puede programar si está encendido y con batería', () => {
    // Aunque para encenderlo ya tiene que tener batería, puede que la parte final
    // del "it" sobre.
    const portatil = new PortatilParaProgramar()
    portatil.cargarBateria()
    portatil.encender()

    portatil.programar()
    // Aquí intenta hacer lo mínimo, pero el minimisimo código necesario para que
    // pase el test. Dale unas vueltas, que con una asignación dentro del método
    // debería de bastar, ni "ifs", ni nada más.
    expect(portatil.estaProgramando).toBe(true)
  })
  // Si has escrito, el código mínimo para que pasará el test, el siguiente
  // tendrás que añadir un poco, pero muy, muy poco más.
  it('PortatilParaProgramar no puede programar si no está encendido', () => {
    const portatil = new PortatilParaProgramar()
    portatil.cargarBateria()

    portatil.programar()

    expect(portatil.estaProgramando).toBe(false)
  })
  // Un "if" y un atributo, no hace falta más ;P
  it('PortatilParaProgramar no puede programar si no tiene batería', () => {
    const portatil = new PortatilParaProgramar()
    portatil.encender()
    // Aunque si todo está bien, no se enciende sin batería.
    portatil.programar()

    expect(portatil.estaProgramando).toBe(false)
  })

  it('PortatilParaProgramar deja de programar cuando se apaga', () => {
    const portatil = new PortatilParaProgramar()
    portatil.cargarBateria()
    portatil.encender()
    portatil.programar()

    portatil.apagar()

    expect(portatil.estaProgramando).toBe(false)
  })
  // Ahora a por mi segundo tipo favorito de portatil xD
  // Escribe aquí tu clase:


  it('PortatilParaJugar se puede construir', () => {

    const portatil = new PortatilParaJugar()

    expect(portatil instanceof PortatilParaJugar).toBe(true)
  })

  it('PortatilParaJugar es un portátil', () => {

    const claseDeLaQueHereda = PortatilParaJugar.prototype

    expect(claseDeLaQueHereda instanceof Portatil).toBe(true)
  })

  it('PortatilParaJugar no sabe programar', () => {
    // Esto, por si intentas heredar de la clase que no toca ^^
    const portatil = new PortatilParaJugar()
    // Si falla el siguiente "expect", es porque no heredas del portátil que toca.
    expect(portatil.estaProgramando).toBeUndefined()
  })

  it('PortatilParaJugar no está jugando cuando se construye', () => {

    const portatil = new PortatilParaJugar()

    expect(portatil.estaJugando).toBe(false)
  })

  it('PortatilParaJugar puede jugar si está encendido y con batería', () => {
    // Aunque para encenderlo ya tiene que tener batería, puede que la parte final
    // del "it" sobre.
    const portatil = new PortatilParaJugar()
    portatil.cargarBateria()
    portatil.encender()

    portatil.jugar()

    expect(portatil.estaJugando).toBe(true)
  })

  it('PortatilParaJugar no puede jugar si no está encendido', () => {
    const portatil = new PortatilParaJugar()
    portatil.cargarBateria()

    portatil.jugar()

    expect(portatil.estaJugando).toBe(false)
  })
  // Un "if" y un atributo, no hace falta más ;P
  it('PortatilParaJugar no puede jugar si no tiene batería', () => {
    const portatil = new PortatilParaJugar()
    portatil.encender()
    // Aunque si todo está bien, no se enciende sin batería.
    portatil.jugar()

    expect(portatil.estaJugando).toBe(false)
  })

  it('PortatilParaJugar deja de jugar cuando se apaga', () => {
    const portatil = new PortatilParaJugar()
    portatil.cargarBateria()
    portatil.encender()
    portatil.jugar()

    portatil.apagar()

    expect(portatil.estaJugando).toBe(false)
  })
  // Fijate, donde esta la koan sobre Booleanos, piensa en todo lo que conoces ahora
  // que antes ni imaginabas que existía; ¿Progresas? ^^
  // Si no lo sabes, ya te lo digo yo. SI, ¡un montón!
})
// P.D.: Durante el transcurso de esta Kata, ningún ordenador ha sufrido
// daño alguno xDDD
