// Por si acaso. 101 === Iniciación, pero en moderno. BRO!
describe('20-Clases101.js', () => {
  // Las clases, son la joya de la corona de todo lenguaje de Programación
  // Orientado a Objetos (P.O.O.). Y Javascript es un lenguaje de programación
  // orientado a objetos ^^
  // Aunque ahora mismo puede que no lo sepas, pero durante todas las Koans
  // has estado usando Objetos, por ejemplo el objeto String, o el Number y
  // sinceramente, no me acuerdo si alguno más xD
  // Ahora puede que estés pensando: - No para de hablarme de Objetos, pero esto
  // va de la JOYA de las clases.
  // A lo que contestaré: - Si. Para ti a día de hoy, las clases y los objetos
  // lo puedes considerar lo mismo, hasta que aprendas la diferencia entre ellos,
  // que la hay.

  // Vamos a ir conociendola poco a poco.
  it('se declaran de la siguiente manera', () => {

    const UnaClase = class {}
    // Esta no es la manera más común, pero es la más parecida a lo
    // que conoces, al final, es casi igual que las funciones, pero
    // sin paréntesis.
    expect(UnaClase).not.toBeUndefined()
    // Ahora declara tu una clase que se llame OtraClase
    // Escribe tu código aquí abajo


    expect(OtraClase).not.toBeUndefined()
    // NICE!
  })

  it('se pueden crear nuevas instancias', () => {
    // Cuidado, aquí vamos a ir todo lo despacio que pueda.
    // Este punto es donde a todos, nos reventó la cabeza, pero como si
    // fuera el Big Bang. Aquello hizo: ¡BOOM!

    // No lo sabes, pero ya has creado nuevas instancias de clases. Y ¿cuando
    // lo has hecho?
    const unaNuevaInstanciaDeString = ''
    const unaStringVacia = new String() // Así se crea una nueva instancia de String.
    // ¡BOOOM! Lo escuché desde aquí.
    expect(unaStringVacia == unaNuevaInstanciaDeString).toBe(RellenameCorrectamente)
    // ¿Que piensas que ocurre, sí creamos un nuevo número?
    const nuevoNumero = new Number() // Así se crea una nueva instancia de Number.

    expect(nuevoNumero == 0).toBe(RellenameCorrectamente)
    // Lo siento, pero no sé porque eligieron el Zero, pero seguro que hay un motivo.
    // No se si te has dado cuenta, pero si, estoy usando solo == en lugar de
    // ===, no es un error. Lo explicaré en otras Koans sobre clases.

    // Ya se que todo esto del "new" y las instancias es curioso, pero puede que no
    // se vea porqué usar lo. Vamos a probar.
    const zero = new Number()
    // Sin trampas, una suma.
    expect(zero + 10).toBe(RellenameCorrectamente)

    const unNumero = Number // Sin instanciar, esto es la definición de Numero.
    const unNumeroMasDiez = unNumero + 10
    // Cuidado, que esto tiene trampa.
    expect(unNumeroMasDiez === 10).toBe(RellenameCorrectamente)
    // O.o
    // La siguiente expectación, si no la puedes resolver, puedes comentarlo o borrarlo.
    // Pero mira el error muy, muy, atentamente, a ver si ves que ha pasado.
    expect(unNumeroMasDiez).toBe(RellenameCorrectamente) // Añade algo de contenido dentro de las comillas.
    // Lo que intento que veas es que si usas el nombre de una clase, el valor
    // que contiene es la declaración.
    // La declaración de una clase es donde se indica como se tiene que comportar.
    // En el caso de Number, dentro de esta clase, se le indica cómo saber sumarse,
    // restar, multiplicar, etc... (el comportamiento).
    // Pero la instancia es la que se puede sumar, restar, tiene un valor numérico...
  })

  it('cuando creas una nueva instancia, empieza con los atributos de la definición', () => {
    // Ya hemos visto, que cuando creamos una nueva instancia de String, empieza vacía y
    // cuando creamos una nueva instancia de Number, empieza desde 0.
    // Ahora imagina, que definimos una nueva clase Moto, que siempre que creemos
    // una nueva instancia de esa clase,
    // queremos que empiece con 0 litros de combustible.
    const Moto = class {
      litrosDeCombustible = 0
    }
    // ¿estaremos declarando una clase de Moto que siempre se instancia sin
    // combustible? Probemos.
    const nuevaMoto = new Moto()

    expect(nuevaMoto.litrosDeCombustible).toBe(RellenameCorrectamente)
    // Ahora le incrementaremos unos litros de combustible.
    nuevaMoto.litrosDeCombustible += 3
    // Ahora crearemos otra nueva Moto.
    const otraNuevaMoto = new Moto()

    // Entonces, la cosa queda:
    expect(nuevaMoto.litrosDeCombustible).toBe(RellenameCorrectamente)
    expect(otraNuevaMoto.litrosDeCombustible).toBe(RellenameCorrectamente)
    // Cada instancia de Moto, tiene sus propios litros de combustible.
    // Mientras no cambiemos la declaración de Moto, siempre se iniciaran
    // sin combustible.
    // Esto se le llama, declarar VARIABLES DE INSTANCIA.
  })

  it('cuando declaras una clase, también le puedes declarar un comportamiento', () => {
    // Antes hemos dicho que la declaración de number no solo inicia instancias desde
    // Zero. También, declara, cómo se comporta cuando suma, resta, etc...
    // Hace tiempo hablamos que las funciones es una forma de declarar operaciones,
    // ¿lo recuerdas?
    // Pues si antes declaramos variables de instancia. Ahora vamos a declarar
    // FUNCIONES DE INSTANCIA
    // Voy a crear de definición de un Patinete eléctrico, que empieza con la
    // batería al 100% y cuando arranca, consume un 1% de batería.
    const PatineteElectrico = class {
      porcentajeDeBateria = 100
      // Variable de instancia
      arrancar() {
        this.porcentajeDeBateria -= 1
      }
      // Cuidado con los bloques de código, dentro de los bloques de código.
    }
    // Declaración de una función de instancia, que le resta 1 a la variable
    // de instancia.

    // Por ahora, la variables de instancia, se declaran, sin "const", ni "let",
    // pero cuando se usan dentro del bloque de código de la clase, se refieren
    // a ellas con "this.", que es la referencia que se va a usar en una instancia.
    // Nota: Esto. Esto, es el Big Bang.
    const patinete = new PatineteElectrico()

    expect(patinete.porcentajeDeBateria).toBe(RellenameCorrectamente)

    patinete.arrancar() // Atentos a los paréntesis que indica, la ejecución de una función.

    expect(patinete.porcentajeDeBateria).toBe(RellenameCorrectamente)

    // Si ya está arrancado el patinete, ¿nos deja volverlo a arranca?

    patinete.arrancar()

    expect(patinete.porcentajeDeBateria).toBe(RellenameCorrectamente)
    // ¿Qué esperabas? Si solo le hemos definido como se arranca xD
    // Mi patinete aún tiene algunas deficiencias ;)
    // Pues ahora, voy a por el Patinete PRO.
    // Si arranco mi PatinetePRO y ya está arrancado... No consume batería.
    const PatinetePRO = class {
      porcentajeDeBateria = 100
      estaArrancado = false
      // Todos nuestros patinetes van a empezar sin estar arrancados.
      arrancar() {
        if (!this.estaArrancado) {
          //SI, NO, ESTA ARRANCADO, resta 1 de batería
          this.porcentajeDeBateria -= 1
        }
        // Y aquí es donde indicamos que lo hemos arrancado:
        this.estaArrancado = true
      }
    }
    // recuerda que "this." es para decirle que se va a usar desde
    // una instancia (Es muy importante)

    const patienetePro = new PatinetePRO()

    expect(patienetePro.porcentajeDeBateria).toBe(RellenameCorrectamente)

    patienetePro.arrancar()

    expect(patienetePro.porcentajeDeBateria).toBe(RellenameCorrectamente)

    patienetePro.arrancar()
    // ¡QUÉ EXPECTACIÓN!
    expect(patienetePro.porcentajeDeBateria).toBe(RellenameCorrectamente)
    // Casi, todo lo que hemos visto en estas Koans, ha sido para
    // arrancar este patinete ^^

    // Si te dejo a solas... podrás hacer que el PatineteMegaPro
    // ¿pueda pararse?
    const PatineteMegaPro = class {
      porcentajeDeBateria = 100
      estaArrancado = false

      arrancar() {
        if (!this.estaArrancado) {
          this.porcentajeDeBateria -= 1
        }

        this.estaArrancado = true
      }
      // Si la función arrancar, pone el atributo "estaArrancado" a verdadero.
      // ¿Comó tendrá que dejarlo la función parar?
      parar() {
        // Entre estas llaves va tu código. CMON!

      }
    }

    const theBestPatineteEver = new PatineteMegaPro()
    // BRO!
    theBestPatineteEver.arrancar()

    expect(theBestPatineteEver.porcentajeDeBateria).toBe(RellenameCorrectamente)

    theBestPatineteEver.arrancar()
    // Esto es lo de antes... Si ya está arrancado, no vuelve a arrancar.
    expect(theBestPatineteEver.porcentajeDeBateria).toBe(RellenameCorrectamente)

    theBestPatineteEver.parar()
    theBestPatineteEver.arrancar()

    expect(theBestPatineteEver.porcentajeDeBateria).toBe(RellenameCorrectamente)

    theBestPatineteEver.parar()
    // Parar, no consume batería
    expect(theBestPatineteEver.porcentajeDeBateria).toBe(RellenameCorrectamente)

    // Y ¿qué pasaría si creamos un nuevo PatineteMegaPro?
    const otroPatineteMegaPro = new PatineteMegaPro()

    expect(otroPatineteMegaPro.porcentajeDeBateria).toBe(RellenameCorrectamente)
    // Esto solo era para ver como va el nivel de atención ;)
  })
  // Volviendo a lo del Big Bang. Yo sostengo la teoría de que cuando la
  // entidad (que fuera), se le ocurrió la P.O.O. En el momento que llego a las
  // instancias, creo el universo conocido. Aquello hizo: ¡BOOM! xDD
  it('DIY', () => {
    // Uff... despacito.
    // Esta vez vas a crear una BiciElectrica
    // cuando sea nueva, empezará sin batería. Y cuando
    // se le introduzca una batería, la carga subirá al 100%.
    // También cada vez que se pedalea, bajará 1 la batería
    // y la batería nunca podrá bajar de 0.

    // Ahora lenguje coder:
    // 1 - Vas a DEFINIR una CLASE que se llama BiciElectrica.
    // 2 - Cuando se crea una NUEVA instancia, su atributo "porcentajeDeBateria" será IGUAL a 0.
    // 3 - Esta clase tendrá una función llamada "ponerBateria" que IGUALARA "porcentajeDeBateria" a 100.
    // 4 - También tendrá otra función llamada "pedalear" que RESTARÁ de 1 EN 1 el ATRIBUTO "porcentajeDeBateria".
    // 5 - Cuando usas la función "pedalear", solo restará "porcentajeDeBateria" SI el "porcentajeDeBateria" ES MAYOR que 0.

    // Ahora iremos desgranando, lee los expects con calma e intenta solucionarlos 1 a 1.
    // La definición de tu clase va aquí abajo.


    // 1 - Vas a DEFINIR una CLASE que se llama BiciElectrica.
    expect(BiciElectrica).not.toBeUndefined()

    const biciNueva = new BiciElectrica()
    // 2 - Cuando se crea una NUEVA instancia, su atributo "porcentajeDeBateria" será IGUAL a 0.
    expect(biciNueva.porcentajeDeBateria).toBe(0)

    biciNueva.ponerBateria()
    // 3 - Esta clase tendrá una función llamada "ponerBateria" que IGUALARA "porcentajeDeBateria" a 100.
    // Nota: Solo por si acaso... acuerdate del "this."
    expect(biciNueva.porcentajeDeBateria).toBe(100)

    biciNueva.pedalear()
    // 4 - También tendrá otra función llamada "pedalear" que RESTARÁ de 1 EN 1 el ATRIBUTO "porcentajeDeBateria".
    expect(biciNueva.porcentajeDeBateria).toBe(99)

    biciNueva.pedalear()

    expect(biciNueva.porcentajeDeBateria).toBe(98)
    // Vamos a probar a poner otra batería a medias, si esta todo bien, esto irá solo.

    biciNueva.ponerBateria()

    expect(biciNueva.porcentajeDeBateria).toBe(100)
    // Para el siguiente test no quiero pedalear 101 veces, creamos una bici nueva y
    //  que empiece con 0 de batería ;) Aprovecha que aquí las bicis son gratis xDDD
    const otraNuevaBici = new BiciElectrica()

    otraNuevaBici.pedalear()
    // 5 - Cuando usas la función "pedalear", solo restará "porcentajeDeBateria" SI el "porcentajeDeBateria" ES MAYOR que 0.
    expect(otraNuevaBici.porcentajeDeBateria).toBe(0)
    // Patinetes y bicis, vamos aumentado currículum ^^
  })
  // Después de la FizzBuzz pasar este DIY es otro hito. Que lo sepas.
  it('otras maneras de declarar clases', () => {
    // Aunque a MI nivel personal, la forma que más me gusta declarar clases
    // es como lo he puesto aquí. Lo más común que veréis será la siguiente manera:
    class LaFormaQueMenosMeGusta {}
    // Y ¿por que me gusta mas la otra? porque usando "const" nadie la puede
    // reasignar.
    LaFormaQueMenosMeGusta = 'Me han reasignado y ya no soy una clase'

    expect(LaFormaQueMenosMeGusta).toBe(RellenameCorrectamente)
  })

  it('otras maneras de declarar atributos', () => {
    // Esta vez, en parte me gusta más la forma que no he explicado, porque
    // muchas veces acabas usandola si o si, esta vez, ninguna tiene alguna
    // diferencia con la otra y casi todo el mundo conoce la alternativa y no
    // la que he explicado. Entonces la otra hace el código "mas entendible".
    // Primero una demo sin explicaciones y luego poco a poco.

    const MotoElectrica = class {
      constructor() {
        this.porcentajeDeBateria = 100
      }
    }

    const nuevaMoto = new MotoElectrica()

    expect(nuevaMoto.porcentajeDeBateria).toBe(RellenameCorrectamente)
    // Venga... otro universo... Tomate algo para el dolor de cabeza xD
    // Fijate que siempre que usamos "new" después del nombre de la clase
    // usamos los "()" como si ejecutamos la clase (que es lo que hacemos
    // con las funciones, cuando las queremos ejecutar).
    // Más o menos esto es como si cuando ejecutamos el "new" de una clase
    // estuviéramos ejecutando la función "constructor", es como un "sinónimo".
    // Lo que viene a decir, que cuando hacemos una NUEVA MotoElectrica
    // en realidad, estamos CONSTRUYENDO una NUEVA instancia de MotoElectica.
    // ¡BOOM! otro más...
    // Los astrólogos se lo van a pasar pipa.

    // Consejo: Usa el que más fácil te sea y poco a poco, con el tiempo
    // ya veras cual te gusta más y tu porque.
    // Ahora es cuando me dices: - Si... pero... tu has comentado que casi
    // siempre se acaba usando de esta manera.
    // A lo que yo respondería: - Si, porque imagina que quieres un nuevo
    // personaje de un videojuego y que empiece cada vez con una cantidad de vida.
    // Pues así se definiría.
    const Personaje = class {
      constructor(puntosDeVidaIniciales) {
        this.puntosDeVida = puntosDeVidaIniciales
      }
    }
    // La función constructor se declara como cualquier otra, pero se usa así:
    const unPersonaje = new Personaje(100)
    const otroPersonaje = new Personaje(50)
    // Pues nada... actualicemos una vez más el mapa estelar... xDD
    expect(unPersonaje.puntosDeVida).toBe(RellenameCorrectamente)
    expect(otroPersonaje.puntosDeVida).toBe(RellenameCorrectamente)
  })
  // Descansa, vamos a algo fácil ;)
  it('los nombres de las clases se definen con cada primera letra de cada palabra en mayúsculas', () => {
    // Pues si, es una convención "mundial" que las clases se declaran así en Javascript
    // y las funciones y las variables con la primera en minúsculas.
    // Universo... prepárate...
    // En Javascript los nombres de las clases se escriben en la forma llamada "PascalCase".
    const SoyUnaClaseConElNombreEscritoEnPascalCase = class {}
    // las funciones y las variables en la forma llamada "camelCase"
    const soyUnaVariableEnCamelCase = 'solo la primera letra de la primera palabla en minúsculas'
    const soyUnaFuncionEnCamelCase = function() {}
    // ¡Y! en muy pocas ocasiones en Javascript se usa la forma de... "snake_case"
    const SOY_ESPECIAL_EN_JAVASCRIPT = 'esto para otro día, lo prometo ^^'
    // esta expectación no tiene trampa
    expect(SOY_ESPECIAL_EN_JAVASCRIPT).toBe(RellenameCorrectamente)
  })
})
// Si las clases en Javascript son la Joya de la corona. Intenta no pasar de estas
// koans sin entender bastante bien lo que son. Y si ya lo entiendes, te aconsejo
// que deshagas todos los cambios en este fichero y soluciones las koans una vez más.
// Venga... va... que te lo has pasado muy bien xDD (REPETIR_UNA_VEZ_ESTAS_KOANS)
