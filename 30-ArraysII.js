
describe('30-ArraysII.js', () => {
  // Arrays II Las dos iteraciones ^^
  // Recorrer una Array con diferentes motivos, es tan común
  // que casi todos los lenguajes tienen un montón de iteradores
  // para ahorrarnos escribir un montón de código y encima aporta
  // una buena semántica (ya está aquí él de la semántica ;)
  // Pero nada de lo que hay aquí  se pueda hacer con un buen "for".

  it('(foreach) pueden recorrer sus valores', () => {
    // Este es como el "for of", pero que lo traen las Arrays.
    const arrayConGastos = [12,35,78,43,12]
    let total = 0

    arrayConGastos.forEach(function(gasto) {
      total += gasto
    })

    expect(total).toBe(RellenameCorrectamente)
    // Fácil, ¿no?
    // forEach es un método de Array que ejecuta una función por cada
    // uno de sus elementos y cuando ejecuta esa función le pasa como
    // argumento el elemento que está iterando.
    // Ufff... es más difícil de explicar que de usar ^^
    // Vamos a ver otra manera de usar este método.
    total = 0
    const sumaAlTotal = function(elemento) {
      total += elemento
    }

    arrayConGastos.forEach(sumaAlTotal)
    // Fijate bien que la función se pasa sin ejecutar (sin usar paréntesis).
    // Se le pasa la definición y el por dentro ya lo ejecuta con los paréntesis.
    // Esto se va a poder hacer con casi todos los iteradores.
    expect(total).toBe(RellenameCorrectamente)
    // Ahora viene la chapa de siempre, ¿Qué forma es mejor? pues las dos
    // son buenas, si encuentras una manera de darle a la función que le pasas
    // un nombre que se lea bien, seguramente la buena será la segunda, si no,
    // pues será la primera.
  })

  it('(foreach) pueden recorrer sus valores dando su índice', () => {
    const arrayConGastos = [2,32,81,3,12]
    let total = 0
    let sumaDeIndices = 0

    arrayConGastos.forEach(function(gasto, indice) {
      total += gasto
      sumaDeIndices += indice
    })
    // Esto aunque no lo parezca puede ser muy útil. El caso
    // más típico es cuando tienes dos arrays y tienes que comparar
    // lo que tiene cada una en la misma posición.
    expect(total).toBe(RellenameCorrectamente)
    expect(sumaDeIndices).toBe(RellenameCorrectamente)
    // Si quieres probar qué pasa si a la función que recibe el forEach
    // le pones que reciba un tercer argumento... puede que lleve el array
    // original ^^
  })

  it('(every) devuelve si todos los elementos cumplen una condición', () => {
    const gastos = [12,35,78,43,12]

    const contienePequenyosGastos = gastos.every(function(gasto) {
      return gasto <= 5
    })

    expect(contienePequenyosGastos).toBe(RellenameCorrectamente)

    const esUnGastosEsperado = function(gasto) {
      return gasto < 40
    }

    const contieneGastosInesperados = gastos.every(esUnGastosEsperado)

    expect(contieneGastosInesperados).toBe(RellenameCorrectamente)
  })

  it('(filter) devuelve una nueva array con los elementos que cumplen una condición', () => {
    const gastos = [12,35,78,43,12]

    const gastosInesperados = gastos.filter(function(gasto) {
      return gasto > 40
    })

    expect(gastosInesperados).toBe(RellenameCorrectamente)
  })

  it('(find) devuelve los elementos que cumplen una condición', () => {
    const gastos = [12,35,78,43,12]

    const primerGastoInesperado = gastos.find(function(gasto) {
      return gasto > 40
    })

    expect(primerGastoInesperado).toBe(RellenameCorrectamente)
  })

  it('(flat) devuelve una array con todos los elementos en una única array', () => {
    // Este es infinitamente más fácil de entender viéndola en acción que explicando.
    // La traducción literal es aplanar. Así que si tenemos una Array con valores que
    // son otras array, crea una nueva array con todos los elementos en el mismo nivel.
    const arrayDeArrays = [1,2,3, [4,5,6], [7, 8, 9, 0]]
    // Ufff... que lio.

    const unaArray = arrayDeArrays.flat()

    expect(unaArray).toBe(RellenameCorrectamente)
    // Solo "aplana" un "nivel", si contiene un array con array, las
    // últimas no las aplana.
    const arrayConMuchasArrays = [1,2,3, [4,5,6], [7, [8, [9], 0]]]

    const arrayConArrays = arrayConMuchasArrays.flat()

    expect(arrayConArrays).toBe(RellenameCorrectamente)
  })

  it('(map) devuelve una array con lo que retorna la función que se le pasa', () => {
    // Aunque el nombre del test me ha quedado un poco raro. Es lo que hace
    // y este junto con el forEach son los más usados.
    const gastos = [12,35,78,43,12]

    const tipoDeGastos = gastos.map(function(gasto) {
      let tipoDeGasto = 'compra'

      if (gasto > 40) {
        tipoDeGasto = 'factura'
      }

      return tipoDeGasto
    })

    expect(tipoDeGastos).toBe(RellenameCorrectamente)
  })

  it('(reduce) devuelve el acumulado de los elementos del array', () => {
    // Este para mi, es el más complejo y de usar, pero evita escribir
    // un montón de variables. Aunque hay veces que no lo uso, por eso mismo,
    // al evitar variables, podemos perder ¡SEMÁNTICA! ^^
    const gastos = [12,35,78,43,12]

    const total = gastos.reduce(function(total, gasto) {
      return total += gasto
    }, 0)
    // como primer argumento recibe una función, que le llegan dos argumentos,
    // primero el "acumulado" y segundo el elemento actual, lo que devuelve
    // esta función se le añade al "acumulado". Y el "reduce" como segundo argumento
    // recibe el valor inicial del "acumulado".
    expect(total).toBe(RellenameCorrectamente)
    // Esto es un equivalente al primer test que hicimos en este fichero.
  })

  it('(reverse) devuelve una array con los elementos en la posición invertida', () => {
    const elementosIniciales = [0,1,2,3,4,5]

    const elementosInvertidos = elementosIniciales.reverse()

    expect(elementosInvertidos).toBe(RellenameCorrectamente)
  })

  it('(some) indica si alguno de los elementos cumple una condición', () => {
    // Este es el caso contrario al "every"
    const gastos = [12,35,78,43,12]

    const hayAlgunGranGasto = gastos.some(function(gasto) {
      return gasto > 60
    })

    expect(hayAlgunGranGasto).toBe(RellenameCorrectamente)

    const hayAlgunPequenyoGasto = gastos.some(function(gasto) {
      return gasto < 5
    })

    expect(hayAlgunPequenyoGasto).toBe(RellenameCorrectamente)
  })

  it('(sort) devuelve una array con los elementos ordenados', () => {
    // Los ordena de forma alfabética ascendentemente. ¿Y si los quiero
    // ordenados del revés?, pues primero un "sort" y luego un "reverse" ;P
    let elementosOrdenados = [12, 22, 35, 43, 78].sort()
    // Como aprovecho para meter cositas ^^
    expect(elementosOrdenados).toBe(RellenameCorrectamente)
    // Recuerda que es alfabéticamente.
    elementosOrdenados = [12, 2, 35, 4, 78].sort()

    expect(elementosOrdenados).toBe(RellenameCorrectamente)
    // el 12 empieza por 1 que va antes que el 2 ^^

    // También se le puede pasar una función para darle el criterio a ordenar
    // pero es bastante complejo. El día que te haga falta, internet sabe como
    // hacerlo, pregúntale ^^
  })
})
