
describe('29-MetodosDeClase.js', () => {
  // Koan 2 x 1, ya con ofertas y todo ^^
  // Lo primero que no te asuste la palabra método, has usado muchos, muchos,
  // métodos para llegar aquí, lo único que para no confundir los segui mencionando
  // como función para no meter este concepto en mitad de aprender otras cosas ^^
  // Pero ahora vamos a aclarar que es un método. Los métodos son las funciones
  // que se declarar dentro de las clases. Un ejemplo cercano: La StringCalculator
  // tenía dos métodos, suma y anyadirSeparador. La String vimos montón de sus
  // métodos, como: split, replace, replaceAll, toUpperCase, toLowerCase ...
  // Y siguiendo con los ejemplos, pero ahora de funciones parseInt y parseFloat
  // son funciones puras, ya que no se les llama desde una instancia de clase ni
  // desde una clase.
  // Desde ahora, llamaremos a las cosas por el nombre que toca ^^

  // Ahora vamos a ver los métodos de clase o también llamados métodos estáticos.
  // Por ahora todos los métodos que hemos gastado, son métodos de instancia, porque
  // necesitamos construir una instancia (hacer el new) para poder usarlos. Pero los
  // métodos de clase/estáticos se pueden usar sin instanciar, directamente desde la
  // clase.
  it('se definen usando la palabra "static"', () => {
    // Ahora voy a definir una clase de pruebas con un método de clase/estático.
    const Prueba = class {
      static soyUnMetodoDeClase() {
        return '¡Hola!'
      }
    }
    // Se define poniendo la palabra "static" delante del nombre del método
    // (por eso lo de método estático ;) Pero por el resto, la declaración
    // es igual que los métodos que ya conocías, tanto la declaración de
    // argumentos a recibir, como que si no pones return devuelve undefined...
    // Y se usa de la siguiente manera:
    const saludo = Prueba.soyUnMetodoDeClase()

    expect(saludo).toBe(RellenameCorrectamente)
    // Sin usar el "new" directamente desde el nombre de la clase, por eso
    // se le llama método de clase ^^
    // Pero qué pasará sí...
    const nuevaPrueba = new Prueba()

    expect(nuevaPrueba.soyUnMetodoDeClase).toBe(RellenameCorrectamente)
    // O.o Como hemos dicho es un método de clase y no de instancia.
    // Los de instancia son aquellos que no le ponemos lo de "static" delante
    // y solo se pueden usar desde una instancia.
  })
  // Entonces si los métodos de clase no están definidos en la instancia
  // ¿Se puede definir un método de instancia con el mismo nombre que uno de clase?
  // Pues me encanta que me hagas esa pregunta.
  it('se puede definir un método de instancia con el mismo nombre que uno de clase', () => {
    const Prueba = class {
      static soyUnMetodo() {
        return 'Me llaman desde un metodo de clase'
      }

      soyUnMetodo() {
        return 'Me llaman desde un metodo de instancia'
      }
    }
    // Aunque se llamen iguales, no son lo mismo. Esto es como si conocieras a dos
    // personas que se llaman Akira. Pues porque se llamen igual, no son la misma
    // persona ^^
    const instanciaDePrueba = new Prueba()

    expect(instanciaDePrueba.soyUnMetodo()).toBe(RellenameCorrectamente)
    expect(Prueba.soyUnMetodo()).toBe(RellenameCorrectamente)
    // Esta práctica puede ser útil en algunos casos, pero que se llamen igual
    // en la mayoría de los casos puede ser un lío interesante ^^
  })
  // ¿Pero se podría usar uno dentro del otro? ¡BOOM!
  it('los metodos de instancia pueden usar los métodos de clase', () => {
    // Voy a hacer un poco de "trampa", pero se puede. Para que sepas que existe.
    // Vamos a pasar un poco ya de la clase de pruebas ;P
    const Camara = class {
      static tarjetaSD() {
        return 'Tarjeta tipo SD'
      }

      constructor() {
        this.tarjeta = 'Sin tarjeta'
      }

      insertarTarjetaSD() {
        const tarjetaSD = Camara.tarjetaSD()
        // Puede que no fuera intuitivo, pero es lógico ^^
        this.tarjeta = tarjetaSD
      }
    }
    const nuevaCamara = new Camara()

    expect(Camara.tarjetaSD()).toBe(RellenameCorrectamente)
    expect(nuevaCamara.tarjeta).toBe(RellenameCorrectamente)

    nuevaCamara.insertarTarjetaSD()

    expect(nuevaCamara.tarjeta).toBe(RellenameCorrectamente)
  })
  // P.D.: ¿Puedes imaginar qué objeto tengo delante? xD
  // Y ahora... ¿Los métodos de instancia se podrán usar en métodos de clase? O.o
  // ¡Pues claro! Estas programando, puedes hacer lo que quieras ^^
  it('puede usar INSTANCIAS de su propia clase', () => {
    const Camara = class {
      static conTarjetaSD() {
        const nuevaCamara = new Camara()
        // Puede que no vuelva a ser intuitivo
        nuevaCamara.insertarTarjeta('Tarjeta tipo SD')
        // pero es lógico ^^
        return nuevaCamara
      }

      constructor() {
        this.tarjeta = 'Sin tarjeta'
      }

      insertarTarjeta(tipo) {
        this.tarjeta = tipo
      }
    }

    const nuevaCamaraSin = new Camara()
    const nuevaCamaraCon = Camara.conTarjetaSD() //Esto da bastante semántica.

    expect(nuevaCamaraSin.tarjeta).toBe(RellenameCorrectamente)
    expect(nuevaCamaraCon.tarjeta).toBe(RellenameCorrectamente)
  })
  // Esto último le da bastante juego a las clases ;)

  it('DIY: Aterriza el MarsRover', () => {
    // No vamos a hacer toda la kata, pero recuerda la vez anterior
    // para hacerlo "aterrizar" usamos el método "new", que no era muy
    // intuitivo. Ahora lo podemos hacer aterrizar de verdad xD
    // Escribe aquí abajo tu clase:


    expect(MarsRover).not.toBeUndefined()

    let marsRover = new MarsRover(0, 1, 'N')

    expect(marsRover instanceof MarsRover).toBe(true)
    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(1)
    expect(marsRover.direccion).toBe('N')

    marsRover = new MarsRover(3, 5, 'S')

    expect(marsRover.x).toBe(3)
    expect(marsRover.y).toBe(5)
    expect(marsRover.direccion).toBe('S')
    // Ahora lo bueno.
    marsRover = MarsRover.aterrizarMirandoAlNorte()

    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direccion).toBe('N')

    marsRover = MarsRover.aterrizarMirandoAlSur()

    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direccion).toBe('S')
    // Un método de clase nuevo nuevo
    marsRover = MarsRover.aterrizarMirandoAl('O')

    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direccion).toBe('O')

    marsRover = MarsRover.aterrizarMirandoAl('N')

    expect(marsRover.x).toBe(0)
    expect(marsRover.y).toBe(0)
    expect(marsRover.direccion).toBe('N')
  })

  it('pueden hacerse para hacer colecciones', () => {
    // Al igual que podemos definir métodos de clase, se pueden
    // definir atributos.
    const PuntosCardinales = class {
      static norte = 'N'
      static oeste = 'O'
      static sur = 'S'
      static este = 'E'
    }
    // Su uso puede ser un poco engorroso, porque es muy verboso.
    // Pero deja exactamente claro, que Significa, los caracteres.
    expect(PuntosCardinales.norte).toBe(RellenameCorrectamente)
    expect(PuntosCardinales.oeste).toBe(RellenameCorrectamente)
    expect(PuntosCardinales.sur).toBe(RellenameCorrectamente)
    expect(PuntosCardinales.este).toBe(RellenameCorrectamente)
  })
  // Lo siguiente a reventado un montón de cabezas. Pero no es complicado.
  it('el "this" es diferente al de la instancia', () => {
    const Patinete = class {
      static bateria = 100

      static conLaBateriaLlena() {
        const bateriaExterna = this.bateria
        // Este this hace referencia a la propiedad estática, porque se llama
        // desde un método estático. Así que dentro de los métodos estáticos
        // this hace referencia a la clase. Sería el this de la clase.
        const nuevoPatinete = new Patinete()

        nuevoPatinete.anyadirBateria(bateriaExterna)

        return nuevoPatinete
      }

      constructor() {
        this.bateria = 0
        // Una vez que se ejecuta el "new" llama al constructor y añade al
        // this de la instancia la propiedad batería, pero dentro del contexto
        // de la instancia. Este sería el this de instancia.
      }

      anyadirBateria(externa) {
        this.bateria = externa
      }
    }

    const nuevoPatineteSin = new Patinete()
    const nuevoPatineteCon = Patinete.conLaBateriaLlena()

    expect(nuevoPatineteSin.bateria).toBe(RellenameCorrectamente)
    expect(nuevoPatineteCon.bateria).toBe(RellenameCorrectamente)
    expect(Patinete.bateria).toBe(RellenameCorrectamente)
    // Pero como el patinete con batería ya es una instancia tiene su propio this.
    nuevoPatineteCon.anyadirBateria(1000)

    expect(nuevoPatineteCon.bateria).toBe(RellenameCorrectamente)
    expect(Patinete.bateria).toBe(RellenameCorrectamente)
    // La batería que está en el this de clase no cambia. Las propiedades de clase
    // también se pueden llegar a cambiar, pero puedes montar un follón interesante.
    // Por ahora que sepas que se puede, pero se hace para casos muy muy concretos.
    Patinete.bateria = 50
    // Es más sencillo de lo que parece ^^
    const patineteConMedia = Patinete.conLaBateriaLlena()

    expect(patineteConMedia.bateria).toBe(RellenameCorrectamente)
    expect(Patinete.bateria).toBe(RellenameCorrectamente)
    // A partir del momento que cambias el atributo de clase, estamos cambiando
    // todos los nuevos patinetes con batería.
  })
  // Conclusión:
  // La clases siempre tienen 2 partes, la estática y la de instancia.

  // Ya has visto que en la programación casi podemos hacer lo que queramos, es como
  // un superpoder, pero como todo gran poder conlleva una gran responsabilidad ^^
  // Al final escribimos código para que entiendan otras personas, puede que una
  // de esas personas seas tu en el futuro. Así que no hagas cosas que te parecen
  // difícil de entender y usa el camino sencillo aunque escribas más código,
  // esas otras personas lo agradecerán.
})
