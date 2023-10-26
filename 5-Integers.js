
describe('5-Integers.js', () => {
  // Vamos a descansar un poco de booleanos y operadores lógicos.
  // Ahora ¡Números enteros!
  // Los números enteros engloban todos los números positivos, negativos
  // y el cero (sin decimales). Ejemplos: 0, 61, -15423142, 7
  it('se puede operar con ellos', () => {
    // ¡Sin calculadora!
    expect(1 + 1).toBe(2)
    expect(1 - 1).toBe(0)
    expect(0 - 1).toBe(-1)
    expect(12 * 4).toBe(48)
    expect(12 / 4).toBe(3)
    expect(12 / -4).toBe(-3)
    expect(21 % 2).toBe(1) // Este es el módulo, devuelve el resto de una división
    expect(43 + 82 + 21).toBe(146)
    expect(14 + 57 * 100 / 2 - 100).toBe(2764)
  })
  // Vale. El descanso se acabó.
  it('se pueden comparar', () => {
    // Cuando un entero es igual a otro es verdadero, si son diferentes, es falso.
    expect(10 === 10).toBe(true)
    expect(10 === 20).toBe(false)
    // ¿Te imaginas lo siguiente?
    expect(20 !== 10).toBe(true)
    expect(20 !== 20).toBe(false)
    // Se puede saber si uno es mayor/menor que el otro
    expect(20 > 10).toBe(true)
    expect(10 > 20).toBe(false)
    expect(10 < 20).toBe(true)
    expect(20 < 10).toBe(false)
    // Incluso si es igual o mayor/menor
    expect(20 >= 10).toBe(true)
    expect(10 <= 20).toBe(true)
    expect(10 <= 10).toBe(true)
  })

  it('se pueden usar con operadores lógicos', () => {
    expect((20 !== 10) && (10 <= 10)).toBe(true)
    expect((20 === 10) || (10 < 10)).toBe(false)
  })
  // Este archivo ha sido más relajado ;)
})
