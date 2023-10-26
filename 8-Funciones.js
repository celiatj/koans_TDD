// Ojo que con lo que sabemos hasta ahora y con esto, ¡YA SE PUEDE PROGRAMAR!
describe('8-Funciones.js', () => {
  // Las funciones son la manera que tenemos para reutilizar operaciones.
  // Hasta ahora con lo que hemos aprendido las variables contienen sólo valores,
  // con las funciones podemos asignarle operaciones. Es más fácil de entender
  // con la práctica. Así que vamos a ello.
  it('hay que definirlas para poder usarlas', () => {
    // Hay que diferenciar muy bien cuando definimos una función de cuando la
    // ejecutamos, aunque siempre hay que definirla antes de ejecutarla/usarla.
    // Así se puede definir una función.
    let funcionParaSumar = function(unNumero, otroNumero) {
      return unNumero + otroNumero
    }
    // Vale, parte por parte.
    // Como se puede ver, hemos asignado a la variable "funcionParaSumar" una función.
    // Esta función necesita recibir dos números cualquiera (que usarían con los
    // argumentos "unNumero" y "otroNumero") y por último cuando usemos la función
    // ejecutará todo lo que se encuentre entre las llaves "{}" y esta función
    // lo único que va a ejecutar es que nos devuelva el resultado de la suma
    // de sus argumentos, que es el valor que tenga justo después de la palabra
    // "return".
    expect(funcionParaSumar(4, 1)).toBe(5)
    // Aquí funcionParaSumar al poner los paréntesis, le decimos que la vamos a
    // ejecutar y entre paréntesis le pasamos los argumentos que queremos que sume
    // el 4 se le asignará al argumento que se llama "unNumero" porque van primero y
    // luego el 1 se le asignará al argumento "otroNumero" y como estamos ejecutando
    // la función nos devuelve lo que tiene la suma de los dos números.
    expect(funcionParaSumar(1, 3)).toBe(RellenameCorrectamente)
    expect(funcionParaSumar(6, 8)).toBe(RellenameCorrectamente)
    expect(funcionParaSumar(123431, 23451)).toBe(RellenameCorrectamente)
    expect(funcionParaSumar(2.34, 10)).toBe(RellenameCorrectamente)
    // Nota: Hay más maneras de definir funciones, las veremos ;)
  })

  it('el resultado de ejecutar las funciones también se puede asignar en variables', () => {
    let operacionCompleja = function(unNumero, otroNumero) {
      return unNumero + otroNumero * unNumero / otroNumero
    }

    let resultado = operacionCompleja(20, 667)
    // esta variable ya es como cualquier otra, pero en lugar de contener
    // el resultado de una operación directamente, se guarda el resultado
    //  de ejecutar nuestra función.
    expect(resultado).toBe(RellenameCorrectamente)
    expect(resultado + 1).toBe(RellenameCorrectamente)

    let otroResultado = operacionCompleja(89, 123)

    expect(otroResultado).toBe(RellenameCorrectamente)
    expect(resultado + otroResultado).toBe(RellenameCorrectamente)
  })

  it('que puede contener las funciones', () => {
    // Cualquier cosa, otras funciones, variables, etc...
    let calcularPorcentaje = function(total, porcentaje) {
      let cienPorCien = 100

      let totalEnCienPartes = total / cienPorCien
      let parte = totalEnCienPartes * porcentaje
      // Podemos declarar funciones que contienen valores y resultados

      return parte
    }

    let resultado = calcularPorcentaje(1000, 25)

    expect(resultado).toBe(RellenameCorrectamente)

    // ¡Aquí viene! Funciones con funciones dentro, !CUIDADO! ;P
    calcularPorcentaje = function(total, porcentaje) {
      let partirEnCienPartes = function(total) { return total / 100 }
      let calcularParte = function(cienPartes, porcertaje) { return cienPartes * porcertaje }

      let totalEnCienPartes = partirEnCienPartes(total)
      let parte = calcularParte(totalEnCienPartes, porcentaje)

      return parte
    }
    // En este casó es mucho más sencilla la definición anterior,
    // pero así se ve que puede contener algo más que variables.
    resultado = calcularPorcentaje(1000, 25)

    expect(resultado).toBe(RellenameCorrectamente)
  })

  it('¿cuantos argumentos pueden recibir?', () => {
    // Pues desde ninguno hasta todos los que queramos.
    let esPar = function(unNumero) {
      // Aunque ya se ha visto, esta solo recibe una.
      let resto = unNumero % 2

      let esMultipleDeDos = (resto === 0)
      // Cualquier número que sea divisible entre dos es par.
      return esMultipleDeDos
    }

    expect(esPar(4)).toBe(RellenameCorrectamente)
    expect(esPar(9)).toBe(RellenameCorrectamente)
    expect(esPar(358)).toBe(RellenameCorrectamente)
    expect(esPar(13247984371)).toBe(RellenameCorrectamente)

    let esTresPar = function() {
      // No recibe nada, esta caso es un poco forzado,
      // pero ya veremos casos en los que sea un poco más útil ;P
      return (3 % 2) === 0
    }
    // ¡Hey! También pueden devolver resultados de operaciones booleanas ^^
    expect(esTresPar()).toBe(RellenameCorrectamente)
    // MUY IMPORTANTE, aunque la función no reciba ningún argumento, hay que
    // poner los paréntesis. Los paréntesis es lo que usamos para ejecutar las funciones.
    let operacionMounstruosa = function(unNumero, otroNumero, otroNumeroMas, meEmpiezoAQuedarSinNombres, mas, yMas) {
      // Los nombres de los argumentos no se pueden repetir
      return unNumero + otroNumero + otroNumeroMas + meEmpiezoAQuedarSinNombres + mas + yMas
    }

    expect(operacionMounstruosa(1,1,1,1,1,1)).toBe(RellenameCorrectamente)
  })

  it('¿cuantas cosas pueden devolver?', () => {
    // Aquí la cosa ya no es tan abierta, o devuelve una cosa o ninguna.
    let esImpar = function(unNumero) {
      let esPar = (unNumero % 2) === 0
      let esImpar = !esPar // Recuerda que el "!" invierte un valor booleano ;P

      return esImpar
      // "return" solo puede devolver un valor. Ese valor es justo lo que hay
      // después de la palabra "return".
    }

    expect(esImpar(3)).toBe(RellenameCorrectamente)
    expect(esImpar(6)).toBe(RellenameCorrectamente)
    // Ahora es cuando se piensas, pues ponemos dos veces "return" :)
    // en el siguiente test, lo probamos y vemos que pasa.

    let descubrirElNumeroDeLaLoteria = function() {
      // Si rellenas esto correctamente, llamame xD
      // Pero te adelanto que una función, si no tiene return devuelve
      // el un valor undefined.WW
    }
    // Si no definimos lo que devuelve, pues el resultado es indefinido
    expect(descubrirElNumeroDeLaLoteria()).toBe(RellenameCorrectamente)
    // Si no sabes cómo rellenarlo, usa cualquier valor en el toBe y
    // ejecuta los test para ver qué sale ;)
  })

  it('el "return" es el final de la función', () => {
    // Retomando lo de poner varios returns para devolver varias cosas
    let funcionConVariosReturns = function() {
      return 142
      return 143
    }
    // El primer return que se ejecuta marca el fin de la función, todo el
    // código que pongas después, no se ejecutará.
    expect(funcionConVariosReturns()).toBe(RellenameCorrectamente)
  })

  it('qué ocurre, si no ejecuto la función al usarla', () => {
    // Recuerda que para ejecutar la función hay que use los paréntesis
    // justo después del nombre.
    let unaFuncionCualquiera = function(unValor) { return unValor * 2 }

    // Mira el error atentamente y luego lee los comentarios que hay debajo
    // del expect
    expect(unaFuncionCualquiera).toBe('unaFuncionCualquiera')
    // Este expect esta solo para que veas en los tests como se ve
    // una función sin ejecutar. Lo que se ve es la definición en lugar
    // de la ejecución.
    // Para pasar este test, ejecuta quitarle las comillas al valor que hay en el
    // toBe así, seguro que un valor es igual que el otro.
  })

  it('otras formas de definir funciones', () => {
    // Vamos a ver muy por encima otras formas de definir funciones
    // es solo para que te suene, ya veremos las diferencias más adelante.
    // Una la has visto un montón de veces. Cada "it" es una función que
    // recibe dos argumentos, un text y separado por una coma, recibe una
    // "Arrow Function"
    let arrowFunction = (unNumero, otroNumero) => { return unNumero + otroNumero }

    expect(arrowFunction(6, 3)).toBe(RellenameCorrectamente)

    // "Common function"
    function commonFunction(unNumero, otroNumero) { return unNumero + otroNumero }

    expect(commonFunction(6, 13)).toBe(RellenameCorrectamente)
  })
})
