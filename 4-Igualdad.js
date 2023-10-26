
describe('4-Igualdad.js', () => {
  // Vamos a seguir un poco con Booleanos y luego ya a otra cosa.
  // La igualdad es como un operador lógico, puede comparar más valores
  // diferentes a true o false.
  it('la igualdad se repsenta con "==="', () => {
    // Como funciona la igualdad es, comparan dos valores y si considera que
    // son iguales, devuelve true
    expect(true === true).toBe(true)
    // si son diferentes, devuelve false
    expect(false === true).toBe(false)
    // continua tu ^^
    expect(true === false).toBe(false)
    expect(false === false).toBe(true)
  })

  it('la diferencia se representa con "!=="', () => {
    // Recuerda que hacia el operador lógico "!" y juntalo con la igualdad
    // ¿eres capaz de imaginar como funciona?
    expect(true !== true).toBe(false)
    expect(false !== true).toBe(true)
    expect(true !== false).toBe(true)
    expect(false !== false).toBe(false)
    // ¡HEY! Será, ¿que recuerdas los tests anteriores? ;P
  })

  it('vamos a ver algo mas que booleanos', () => {
    // ¡SÍ! Llego el momento de ver algo más que true o false.
    // Lo prometido es deuda.
    // Puede que veas expectaciones que no sepas resolver. Si es así
    // Skippea este test (cambiando el "it" por "skip") y en unas cuantos
    // ficheros de koans, vuelves a intentarlo.
    expect('Texto' === 'Texto').toBe(true)
    expect(`Texto` === `Texto`).toBe(true)
    expect("Texto" === "Texto").toBe(true)
    expect(2021 === 2021).toBe(true)
    expect(12.18 === 12.18).toBe(true)
    // WTF!!!!
    expect(null === null).toBe(true)
    expect(undefined === undefined).toBe(true)
    ////////esto no entiendo porque es falso
    expect({} === {}).toBe(false) // Cosas de Javascript ;P
    expect([] === []).toBe(false) // Cosas de Javascript ;P
    // Cuidado!
    expect('2021' === 2021).toBe(false)
    expect(null === undefined).toBe(false)
    expect("Texto" === `Texto`).toBe(true)
  })

  it('con este tambien se pueden usar los parentesis para las evaluaciones', () => {
    expect(( 1 === 1) === ( 1 === 1)).toBe(true)
    // ¿Te atreves? ^^
    expect(( 1 === 1) === ( 2 === 2)).toBe(true)
    // Por si no lo has entendido:
    // (1 === 1) se combierte en true
    // (2 === 2) se combierte en true
    // entonces queda:
    // true === true
    // ¿ahora?
  })
  it('se puede mezclar con los operadores lógicos', () => {
    // ¡Aquí empieza la fiesta!
    expect((true && true) === (false || true)).toBe(true)
    expect((true || false) !== (false && true)).toBe(true)
  })

  it('la antigua igualdad, que se representa con "=="', () => {
    // ¿Comó que la antigua igualdad?
    // Hace años la igualdad en JS se usaba con "==".
    // ¿Por qué hay dos?
    // La antigua igualdad puede dar como iguales o diferentes cosas
    // que no esperamos. Y por eso se usa la nueva, que es mas predecible.
    // ¿Comó que puede evaluar cosas que no esperamos?
    expect(0 == false).toBe(true)//??
    expect('1' ==  1).toBe(true)//??
    // Te puedes encontrar en muchos sitios la antigua igualdad.
    // Pero evita utilizarla todo lo que puedes y usa la nueva.
    expect(0 === false).toBe(false)
    expect('1' ===  1).toBe(false)
  })
  // Un montón de cosas nuevas.
  // Sin prisa, pero sin pausa ;)
})
// Prometido, la última vez... ¡¡¡¡GIT!!!!
