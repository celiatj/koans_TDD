
describe('15-Greeting.js', () => {
  // Aunque no la vamos a hacer completa, vamos a practicar
  // if else y traducir lenguaje humano a código.

  // La kata: Greeting (Easy mode)
  // Lenguaje humano: Tienes que crear un programa
  // que cuando le dicen un nombre, le saluda y si no le
  // pasan ningún nombre saluda a todos.
  // Lenguaje código: Tienes que crear una función
  // que SI no le DEFINEN el valor que le pasan, RETORNARA
  // '¡Hola a todos!' SI NO (que le pasan una string), RETORNA
  // '¡Hola ' + nombre + '!'

  // Esta vez vamos a escribir nuestra función fuera de los test, así
  // que lee atentamente los test antes de ponerte a escribir.
  // Escribe tu función aquí abajo:

  it('saluda a todos cuando no le indican a quien tiene que saludar', () => {

    let saludo = greeting()

    expect(saludo).toBe('¡Hola a todos!')
  })

  it('saluda a una persona en concreto', () => {

    let saludo = greeting('Coder')

    expect(saludo).toBe('¡Hola Coder!')
  })

  it('saluda a otra persona', () => {
    // Solo para asegurarnos que funciona todo bien xD

    let saludo = greeting('Otro Coder')

    expect(saludo).toBe('¡Hola Otro Coder!')
  })
})
