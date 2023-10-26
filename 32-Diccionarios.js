
describe('32-Diccionarios.js', () => {
  // Los diccionarios son un tipo de valor, que es una colección,
  // pero en lugar de ser posición -> valor, como las arrays o las
  // strings, este es clave -> valor. ¿Qué significa esto? Que en lugar
  // de usar 0, 1, 2... para acceder a los valores, tú le dirás la clave
  // que necesitas para acceder a ese valor. Ahora veremos cómo.

  // Antes de seguir que sepas, que yo le llamo diccionario, por no
  // mezclar conceptos, pero puede que algún día alguien te los mencione
  // como objetos. Pero por ahora les llamaremos diccionarios.

  it('se definen de la siguiente manera', () => {
    const unDiccionarioVacio = {}
    // La variable lo explica, pero esto es un diccionario vacío ^^
    // Se definen con llaves. Como la array, pero con otro símbolo.
    // Así se le define un valor que pertenece a una clave.
    const unDiccionarioConUnaClaveYUnValor = { unaClave: 'unValor' }
    // Como podemos acceder a ese valor, en las arrays al ser el primero
    // usaríamos array[0], pero aquí no va por posición, si no que por clave.
    expect(unDiccionarioConUnaClaveYUnValor['unaClave']).toBe(RellenameCorrectamente)
    // Existe otra manera
    expect(unDiccionarioConUnaClaveYUnValor.unaClave).toBe(RellenameCorrectamente)
    // Que sospechoso, se parece a acceder a un atributo de una clase ;)
    // ¿Qué pasa si accedemos a una clave que no está definida?
    expect(unDiccionarioVacio['claveSinDefinir']).toBe(RellenameCorrectamente)
    expect(unDiccionarioVacio.claveSinDefinir).toBe(RellenameCorrectamente)
    // Sin sorpresas, ¿no?
  })

  it('puede contener cualquier valor', () => {
    // Pues como la array, todo lo que se pueda asignar a una variable
    // puede ponerse como valor.
    const unDiccionario = {
      booleano: true,
      integer: 19,
      float: 12.1,
      funcion: function() {},
      clase: class {},
      array: [],
      diccionario: { otraClave: 'otroValor' }
    }
    // La clave/valor se separa por comas.
    expect(unDiccionario.booleano).toBe(RellenameCorrectamente)
    expect(unDiccionario.integer).toBe(RellenameCorrectamente)
    expect(unDiccionario.float).toBe(RellenameCorrectamente)
    expect(unDiccionario.funcion.toString()).toBe(RellenameCorrectamente)
    // Pequeña trampa lo del toString() ^^
    expect(unDiccionario.clase.toString()).toBe(RellenameCorrectamente)
    expect(unDiccionario.array).toBe(RellenameCorrectamente)
    // ¿Recuerdas cómo acceder a un array de dentro de un array?
    // Si no repasa los ficheros de Arrays y saca el valor dentro del
    // diccionario :)
    expect(RellenameCorrectamente).toBe('otroValor')
    // A todo esto, aunque te lo puedes imaginar, puede existir un
    // diccionario, que uno de sus valores sea un diccionario, que a la
    // vez tenga otros diccionarios, etc, etc... Si llega el día
    // que te enfrestes algo así, lo siento por ti xDDDD
  })

  it('solo puede tener strings como claves', () => {

    const diccionario = {
      letras: 'valorDeLetras',
      0: 'valorDeInteger',
      1.1: 'valorDeFloat'
    }
    // Sospechoso, ¿no?
    expect(diccionario['letras']).toBe(RellenameCorrectamente)
    expect(diccionario[0]).toBe(RellenameCorrectamente)
    // No dudes.
    expect(diccionario[1.1]).toBe(RellenameCorrectamente)
    // Aunque veas una cosa y el test diga otra.
    expect(diccionario['0']).toBe(RellenameCorrectamente)
    // Ohhh..... tenemos un problema...
    expect(diccionario['1.1']).toBe(RellenameCorrectamente)
    // Ohhh..... puede que sea uno gordo.
    // Recuerdas porque hablamos de no usar el doble igual
    // y que siempre usaras el triple, pues el diccionario gasta el doble ^^
    expect(0 == '0').toBe(RellenameCorrectamente)
    expect(1.1 == '1.1').toBe(RellenameCorrectamente)
    // Cosas que no pasan con el triple igual.
    expect(0 === '0').toBe(RellenameCorrectamente)
    expect(1.1 === '1.1').toBe(RellenameCorrectamente)
    // Luego hablaremos de esto que viene, pero por ahora que sepas que te
    // devuelve una array con las claves del diccionario.
    const clavesDelDiccionario = Object.keys(diccionario)
    expect(clavesDelDiccionario).toBe(RellenameCorrectamente)
    // Todo strings, al final el test decia la verdad xDDDDDDDDD
  })

  it('puede añadir valores', () => {
    const unDiccionario = {
      unaClave: 'unValor'
    }

    unDiccionario['ortaClave'] = 'otroValor'
    unDiccionario.ortaClaveMas = 'otroValorMas'

    expect(unDiccionario.ortaClave).toBe(RellenameCorrectamente)
    expect(unDiccionario['ortaClaveMas']).toBe(RellenameCorrectamente)
  })
  // No se si te has fijado, pero la variable se declara con "const"
  // Pero la hemos cambiado O.o
  // Recuerda que "const" hace que no la podamos REASIGNAR, pero
  // el contenido sí que se puede cambiar ;)
  it('puede reasignar valores', () => {
    const unDiccionario = {
      unaClave: 'unValor'
    }

    unDiccionario.unaClave = 'otroValor'

    expect(unDiccionario['unaClave']).toBe(RellenameCorrectamente)

    unDiccionario['unaClave'] = 'otroValorMas'

    expect(unDiccionario.unaClave).toBe(RellenameCorrectamente)
  })

  it('sabe si contiene una clave', () => {
    const diccionario = {
      unaClave: 'cualquierValor'
    }

    const contieneLaClave = diccionario.hasOwnProperty('unaClave')

    expect(contieneLaClave).toBe(RellenameCorrectamente)

    const contieneOtraClave = diccionario.hasOwnProperty('otraClave')

    expect(contieneOtraClave).toBe(RellenameCorrectamente)
  })

  it('puede obtener un listado de sus claves', () => {
    // Llegó el momento, aunque ya lo vimos en acción.
    const asistentes = {
      Akira: 'Software developer',
      Charlie: 'Software developer',
      Harper: 'Recruiter',
      Jess: 'Software developer'
   }

    const nombres = Object.keys(asistentes)

    expect(nombres).toBe(RellenameCorrectamente)
    // Nada inesperado. Pero... si lo gastamos así.
    const developers = []
    const recruiters = []

    for(let nombre of nombres) {
      // Recorremos uno a uno los nombres, que es la lista de claves.
      const puesto = asistentes[nombre]

      if (puesto === 'Software developer') {
        developers.push(nombre)
      }

      if (puesto === 'Recruiter') {
        recruiters.push(nombre)
      }
    }

    expect(developers).toBe(RellenameCorrectamente)
    expect(recruiters).toBe(RellenameCorrectamente)
    // Hey!!! Ya podemos iterar diccionarios ^^ Puede que pienses que
    // más adelante me vaya a sacar uno de mis truquitos y veamos
    // una manera más sencilla de iterar diccionarios. Yo de ti,
    // me aprendería esta, porque es la que hay :(
    // Venga va... cuento la verdad a medias... pero acostumbrate, que no
    // va a ser muy diferente.
  })

  it('puede obtener un listado de sus valores', () => {
    const gastos = { facturaLuz: 50, facturaCompra: 30, facturaAgua: 40 }

    const cantidades = Object.values(gastos)

    expect(cantidades).toBe(RellenameCorrectamente)
  })

  it('puede obtener un listado de sus claves junto a sus valores', () => {
    // Es más fácil de ver, que de explicar.
    const gastos = { facturaLuz: 50, facturaCompra: 30, facturaAgua: 40 }

    const facturas = Object.entries(gastos)
    // Si aún no lo has descubierto, escribe cualquier cosa en el toBe y tira el test ^^
    expect(facturas).toBe(RellenameCorrectamente)
  })

  it('no puede comprarse con otros diccionarios', () => {
    // Parece que Javascript no sabe comparar los tipos un poco complejos :(
    expect({} === {}).toBe(RellenameCorrectamente)
  })

  it('puede "convertirse" en string', () => {
    const unDiccionario = {}

    const unaString = unDiccionario.toString()
    // Esto lo estoy haciendo para que sepas, que si intentas
    // convertir cualquier objeto a string, pasa lo siguiente.
    expect(unaString).toBe(RellenameCorrectamente)
    // No es lo que esperabas
  })

  it('puede convertirse en JSON', () => {
    // ¿Qué es esto del JSON?
    // Te ahorro la busqueda en internet.
    // Son las siglas de JavaScript Object Notation...
    // Es uno de los tipos de datos que se usa para intercambiar
    // información entre máquinas/servidores/servicios...
    // Pero que en este caso nos va a dar el resultado que esperabamos
    // con el toString o muy parecido.
    const unDiccionario = { unaClave: 'unValor' }

    const string = JSON.stringify(unDiccionario)
    // Recuerda lo de las comillas dobles y sencillas, puede que te sea útil.
    // Si no lo recuerdas, recurre a la primera koan sobre Strings ;P
    expect(string).toBe(RellenameCorrectamente)
    // Casi todos los tipos que hemos visto se pueden convertir a JSON
    // de esta misma manera. Y también se puede invertir el proceso.
    const otraVezElDiccionario = JSON.parse(string)

    expect(otraVezElDiccionario).toBe(RellenameCorrectamente)
  })

  it('DIY: Mercado', () => {
    // Vamos a hacer una especie de TPV sencillito ^^
    // Vamos a tener un diccionario con los productos del mercado
    // y su precio. y cuando le pasemos una lista de la compra
    // nos devolverá el total.
    const precios = {
      platano: 1.50,
      manzana: 1.0,
      cebolla: 0.5,
      pan: 2.0,
      sandia: 3.0,
      chocolate: 2.0
    }
    // Lee atentamente los expects y pasa uno a uno. Vas a necesitar
    // de tu conocimiento sobre arrays para pasar este DIY. No solo
    // se solucionará con diccionarios.
    // Escribe aquí abajo tu clase.


    // Esta vez, sin la parte fácil, a tope.
    const mercado = new Mercado(precios)
    const saleSinCompra = []

    let factura = mercado.facturaPara(saleSinCompra)

    expect(factura).toBe(0.0)
    // Vamos a comprar algo esta vez
    const merienda = ['manzana']

    factura = mercado.facturaPara(merienda)

    expect(factura).toBe(1.0)
    // Ahora una de verdad
    const meriendaDeLaBuena = ['pan', 'chocolate']

    factura = mercado.facturaPara(meriendaDeLaBuena)

    expect(factura).toBe(4.0)
    // Ahora algo más ligerito.
    const meriendaLigera = ['platano', 'manzana']

    factura = mercado.facturaPara(meriendaLigera)

    expect(factura).toBe(2.5)

    const compraParaElDía = ['pan', 'cebolla', 'cebolla', 'sandia', 'platano']

    factura = mercado.facturaPara(compraParaElDía)

    expect(factura).toBe(7.5)

    const compraFamiliar = [
      'pan', 'cebolla', 'cebolla', 'sandia', 'platano', 'platano', 'manzana',
      'pan', 'chocolate', 'manzana', 'cebolla', 'sandia', 'platano', 'chocolate'
    ]

    factura = mercado.facturaPara(compraFamiliar)

    expect(factura).toBe(22.0)
  })
  // Ahora que ya los conoces, te explicare más profundamente porque no quiero
  // llamar Objeto a los diccionarios. Primero, Javascript ahora es un lenguaje
  // de programación orientado a objetos, entonces muchas cosas son objetos, como
  // las funciones, las arrays, las clases, etc... entonces puede llevar a confusión
  // llamar a este con el nombre de Objeto, porque hay muchos. Pero que sepas
  // que hay un motivo histórico para que este se le llame Objeto. Pero eso
  // lo dejo de deberes ^^

  // A todo esto. Ya has programado, patinetes, robots, IAs, juegos...
  // y ahora un mercado... ¡MUNDO PREPÁRATE! ;P
})
