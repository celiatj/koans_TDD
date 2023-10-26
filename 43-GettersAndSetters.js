
describe('43-GettersAndSetters.js', () => {
  // Si no sabes qué son los getters y los setters, esta es tu koan ^^
  // Pero mientras tanto parece el título de una serie xD
  // Los métodos conocidos como getters y setters, son aquellos que
  // nos permiten acceder o modificar a un atributo interno de la clase.
  // Y ¿Qué es un atributo interno? Recuerdas:
  // class Ordenador {
  //   constructor() {
  //     this.estaEncendido = false <--- Esto es un atributo interno.
  //   }
  // }

  // Y esto:
  // const ordenador = new Ordenador()
  // ordenador.estaEncendido <--- Esto es un atributo interno.
  // Y pensarás que tonteria lo de los getters y los setters,
  // si ya puedo acceder y modificar un atributo interno.
  // Nos vemos dentro de cuatro tests ^^
  it('ya podemos acceder y modificar atributos internos', () => {
    const Ordenador = class {
      constructor() {
        this.estaEncendido = false
      }
    }
    const ordenador = new Ordenador()

    expect(ordenador.estaEncendido).toBe(RellenameCorrectamente)

    ordenador.estaEncendido = 'Si se puede cambiar'

    expect(ordenador.estaEncendido).toBe(RellenameCorrectamente)
  })

  it('ahora usemos getters y setters', () => {
    const Persona = class {
      constructor(nombre, apellido) {
        this._nombre = nombre
        this._apellido = apellido
        // Lo de las barras bajas, es porque un atributo no puede
        // tener el mismo nombre que un getter o un setter :(
      }
      get nombre() {
        return this._nombre
      }
      set nombre(otroNombre) {
        this._nombre = otroNombre
      }
      get apellido() {
        return this._apellido
      }
      set apellido(otroApellido) {
        this._apellido = otroApellido
      }
    }
    // Ahora vamos a crear personas ^^
    const persona = new Persona('Akira', 'Noa')

    expect(persona.nombre).toBe(RellenameCorrectamente)
    expect(persona.apellido).toBe(RellenameCorrectamente)

    persona.nombre = 'Alex'
    persona.apellido = ''

    expect(persona.nombre).toBe(RellenameCorrectamente)
    expect(persona.apellido).toBe(RellenameCorrectamente)
    // Ahora estarás en plan: - Ehhh... qué es lo mismo pero escribiendo más.
  })
  // Bien. Puse un ejemplo un poco flojito ^^
  it('ahora usemos getters y setters de forma más molona', () => {
    const Dinero = class {
      constructor(cantidad, moneda) {
        this._cantidad = cantidad
        this._moneda = moneda
      }

      get texto() {
        return `${this._cantidad} ${this._moneda}`
      }

      set moneda(nuevaMoneda) {
        if (nuevaMoneda !== '') {
          this._moneda = nuevaMoneda
        }
      }

      set cantidad(nuevaCantidad) {
        if (nuevaCantidad >= 0) {
          this._cantidad = nuevaCantidad
        }
      }
    }
    const dinero = new Dinero(100, '€')

    expect(dinero.texto).toBe(RellenameCorrectamente)

    dinero.cantidad = 1000000000
    dinero.moneda = '£'

    expect(dinero.texto).toBe(RellenameCorrectamente)
    // Bueno... Yo ya tengo lo que buscaba... ¡Nos vemos! ^^
    dinero.cantidad = -100000000000000000000000000
    dinero.moneda = ''
    // ¡NOOOO! Intentan arruinarme :_(
    expect(dinero.texto).toBe(RellenameCorrectamente)
    // ¡Gracias setters! xDDDD
  })

  it('ahora usemos getters y setters de forma más molona aún', () => {
    const Persona = class {
      constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = 0
      }
      get nombreCompleto() {
        return this.nombre + ' ' + this.apellido
      }

      set cambiarDeIdentidad(nombreCompleto) {
        if (nombreCompleto === '') { return }
        const nombreYApellido = nombreCompleto.split(' ')

        this.nombre = nombreYApellido[0]
        this.apellido = nombreYApellido[1]
      }

      get anyos() {
        return this.edad
      }

      set celebrarCumpleanyos(anyos) {
        if (anyos < 1) { return }

        this.edad += anyos
      }
    }
    const persona = new Persona('Akira', 'Noa')

    expect(persona.nombreCompleto).toBe(RellenameCorrectamente)
    expect(persona.anyos).toBe(RellenameCorrectamente)

    persona.celebrarCumpleanyos = 3

    expect(persona.anyos).toBe(RellenameCorrectamente)

    persona.celebrarCumpleanyos = -10

    expect(persona.anyos).toBe(RellenameCorrectamente)

    persona.cambiarDeIdentidad = 'Charlie Robin'

    expect(persona.nombreCompleto).toBe(RellenameCorrectamente)

    persona.cambiarDeIdentidad = ''

    expect(persona.nombreCompleto).toBe(RellenameCorrectamente)
  })
  // Ahora parecen más como métodos como los que siempre hemos hecho, ¿no?
  // Por la definición un getter o un setter es cualquier función que
  // acceda o modifique UN atributo interno.
  // Si, si... en lo del cambio de identidad cambie DOS atributos internos
  // por eso parece que tenga nombre de método.
  // Pero lo importante es que podríamos usar los métodos de siempre.
  it('esto también son getters y setters pero a la manera clásica', () => {
    // Casi te escapas. DIY: Persona.
    // Ves escribiendo código para pasar las expectaciones:


    const persona = new Persona('Madison ', ' Joss')

    expect(persona.nombre).toBe('MADISON ') // Esos espacios en blanco
    expect(persona.apellido).toBe(' JOSS') // son sospechosos
    expect(persona.nombreCompleto).toBe('Madison   Joss')

    persona.nombre = '  Andrea  '
    persona.apellido = '  Cruz  '

    expect(persona.nombre).toBe('ANDREA') // Strings... Episodio II...
    expect(persona.apellido).toBe('CRUZ') // trim... trim... trim...
    expect(persona.nombreCompleto).toBe('Andrea Cruz') // ^^
  })
})
