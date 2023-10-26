
describe('17-ElseIf.js', () => {
  // Aquí viene lo último que nos queda del "if". Vimos el "if", el "else" pues
  // ahora toca el "else if".
  it('se usa de la siguiente manera', () => {
    // Voy a crear una función a la que le pasare un par de números
    // y un símbolo de operación y si conoce ese símbolo retornará el resultado
    // de la operación y si no conoce la operación retornara que la operación
    // es desconocida.
    const calculadora = function(unNumero, unaOperacion, otroNumero) {
      const esLaOperacionUnaSuma = (unaOperacion === '+')
      const esLaOperacionUnaResta = (unaOperacion === '-')
      let respuesta = null

      if(esLaOperacionUnaSuma) {
        respuesta = `El resultado de la suma es: ${unNumero + otroNumero}`
      } else if (esLaOperacionUnaResta) {
        respuesta = `El resultado de la resta es: ${unNumero - otroNumero}`
      } else {
        respuesta = 'Operación desconocida'
      }

      return respuesta
    }

    expect(calculadora(1, '+', 2)).toBe(RellenameCorrectamente)
    expect(calculadora(10, '-', 3)).toBe(RellenameCorrectamente)
    expect(calculadora(1312, '/', 2132)).toBe(RellenameCorrectamente)
  })

  it('puedes gastar tantos como quieras', () => {
    // "if" y "else" sólo se pueden gastar una vez, pero cuando ya tienes
    // un "if" puedes usar tantos "else if" como necesites.
    const calculadoraMejorada = function(unNumero, unaOperacion, otroNumero) {
      const esLaOperacionUnaSuma = (unaOperacion === '+')
      const esLaOperacionUnaResta = (unaOperacion === '-')
      const esLaOperacionUnaMultiplicacion = (unaOperacion === '*')
      const esLaOperacionUnaDivision = (unaOperacion === '/')
      const esLaOperacionUnModulo = (unaOperacion === '%')
      let respuesta = 'Operación desconocida'

      if(esLaOperacionUnaSuma) {
        respuesta = `El resultado de la suma es: ${unNumero + otroNumero}`
      } else if (esLaOperacionUnaResta) {
        respuesta = `El resultado de la resta es: ${unNumero - otroNumero}`
      } else if (esLaOperacionUnaMultiplicacion) {
        respuesta = `El resultado de la multiplicación es: ${unNumero * otroNumero}`
      } else if (esLaOperacionUnaDivision) {
        respuesta = `El resultado de la división es: ${unNumero / otroNumero}`
      } else if (esLaOperacionUnModulo) {
        respuesta = `El resultado del módulo es: ${unNumero % otroNumero}`
      }

      return respuesta
    }

    expect(calculadoraMejorada(1, '+', 2)).toBe(RellenameCorrectamente)
    expect(calculadoraMejorada(10, '-', 3)).toBe(RellenameCorrectamente)
    expect(calculadoraMejorada(2, '*', 5)).toBe(RellenameCorrectamente)
    expect(calculadoraMejorada(10, '/', 2)).toBe(RellenameCorrectamente)
    expect(calculadoraMejorada(20, '%', 4)).toBe(RellenameCorrectamente)
    expect(calculadoraMejorada(20, '"!·$', 2)).toBe(RellenameCorrectamente)
    // Como puedes ver el "else" es opcional y como no se cumple ninguna condición
    // no se modifica la respuesta.
  })

  it('DIY', () => {
    // Sinceramente, todo los que hemos hecho en estas Koans se podría hacer
    // solo con "if", con unos cuantos de ellos sin necesidad de "else" o "else if".
    // Ahora pensaras: - Te estas luciendo, en las últimas koans todo es opcional
    // o no hace falta.
    // A lo que respondo: - Si, es todo opcional. Pero cuando programamos el código
    // qué hacemos recuerda que siempre tiene que estar escrito para que sea fácil
    // de leer para las personas. Las máquinas saben leerlo dando casí igual de como
    // se escriba. Todo esto son ayudas para que puedas hacer código más legible.
    // ¿Y cuándo usar un montón de "ifs" o usar "else if"? Pues usa lo que más te
    // facilite la lectura de tu código. Y con el tiempo encontrar un "equilibro"
    // de cuando usar cada cosa. Como el "let" y "const", "undefined" y "null".
    // Pero para este ejercicio práctica con el "if" + "else if" + "else" xDD

    // Tienes que hacer una función que le pasemos dos números y SI el primero
    // es mayor que el segundo que RETORNE un mensaje diciendonos, que el primer
    // número es mayor que el segundo, SI NO, SI el segundo número es mayor que
    // el primero nos RETORNARÁ un mensaje diciendo que el segundo número es
    // mayor que el primero y SI NO se cumple ninguna de las condiciones anteriores
    // RETORNARA un mensaje indicando que son iguales.
    // Escribe aquí abajo tu función:


    expect(queNumeroEsMayor(10, 2)).toBe('El primer número es mayor que el segundo')
    expect(queNumeroEsMayor(100, 2)).toBe('El primer número es mayor que el segundo')
    expect(queNumeroEsMayor(1, -2)).toBe('El primer número es mayor que el segundo')
    expect(queNumeroEsMayor(20, 100)).toBe('El segundo número es mayor que el primero')
    expect(queNumeroEsMayor(-20, 100)).toBe('El segundo número es mayor que el primero')
    expect(queNumeroEsMayor(3, 30)).toBe('El segundo número es mayor que el primero')
    expect(queNumeroEsMayor(321, 321)).toBe('Los dos números son iguales')
    expect(queNumeroEsMayor(901, 901)).toBe('Los dos números son iguales')
    expect(queNumeroEsMayor(333, 333)).toBe('Los dos números son iguales')
  })
})
