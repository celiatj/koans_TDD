
describe('3-OperadoresBooleanos.js', () => {
  // Si tu pregunta es, ¿se pueden sumar true y false? Pues... no.
  // Entonces, ¿cómo operamos con los booleanos?
  // Vamos a empezar con el más sencillo.
  it('la negación que se representa por un interrogante (!)', () => {
    // Lo que hace es negar (invertir) un valor booleano
    // Entonces si un true negado es false
    expect(!true).toBe(false)
    // Un false negado es...
    expect(!false).toBe(true)
    // Espero que la respuesta use "!"
  })
  // Bien, ya eres capaz de negar la verdad ;P

  // Ahora vamos a por el operador Y (desde ahora AND)
  it('el AND es representado con "&&"', () => {
    // ¿Qué hace este operador?
    // Evalúa dos operandos y si ambos son verdaderos, resulta verdadero.
    expect(true && true).toBe(true)
    // En el resto de los casos es falso.
    expect(true && false).toBe(false)
    expect(false && true).toBe(false)
    expect(false && false).toBe(false)
  })
  // La cosa se complica.

  // Ahora vamos a por el operador O (desde ahora OR)
  it('el OR es representado con "||"', () => {
    // Este evalúa dos operadores y si cualquiera es verdadero, resulta verdadero.
    expect(true || true).toBe(true)
    expect(true || false).toBe(true)
    expect(false || true).toBe(true)
    // Aquí viene la excepción...
    expect(false || false).toBe(false)
  })
  // ¿Qué tal la cabeza?

  // Y como en las matemáticas, se pueden encadenar operaciones,
  // un ejemplo: ((1 * 23) + (195 / 5))
  it('vamos a probar', () => {
    // Los primeros gratis
    expect((true || true) && (false && true)).toBe(false)
    // ^^
    expect((false && true) && (false || true)).toBe(false)
    expect((true || true) || (false && true)).toBe(true)
    // Ahora tú
    expect((true || true) || (false && true)).toBe(true)
    expect((true || true) || (false && true) || false).toBe(true)
    // Como en las matemáticas, el orden importa ;)
    expect((true || true) || (false && true) && false).toBe(true)
    expect((true || true) || (false && true) && (false && true)).toBe(true)
    // Bonus track
    expect(((true || true) || (false && true) && (false && true)) || ((true || true) || (false && true) && false)).toBe(true)
  })
  // ¿Llamó a urgencias?
  // Te prometo que esta locura te será muy útil en el futuro.
})
// ¿Ande andará er GIT?¿Ande andará...?
