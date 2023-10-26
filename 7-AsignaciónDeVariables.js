
describe('7-AsignaciónDeVariables.js', () => {
  // Bueno... ya conocemos unos cuantos tipos, así que si vemos
  // la asignación de variables y una cosa más, ya seremos capaces de programar.
  // Y por eso estamos aquí, ¿no? ;P

  // Primero, ¿que es una variable?
  // Una variable es la forma que tenemos de guardarnos un valor u operación
  // para poder usarla o modificarla más adelante.
  // Es mucho más fácil de entender viéndolo, que leyéndolo.
  it('definir una variable', () => {
    let soyUnaVariableSinValor
    // Hay varias maneras de crear variables, por ahora usaremos 'let' seguido
    // del nombre que le queramos dar a la variable
    expect(soyUnaVariableSinValor).toBeUndefined()
    // ¿Qué significa eso de que es indefinida?
    // Pues eso, que la hemos creado pero no le hemos definido un valor

    // para que tengas algo que hacer ;P
    // fijate en el error que te da: ReferenceError: soyOtraVariableSinValor is not defined
    // Vale... entonces nuestro único problema es que no está creada una variable con ese
    // nombre ¿sabrás solucionarlo? :)
    expect(soyOtraVariableSinValor).toBeUndefined()
    // Bien, ya sabemos crear variables
  })

  // Hasta ahora hemos visto el doble y el triple igual y seguro que te has dicho:
  // estos developers... como les gusta complicarse, tanto igual, cuando podrían
  // usar el igual simple ^^
  // Pues para esto se gasta, para asignar valor a las variables
  it('asignar valor a una variable', () => {
    // Creamos la variable
    let soyUnaVariableMas
    // con un igual simple, le asignamos un valor
    soyUnaVariableMas = 3
    // Entonces ¿Cuál será el valor de la variable?
    expect(soyUnaVariableMas).toBe(RellenameCorrectamente)
  })

  it('reasignar valores a una variable', () => {
    // Definiendo variables con 'let' nos permite reasignar y reutilizar las
    // variable, hay otras formas de crearlas y que no nos permita cambiarle
    // el valor. Lo veremos más adelante y porque es util, pero por ahora 'let'
    let soyUnaVariableQueVariaMiValor

    soyUnaVariableQueVariaMiValor = 1
    expect(soyUnaVariableQueVariaMiValor).toBe(RellenameCorrectamente)

    soyUnaVariableQueVariaMiValor = false
    expect(soyUnaVariableQueVariaMiValor).toBe(RellenameCorrectamente)

    soyUnaVariableQueVariaMiValor = 4134213476734.1746548376548
    expect(soyUnaVariableQueVariaMiValor).toBe(RellenameCorrectamente)
  })

  it('crear y asignar', () => {
    // Hasta ahora has visto el proceso por separado, primero creamos la variable
    // Y luego le asignamos un valor.
    // ¿Te imaginas que se puede hacer todo a la vez? ^^
    let todoALaVez = 88

    expect(todoALaVez).toBe(RellenameCorrectamente)
    // Esto nos va a ahorrar un montón de líneas ;P
  })

  it('asignar resultados', () => {
    // ¿Resultados? Al principio hemos dicho que en las variables se le pueden
    // asignar valores y operaciones
    let resultado = 2 * 3
    // ¿?
    expect(resultado).toBe(RellenameCorrectamente)
    // Igual que resultados de operaciones matemáticas, se pueden guardar
    // resultados de operaciones booleanas
    resultado = true || false
    expect(resultado).toBe(RellenameCorrectamente)
    resultado = (true || false) && false
    expect(resultado).toBe(RellenameCorrectamente)
    resultado = (3 === 3.0)
    expect(resultado).toBe(RellenameCorrectamente)
    resultado = ((30 % 3.0) === 0)
    expect(resultado).toBe(RellenameCorrectamente)
    // Si no tienes testamento, es el momento de hacerlo xD
    resultado = ((((32 * 4) + 15) === ((68 * 2) + 3)) && true)
    expect(resultado).toBe(RellenameCorrectamente)
  })
  // Por ahora este es el archivo más largo que te has encontrado. Será...
  // Porque... lo de las variables... ¿Es importante?
  // Si. Mucho.
  // Asegúrate de entender bien lo que llevamos hasta ahora.
  it('operar variables', () => {
    // Si... las variables pueden contener valores... y los valores se pueden operar,
    // ¿Se podrá operar varibales?
    let unValorNumerico = 7
    let otroValorNumerico = 9

    expect(unValorNumerico * otroValorNumerico).toBe(RellenameCorrectamente)
    // Como se pueden operar variables, se puede guardar la operación entre
    // dos variables
    let resultado = unValorNumerico * otroValorNumerico
    // siempre le pongo de nombre resultado, pero no es obligado, se puede
    // poner el nombre que queramos
    expect(resultado).toBe(RellenameCorrectamente)

    let cualquierNombre = resultado

    expect(cualquierNombre).toBe(RellenameCorrectamente)
  })
  // Vamos a ver si a quedado claro de verdad
  it('ejercitemos las variables', () => {
    let tres = 3
    let seis = 6
    // No vale escribir un numero, lo tienes que resolver todo con las
    // variables que hay.
    let resultado = RellenameCorrectamente

    expect(resultado).toBe(18)

    resultado = RellenameCorrectamente

    expect(resultado).toBe(9)

    resultado = RellenameCorrectamente

    expect(resultado).toBe(3)

    resultado = RellenameCorrectamente

    expect(resultado).toBe(0) // Acuérdate del módulo %
  })

  it('como se escriben los nombres de las variables', () => {
    // Cómo te has dado cuenta, las variables se escriben de forma un poco rara
    // CASI todas las variables en Javascript se escriben con "camelCase",
    // lo que significa que va todo en minúsculas y sin espacios, sólo ponemos
    // mayúsculas la letra que iría después de un espacio.
    // Esta frase la voy a escribir como nombre de variable
    // estaFraseLaVoyAEscribirComoNombreDeVariable
    expect(false).toBe(true) // Este esta solo para parar aquí, es fácil de solucionar ;)
    // Ahora estarás deseando decir, pues si los nombres de las variables se
    // se escriben en camelCase, ¿Que pasa con RellenameCorrectamentee?
    // Pues como pone CASI todas van en camelCase, unas pocas van en PascalCase ^^
    // Ya veremos cuales son más adelante.
  })

  it('el orden importa', () => {
    // Claro, siempre hay que crear y declarar una variable antes de usarla
    // (En este test no hay que escribir solo hay que mover código de línea)
    expect(declarameAntesDeUsarMe).toBe(22)
    // Lee atentamente el error
    let declarameAntesDeUsarMe = 22
  })
  // Estás a un fichero de koans de saber programar ;P
 })
