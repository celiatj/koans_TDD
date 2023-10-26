
describe('12-ElTriangulo.js', () => {
  // Tranquilidad, tocaba una Kata de código y a eso vamos.
  // La kata se llama: "El Triangulo".
  // Primero, ¿Qué es una kata de código?
  // Según Wikipedia: Una kata de código en programación es
  // un ejercicio dirigido a que los programadores desarrollen
  // sus habilidades a base de práctica y repetición. Probablemente
  // fue Dave Thomas, coautor del libro The Pragmatic Programmer,​
  // quien acuñó el término, en un guiño al concepto japonés
  // de kata de las artes marciales.
  // Ahora, a ver de que va la kata de hoy ^^

  // Tenemos que hacer un programa que le pasemos el tamañano de los
  // lados que tiene un triangulo y nos diga si es equilátero o
  // isósceles o escaleno.
  // Ok, con calma, desde aquí tienes que leer sin prisa ^^
  it('nos dice que tipo de triangulo es dependiendo de el tamaño de sus lados', () => {
    // Ahora vamos a traducir el problema en humano, a developer ;)

    // VAS a crear una función que va a recivir 3 integers, que serán el tamaño
    // de los tres lados del triángulo y
    // SI los TRES lados son IGUALES, DEVUELVE la string "es equilátero"
    // SI los TRES lados son DIFERENTES, DEVUELVE la string "es escaleno"
    // SI DOS de los lados son IGUALES, DEVUELVE la string "es isósceles"
    // Escribe tu función aquí abajo y haz que pasen todos los expects


    expect(tipoDeTriangulo(10, 10, 10)).toBe('es equilátero')
    expect(tipoDeTriangulo(3, 3, 3)).toBe('es equilátero')
    expect(tipoDeTriangulo(11, 7, 3)).toBe('es escaleno')
    expect(tipoDeTriangulo(5, 99, 2)).toBe('es escaleno')
    expect(tipoDeTriangulo(101, 10, 10)).toBe('es isósceles')
    expect(tipoDeTriangulo(10, 101, 10)).toBe('es isósceles')
    expect(tipoDeTriangulo(10, 10, 101)).toBe('es isósceles')
    // Tu primera kata, ¿Divertido? ^^
    // ¡¡¡BONUS TRACK!!!
    // Ahora modifica tu función, para que SÍ ALGUNO de los tres lados es IGUAL A CERO
    // tiene que DEVOLVER "Triángulo imposible"
    expect(tipoDeTriangulo(0, 11, 111)).toBe('Triángulo imposible')
    expect(tipoDeTriangulo(1, 0, 111)).toBe('Triángulo imposible')
    expect(tipoDeTriangulo(1, 0, 0)).toBe('Triángulo imposible')
    expect(tipoDeTriangulo(0, 11, 0)).toBe('Triángulo imposible')
    // Si ves que se te complica mucho, te dejo comentar los 4 últimos expects.
  })
})
