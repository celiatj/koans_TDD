
describe('35-HerenciaEnLasClases.js', () => {
  // La verdad que el concepto es sencillo, esta es la manera que tenemos
  // de hacer que las clases hereden comportamientos (funciones) o atributos
  // de otras clases.
  // Vamos a ver algunos ejemplos. Y luego ya te dejo para que lo hagas tú ^^
  it('hace que hereden comportamiento y atributos', () => {
    // Primero vamos a crear una clase Electrodoméstico, que va a tener
    // la funcionalidad de encenderse y apagarse, entonces haremos que una
    // televisión herede ese comportamiento. (Cuando hablo de estas cosas
    // me siento abogado ;)
    const Electrodomestico = class {
      constructor() {
        this.estaEncendida = false
      }

      encender() {
        this.estaEncendida = true
      }

      apagar() {
        this.estaEncendida = false
      }
    }
    // Y para que nuestra TV herede este comportamiento simplemente le diremos
    // que extiende ("extends") de Electrodoméstico.
    const Television = class extends Electrodomestico {
    }
    // Vamos a ver si es verdad
    const nuevaTele = new Television()

    nuevaTele.encender()

    expect(nuevaTele.estaEncendida).toBe(RellenameCorrectamente)
    // Venga va, que se que te hace ilusión, apagala tu ^^
    // escribe aquí tu código:


    expect(nuevaTele.estaEncendida).toBe(false)
    // Pero sinceramente, para hacer esto, no nos hacía falta la clase
    // Televisión, con el Electrodoméstico podíamos hacer lo mismo.
    // Así que en el siguiente vamos a aprovechar más esto de la herencia.
  })

  it('la clase que hereda puede ampliar el comportamiento', () => {
    // Vamos a usar el mismo ejemplo, pero vamos hacer que la TV cambie de canal.
    const Electrodomestico = class {
      constructor() {
        this.estaEncendida = false
      }

      encender() {
        this.estaEncendida = true
      }

      apagar() {
        this.estaEncendida = false
      }
    }

    const Television = class extends Electrodomestico {
      constructor() {
        super() // ¿Qué es esto? Esto es obligado de usar cuando
        // se define el constructor de una clase que hereda. Y no solo
        // es obligado, si no que tiene que ir en la primera línea del
        // constructor. Esto es como ejecutar el constructor de la clase
        // de la que se hereda, en este caso lo que hará es definir
        // "this.estaEncendida" a false, como en el constructor de la clase
        // Electrodomestico.
        this.canalActual = 0
      }

      cambiarAlSiguienteCanal() {
        this.canalActual += 1
      }

      cambiarAlCanalAnterior() {
        this.canalActual -= 1
      }
    }

    const nuevaTele = new Television()

    expect(nuevaTele.estaEncendida).toBe(RellenameCorrectamente)
    expect(nuevaTele.canalActual).toBe(RellenameCorrectamente)
    // Vamos a encenderla y cambiar de canal.
    nuevaTele.encender()
    nuevaTele.cambiarAlSiguienteCanal()

    expect(nuevaTele.estaEncendida).toBe(RellenameCorrectamente)
    expect(nuevaTele.canalActual).toBe(RellenameCorrectamente)
    // Ahora tú, cambia al canal anterior y apaga la TV.
    // ¿No te sientes como un mando a distancia? ^^
    // Escribe aquí tu código:


    expect(nuevaTele.estaEncendida).toBe(false)
    expect(nuevaTele.canalActual).toBe(0)
  })

  it('la clase que hereda, puede ser heredada por una tercera', () => {
    // Es más difícil de entender mi explicación, que viéndolo en un ejemplo.
    // Vamos a tener el Electrodoméstico, la Televisión y la TelevisiónModerna,
    // esta última cuando se enciende va a nuestro canal favorito, que se
    // lo indicaremos cuando la creemos.
    const Electrodomestico = class {
      constructor() {
        this.estaEncendida = false
      }

      encender() {
        this.estaEncendida = true
      }

      apagar() {
        this.estaEncendida = false
      }
    }

    const Television = class extends Electrodomestico {
      constructor() {
        super()

        this.canalActual = 0
      }

      cambiarAlSiguienteCanal() {
        this.canalActual += 1
      }

      cambiarAlCanalAnterior() {
        this.canalActual -= 1
      }
    }

    const TelevisiónModerna = class extends Television {
      constructor(canalFavorito) {
        super() // OBLIGATORIO ^^
        // Este super ejecutara el constructor de la Televisión que a su
        // vez ejecuta el “contructor” del Electrodoméstico. Por lo tanto
        // definirá tanto si "this.estaEncendida" como "this.canalActual"
        this.canalFavorito = canalFavorito
      }

      encender() {
        super.encender() // Con esto llamaremos al método "encender" de la clase
        // que hereda, que este caso hace "this.estaEncendida = true"
        // que es el comportamiento que recibe la Televisión del
        // Electrodoméstico. Y aprovechamos para darle el comportamiento de ir
        // a nuestro canal favorito ^^
        this.canalActual = this.canalFavorito
      }
    }

    const nuestroCanalFavorito = 22

    const nuevaTeleModerna = new TelevisiónModerna(nuestroCanalFavorito)

    nuevaTeleModerna.encender()

    expect(nuevaTeleModerna.canalActual).toBe(RellenameCorrectamente)
    // Como puedes ver no solo hereda comportamiento, si no que se puede modificar
    // ese comportamiento. Ten en cuenta que en este caso tenemos que "subir" dos
    // clases para para ver qué hace el método "encender". La herencia es una habilidad
    // potente, pero mal usada puede darnos muchos problemas. Lo de siempre, un gran
    // poder conlleva una gran... ya te lo sabes ;)
    // Venga ahora haz un poco de zapping y como en la TV no hacen nada, apagala y
    // a dormir.
    // Escribe aquí tu código:


    expect(nuevaTeleModerna.canalActual).toBe(33)
    expect(nuevaTeleModerna.estaEncendida).toBe(false)
    // Por si no te lo has imaginado, puedes hacer que una clase sea heredada por
    // otra y esta a su vez sea heredada por otra y así montón de veces (no se si
    // hay un límite, pero no voy a probarlo ;)
  })

  it('la clase que hereda, puede modificar los atributos de la clase heredada', () => {
    // Antes de empezar, te voy a explicar una cosa que nos valdrá para el test
    // pero que no tiene que ver nada con la herencia ^^ Puede que ya lo sepas...
    // En casi todos los juegos de rol existe un personaje que es capaz de sanar
    // a sus compañeros, pero la sanación suele ser un hechizo que consume puntos
    // de mana. Así que vamos a hacer una clase Sanador base, que consumirá menos
    // mana y sanará más puntos de vida conforme más experto sea el sanador.
    // Ahora veras... D&D MODE ON ^^ (Si no sabes que es D&D, pregunta a internet ;)
    const Sanador = class {
      constructor() {
        this.puntosDeMana = 100
        this.cantidadSanada = 10
        this.manaConsumidoPorSanacion = 20
      }

      sanar() {
        let puntosDeSanacionRealizados = 0

        if (this._tieneManaSuficiente()) {
          this._consumirManaPorSanacion()

          puntosDeSanacionRealizados = this.cantidadSanada
        }

        return puntosDeSanacionRealizados
      }
      // ¿Por qué pongo una barra baja al principio del nombre del método?
      // Es para indicar la intención de que estos métodos son privados, lo
      // que significa que no se tienen que usar nunca fuera de la definición
      // de la clase (Solo queremos que se use dentro del bloque de código
      // de esta clase). Ejemplo de lo que no queremos:
      // const nuevoSanador = new Sanador()
      // nuevoSanador._consumirManaPorSanacion()
      // Esto es lo que indicamos que no se debe de hacer, aunque se pueda.
      // En otros lenguajes los métodos privados directamente no dejan usarlos
      // fuera de la clase. Pero en Javascript no existen y por eso esta la
      // convención de la barra baja para indicar que son privados.
      _tieneManaSuficiente() {
        return (this.puntosDeMana >= this.manaConsumidoPorSanacion)
      }

      _consumirManaPorSanacion() {
        this.puntosDeMana -= this.manaConsumidoPorSanacion
      }
      // Y ¿Por qué he sacado estos dos métodos privados? Cuando perfectamente
      // puedo meter el código en el método "sanar", porque es una buena práctica
      // que a lo que se le pueda poner nombre, se le ponga. A esto
      // se le llama "explaining methods" sencillamente creamos métodos
      // que su nombre explica lo que hace el código que contiene
      // (Solo para que conozcas el concepto ;).
    }
    // Vamos a probar a nuestro sanador.
    const nuevoSanador = new Sanador()

    const puntosDeSanacion = nuevoSanador.sanar()

    expect(puntosDeSanacion).toBe(RellenameCorrectamente)
    expect(nuevoSanador.puntosDeMana).toBe(RellenameCorrectamente)
    // ¿Puedes ponerlo a sanar hasta que se quede sin mana?
    // Escribe aquí tu código:


    const sanacionSinMana = nuevoSanador.sanar()
    expect(sanacionSinMana).toBe(0)
    expect(nuevoSanador.puntosDeMana).toBe(0)
    // Ok, todo funciona como esperamos.
    // Vamos a preparar un Sanador novato.
    const SanadorNovato = class extends Sanador {
      constructor() {
        super()

        this.puntosDeMana = 50
        this.cantidadSanada = 5
        this.manaConsumidoPorSanacion = 25
      }
    }

    const nuevoSanadorNovato = new SanadorNovato()
    // Venga... haz que sane hasta que se quede con el maná justo para otra
    // sanación. Escribe aquí tu código:


    expect(nuevoSanadorNovato.sanar()).toBe(5)
    expect(nuevoSanadorNovato.puntosDeMana).toBe(0)
    // Vamos a por el sanador aventurero, fijate bien que el siguiente es para ti.
    const SanadorAventurero = class extends Sanador {
      constructor() {
        super()

        this.puntosDeMana = 120
        this.cantidadSanada = 20
        this.manaConsumidoPorSanacion = 15
      }
    }

    const nuevoSanadorAventurero = new SanadorAventurero()
    // Aquí lo tenemos, haz que sane hasta que esté seco de maná.
    // Escribe aquí tu código:


    expect(nuevoSanadorAventurero.sanar()).toBe(20)
    expect(nuevoSanadorAventurero.puntosDeMana).toBe(0)
    // Venga ahora a por el tuyo, el SanadorExperto. Haz que pase
    // expect a expect y poco a poco. Pero está obligado que extienda de Sanador.
    // Escribe aquí tu código:


    const nuevoSanadorExperto = new SanadorExperto()

    expect(nuevoSanadorExperto.sanar()).toBe(30)
    expect(nuevoSanadorExperto.puntosDeMana).toBe(140)
    nuevoSanadorExperto.sanar()
    expect(nuevoSanadorExperto.puntosDeMana).toBe(130)
    // Ahora viene lo que no te esperabas.
    // BONUS TRACK:
    nuevoSanadorExperto.descansar()

    expect(nuevoSanadorExperto.puntosDeMana).toBe(140)
    // Con esto damos como superada la aventura de hoy, ¡CONGRATULATIONS!
    // Ahora vendrían los créditos, pero eso lo dejamos para más adelante ;P
  })
  // P.D.: La clase de la que se hereda se le suele llamar clase padre. Por si alguien
  // te dice que mires la clase padre, no te pille de sorpresa ^^
  // P.D.2: A las buenas prácticas en programación yo les llamo, prácticas para ser
  // un software developer feliz :)
})
