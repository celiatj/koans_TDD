
describe('16-Null.js', () => {
  // Null es el último de los tipos de valor primario que nos queda por ver.
  // Y como estas koans y las siguientes son muy facilitas, aprovechamos y
  // veremos algo más ^^

  // Null representa ningún valor. Se usa cuando queremos declarar de
  // forma intencionada que algo vale NADA.
  // Te preguntaras: - ¿Y undefined?
  // Te respondo: - Pues si, se parecen... pero undefined como valor es algo
  // que solo usa Javascript (que significa que no esta definido) y null
  // (o similares) lo usan todos los lenguajes de programación (Que yo conozca).
  it('no es lo mismo que undefined', () => {

    expect(undefined === null).toBe(RellenameCorrectamente)

    const valorCuandoSeLeAsignaNINGUNValor = null
    let valorCuandoNoSeLeAsigna
    // Nota: Esto es todo lo fácil que parece ser (No hay trucos).
    expect(valorCuandoSeLeAsignaNINGUNValor).toBe(RellenameCorrectamente)
    expect(valorCuandoNoSeLeAsigna).toBe(RellenameCorrectamente)
    // Te dije que seria fácil. Espero que te dieras cuenta
    // de que una variable la declaré con "const" en lugar de con "let"
    // Si no te habias fijado... !TE RECUERDO QUE LEAS DESPACITO Y ATENTAMENTE!
    // puede que este grito algún día te salve la vida. Ya me lo agradeceras...
    // xDDDDDD
    // Vamos a ver un par de cosas sobre null y luego aclaramos de que va el
    // eso del "const".
  })

  it('evalua como un valor falso', () => {
    let unValor = 'cualquier valor'

    if(null) {
      unValor = '¿null evalua como verdadero?'
    } else {
      unValor = '¿o como falso?'
    }

    expect(unValor).toBe(RellenameCorrectamente)
    // Entonces...
    expect(null === false).toBe(RellenameCorrectamente)
  })
  // Como ves, también evalua falso, al igual que undefined. Por ahora
  // te aconsejo, que siempre que declares una variable tenga un valor
  // y si cuando la declaras quieres que no valga nada, usa null, no
  // la dejes sin asignar. Y ya veremos porque es util en ese caso
  // y en algunos mas.

  // Volvamos al "const". ¿Para que vale? pues se usa para declarar
  // variables y evitar que se vuelva a reasignar.
  // ¿Y para que quieres no volver a reasignar? Pues... para evitar reasignar
  // por error, también que cuando leas el código veas que la intención
  // de esa variable es que nunca cambiar su valor y obliga a asignarle un valor,
  // con "const" no puedes hacer lo siguiente
  // const unaVariableCualquiera
  // no se puede quedar sin asignación. Y aunque no parezca que valga para mucho
  // como el null, también te aconsejo que siempre que no vayas a cambiar el valor
  // de una variable, uses "const"
  it('vamos a probar algo', () => {
    let unValorQueNoQuieroCambiarNunca = null
    let cambiareDeValor = 'un valor cualquiera'

    if(unValorQueNoQuieroCambiarNunca = true) {
      cambiareDeValor = 'Como null no es igual a undefined, no cambiaré'
    }

    expect(cambiareDeValor).toBe(RellenameCorrectamente)
    // ¿Has visto el error? Si no a sido así, voy a regodearme un poco mientras
    // te revanas los sesos xD
    // Como puedes ver en la condición del "if" no estamos comparando la variable
    // con true, estamos asignando true a la variable y esa operación
    // evalua como el valor que se le asigna, por lo que pasa a ser verdadero
    // y cambia el valor. Si hubiera usado "const" en la declaración me hubiera dado
    // un error en la reasignación. Entonces nunca se podría dar lo siguiente.
    expect(unValorQueNoQuieroCambiarNunca).toBe(RellenameCorrectamente)
  })
})
