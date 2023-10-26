
describe('37-AsignacionesCondicionales.js', () => {
  // Pues he estado dandole vueltas a como llamarle al conjunto de cosas
  // que vamos a ver, pero no he encontrado el nombre oficial, así que lo de
  // asignaciones condicionales es "inventado". Assignar dependiendo de una
  // conción es lo que hacen, pero son cosas diferentes y por eso oficialmente
  // el conjunto no tiene nombre.
  // Así que vamos a por el primero.
  it('"OR" asigna el primer valor si evalua como verdadero, si no, asigna el segundo', () => {
    // Como puedes ver el titulo del "it": SI es VERDADERO, SI NO. Suena a "if else"
    // Vamos a hacer la asignación primero con algo que conocemos y luego la hacemos
    // de la nueva forma.
    let valorFinal = undefined
    const primerValor = ''
    const segundoValor = 'valor que evalua como verdadero'

    if (primerValor) {
      valorFinal = primerValor
    } else {
      valorFinal = segundoValor
    }

    expect(valorFinal).toBe(RellenameCorrectamente)
    // Así es como funciona esta asignación, ahora vamos a ver como se escribe
    // (como es la sintaxis). Vamos a usar las mismas variables de antes.
    valorFinal = undefined

    valorFinal = primerValor || segundoValor

    expect(valorFinal).toBe(RellenameCorrectamente)
    // Como el primer valor evalua como falso, le asigna el valor que hay
    // después de las barras (Pipes en inglés ;) Ahora vamos a ver si
    // esto es verdad:
    valorFinal = undefined

    valorFinal = segundoValor || primerValor

    expect(valorFinal).toBe(RellenameCorrectamente)
    // Ahora como el primer valor ya evalua como verdadero, lo asigna y pasa
    // del segundo valor.
    // Ahora vamos a ver un montón de valores que evaluan
    // como falso, por si no te acuerdas de ellos ^^
    const valorVerdadero = 'valorVerdadero'

    valorFinal = '' || valorVerdadero
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = null || valorVerdadero
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = undefined || valorVerdadero
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = 0 || valorVerdadero
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = NaN || valorVerdadero
    expect(valorFinal).toBe(RellenameCorrectamente)
    // Aquí vuelve nuestro amigo NaN ^^
  })

  it('"OR equal" si el valor que contiene evalua como falso, le asigna el nuevo valor', () => {
    // Este es más díficil de explicar que de enseñar. Pero se pueve volver a ver
    // las palabras "SI", "verdadero"... Puede que se parezcan ;)
    // Primero vamos a hacerlo en código conocido y luego usaremos el nuevo.
    let valorInicial = ''
    const otroValor = 'El otro valor'

    if (!valorInicial) {
      valorInicial = otroValor
    }

    expect(valorInicial).toBe(RellenameCorrectamente)
    // Ahora vamos a verlo con su sistaxis.
    valorInicial = ''

    valorInicial ||= otroValor
    // OR EQUAL. El simbolo del OR más el del igual ^^
    // En este caso como el valor que estamos reasignando, evalua como
    // falso le asigna el valor que le igualan.
    expect(valorInicial).toBe(RellenameCorrectamente)
    valorInicial = 'un valor que no evalua como falso'

    valorInicial ||= true

    expect(valorInicial).toBe(RellenameCorrectamente)
  })
  // Sinceramente, nos ayudan a escribir mucho menos código, pero cuidado
  // que perdemos la famosa semántica ;P Yo, al principio abusaba mucho de
  // estas asignaciones, pero trajeron algunos dolores de cabeza. Por ahora
  // siempre intento usar el "if else" y luego me lo pienso un rato en
  // para decidir que usar.
  it('"ternaro" es casi igual que el "if else" pero en una linea y con simbolos', () => {
    // Definición: Si la condición se evalua como verdadera, devuelve el primer
    // valor SI NO devuelve el segundo. El "if else" es lo mismo, pero no devuelve
    // valores de forma obligada. Esta vez vamos a ver el ternario, sin pasar
    // por código conocido.
    const condicionVerdadera = 'condicionVerdadera'
    const primerValor = 'primerValor'
    const segundoValor = 'segundoValor'

    let valorFinal = condicionVerdadera ? primerValor : segundoValor

    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = undefined
    const condicionNegativa = ''

    valorFinal = condicionNegativa ? primerValor : segundoValor

    expect(valorFinal).toBe(RellenameCorrectamente)
    // Vamos a prácticar un poco.
    valorFinal = 1 < 0 ? primerValor : segundoValor
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = true ? primerValor : segundoValor
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = undefined ? primerValor : segundoValor
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = 'hola' === 'hola' ? primerValor : segundoValor
    expect(valorFinal).toBe(RellenameCorrectamente)
    valorFinal = 31231.543 < 4322.6 ? '#F4ED22' : '#111111'
    expect(valorFinal).toBe(RellenameCorrectamente)
    // Aquí vuelve el defensor de lo simántico y no piensa añadir ningún
    // comentario, pero seguro que notas la mirada intensa que te esta lanzando xD
    // Pero muy pocas, muy muy pocas, veces lo gasta. Por ahora lo de siempre
    // te recomiendo usarlo y que tu veas cual es el momento que te va a ayudar
    // o te va a molestar.
  })
  // De hecho, molaría mucho si cogieras las asignaciones que has aprendido en esta
  // koan y lo usaras en las katas que tienes hechas.
})
