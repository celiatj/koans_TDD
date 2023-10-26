
describe('39-RompiendoElTriangulo.js', () => {
  // Rompiendo el triángulo es una kata adaptada (otra vez de forma improvisada :)
  // En la que vamos a hacer la kata del triángulo pero vamos a hacer que lance
  // algunos errores.
  // ¿Te acuerdas de la kata del triángulo? ¿No?, puedes ir al archivo o esperar
  // a que te las copie aquí xDD
  // Tenemos que hacer un programa que le pasemos el tamaño de los
  // lados que tiene un triángulo y nos diga si es equilátero o
  // isósceles o escaleno.
  // La otra vez la hicimos con una función, esta vez será la clase triangulo ;)
  // Escribe aquí abajo tu clase:



  // Venga como todo el developer, nos saltamos la parte fácil.
  it('nos dice que tipo de triángulo es dependiendo de el tamaño de sus lados', () => {
    let triangulo = new Triangulo(10, 10, 10)
    expect(triangulo.tipo()).toBe('es equilátero')
    triangulo = new Triangulo(3, 3, 3)
    expect(triangulo.tipo()).toBe('es equilátero')
    triangulo = new Triangulo(11, 7, 3)
    expect(triangulo.tipo()).toBe('es escaleno')
    triangulo = new Triangulo(5, 99, 2)
    expect(triangulo.tipo()).toBe('es escaleno')
    triangulo = new Triangulo(101, 10, 10)
    expect(triangulo.tipo()).toBe('es isósceles')
    triangulo = new Triangulo(10, 101, 10)
    expect(triangulo.tipo()).toBe('es isósceles')
    triangulo = new Triangulo(10, 10, 101)
    expect(triangulo.tipo()).toBe('es isósceles')
  })
  // Esto ya lo sabíamos hacer ^^ Ahora a por lo importante
  it('lanza un error si uno de sus lados mide cero', () => {
    try {
      new Triangulo(0, 10, 10)
      // A la siguiente linea tu ni caso. ¡PERO NO SE TOCA!
      throw new RellenameCorrectamente()
      // Ohhh!! Siempre fue un error. En la programación no existe la magia xD
    } catch (error) {
      expect(error instanceof Error).toBe(true)
      expect(error.message).toBe('Lado A invalido')
    }
    try {
      new Triangulo(10, 0, 10)
      throw new RellenameCorrectamente()
    } catch (error) {
      expect(error instanceof Error).toBe(true)
      expect(error.message).toBe('Lado B invalido')
    }
    try {
      new Triangulo(10, 10, 0)
      throw new RellenameCorrectamente()
    } catch (error) {
      expect(error instanceof Error).toBe(true)
      expect(error.message).toBe('Lado C invalido')
    }
  })

  it('lanza un error si todos sus lados miden cero', () => {
    try {
      new Triangulo(0, 0, 0)
      throw new RellenameCorrectamente()
    } catch (error) {
      expect(error instanceof Error).toBe(true)
      expect(error.message).toBe('Triángulo imposible')
    }
  })
})
