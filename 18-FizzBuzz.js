
describe('18-FizzBuzz.js', () => {
  // Pues a por otra Katita. Posiblemente la Kata FizzBuzz sea la más
  // conocida de todas y como casi todos los problemas tiene un montón
  // de soluciones diferentes. Yo te recomiendo que la soluciones de la
  // manera que sea y una vez que tengas todos los tests en verde
  // pruebes a cambiar cosas, como:
  // - Si la hiciste todo con "ifs" normales uses "if" con "else", luego
  // añade "else if".
  // - Si lo tienes todo con "let", usa "const" donde creas que puedes usarlo

  // Eso sí, cada cambio que hagas, recuerda refrescar la página en tu
  // navegador, si aparece un error, deshaz los cambios y siempre haz los
  // cambios los menos posibles cada vez. La cosa es que tu, te pongas un poco
  // a prueba. Esto es como un exámen. Si pones los tests en verde y pasas de
  // a la siguiente Koan, tienes el aprobado pelado. Si lo pones en verde de
  // diferente maneras, subes nota. Contra más maneras diferentes lo hagas
  // más práctica tendrás y más rápido hiras en las siguientes Koans.

  // ¡LA KATA!
  // El problema que nos pide que solucionemos con la kata FizzBuzz es el
  // siguiente:
  // Cuando a FizzBuzz le pasemos un número nos dirá que es Fizz si el número
  // es divisible entre 3, nos dirá que es Buzz si el número es divisible entre
  // 5, nos dirá que es FizzBuzz si el número es divisible entre 3 y 5. Y si no
  // es divisible entre 3 ni entre 5, devuelve el número pasado.

  // Ahora te lo traduzco a coder ;P
  // Crea una FUNCIÓN, que reciba un número
  // y SI el número es DIVISIBLE entre 3 Y es DIVISIBLE entre 5 nos RETORNARÁ "FizzBuzz",
  // y SI NO SI el número es DIVISIBLE entre 3 nos RETORNARÁ "Fizz",
  // y SI NO SI el número es DIVISIBLE entre 5 nos RETORNARÁ "Buzz",
  // y SI NO nos RETORNARÁ el número que le pasamos.
  // P.D.: Si no sabes cómo descubrir si un número es divisible entre un número
  // al final del todo te dejo una pista ;) intenta buscarlo antes la solución por
  // tu cuenta.

  // Escribe aquí abajo tu función


  // Recuerda ir pasando una a uno cada expect. Sin prisa, escribe un poco
  // de código, prueba si funciona y escribe un poco más para pasar al siguiente.
  it('devuelve "Fizz" si el número es divisible entre 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
    expect(fizzBuzz(6)).toBe("Fizz")
    expect(fizzBuzz(33)).toBe("Fizz")
  })

  it('devuelve "Buzz" si el número es divisible entre 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
    expect(fizzBuzz(10)).toBe("Buzz")
    expect(fizzBuzz(560)).toBe("Buzz")
  })

  it('devuelve "FizzBuzz" si el número es divisible entre 3 y 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
    expect(fizzBuzz(30)).toBe("FizzBuzz")
    expect(fizzBuzz(15000)).toBe("FizzBuzz")
  })
  // Si has completado esta Koan por tu cuenta. Es todo un hito, ¡celebralo!
  // y no es broma. Esto es programar. Aun te quedan un montón de cosas por
  // aprender, pero eso siempre será así, esto de programar no se lo pasa nadie.

  // Si pudieras compartir con alguien tu solución y le hablaras un poco del
  // porque lo has solucionado así y que cosas has probado, verás que aprenderás
  // un motón. Esas revisiones de DECISIONES son muy, muy didácticas.
  // Y recuerda esto, el código que hagas hoy será MUCHO peor cuando lo veas mañana.
  // Y hoy lo has hecho lo mejor que has podido, con lo que sabías y en la situación
  // que te encontrabas ^^
})
// PISTA:
// Cómo descubrir si un número es divisible entre 2:
// (unNumero % 2 === 0)
// Si la división dá un RESTO IGUAL a 0, significa que el
// número es divisible entre 2.
