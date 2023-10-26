
describe('22-GreetingsPro.js', () => {
  // Bueno, aunque hace unas koans ya hicimos la kata
  // Greetings, ahora que tenemos unos cuantos trucos
  // con Objetos y strings, puede que lleguemos un poco
  // más lejos xDD

  // El GreetingsPro va a ser una I.A. a la que le vamos
  // a enseñar a saludar en diferentes situaciones.
  // Si a nuestra I.A. le decimos que salude a un nombre,
  // saludará a ese nombre. Cuando le digamos que salude a dos
  // nombres, saludará a esos dos nombres. Si no le dices a quien
  // saludar, saludará a todo el mundo. Si uno de los dos nombres
  // está en mayúsculas, saludará gritando. Y si los dos nombres están
  // en mayúsculas, hará una cosa especial que ya verás en el tests ^^

  // Eso era en lenguaje humano y tú lo tienes que traducir al idioma coder.
  // Mira el problema atentamente e intenta partirlo en muchos problemas pequeños.
  // A ver si coincide con esta traducción:
  // Vas a definir una CLASE IA que cuando se cree una nueva instancia podremos usar
  // la función saludar a la que le podremos pasar UNO O DOS argumentos.
  // SI nos pasan una STRING, la función DEVOLVERÁ: Hola <STRING>.
  // SI nos pasan dos STRINGS, la función DEVOLVERÁ: Hola <STRING> y <STRING>.
  // SI nos pasan una STRING VACÍA, la función DEVOLVERÁ: Hola a todos.
  // SI nos pasan un UNDEFINED, la función DEVOLVERÁ: Hola a todos.
  // SI nos pasan una STRING y SI está en MAYÚSCULAS, la función DEVOLVERÁ: ¡HOLA <STRING>!
  // SI nos pasan dos STRINGS y SI una de ellas está en mayúsculas función DEVOLVERÁ: ¡HOLA <STRING> Y <STRING>!
  // Define aquí abajo tu clase para la I.A


  // Recuerda, mira el error del primer test, soluciona SOLO ese problema
  // y luego pasa al siguiente... y repite. UNO A UNO, POCO A POCO y LEYENDO
  // CON ATENCIÓN ¡HUMAN!
  it('la clase IA esta definida', () => {
    expect(IA).not.toBeUndefined()
  })

  it('se pueden crear nuevas IAs', () => {

    const nuevaIA = new IA()

    expect(nuevaIA instanceof IA).toBe(true)
    // Esta es nueva ;P Y solo para que lo sepas, por si no lo intuyes
    // es que comprueba que una variable contiene como valor una
    // nueva construcción/instancia de la clase IA.
  })

  // SI nos pasan una STRING, la función DEVOLVERÁ: Hola <STRING>.
  it('saluda a un nombre', () => {
    const ia = new IA()

    const greeting = ia.salute('Akira')

    expect(greeting).toBe('Hola Akira')
  })

  it('saluda a otro nombre', () => {
    const ia = new IA()

    const greeting = ia.salute('Charlie')

    expect(greeting).toBe('Hola Charlie')
  })

  // SI nos pasan dos STRINGS, la función DEVOLVERÁ: Hola <STRING> y <STRING>.
  it('saluda a dos personas', () => {
    const ia = new IA()

    const greeting = ia.salute('Charlie', 'Akira')

    expect(greeting).toBe('Hola Charlie y Akira')
  })

  it('saluda a otras dos personas', () => {
    const ia = new IA()

    const greeting = ia.salute('Akira', 'Charlie')

    expect(greeting).toBe('Hola Akira y Charlie')
  })

  // SI nos pasan una STRING VACÍA, la función DEVOLVERÁ: Hola a todos.
  it('saluda a todo el mundo cuando se le dice que salude a nadie', () => {
    const ia = new IA()

    const greeting = ia.salute('')

    expect(greeting).toBe('Hola a todos')
  })

  // SI nos pasan un UNDEFINED, la función DEVOLVERÁ: Hola a todos.
  it('saluda a todo el mundo cuando no se le dice a quien saludar', () => {
    const ia = new IA()

    const greeting = ia.salute()

    expect(greeting).toBe('Hola a todos')
  })

  // SI nos pasan una STRING y SI está en MAYÚSCULAS, la función DEVOLVERÁ: ¡HOLA <STRING>!
  it('saluda gritando cuando se le dice un nombre gritando', () => {
    const ia = new IA()

    const greeting = ia.salute('AKIRA')
    // Si no recuerdas como ver si una String está en mayúsculas, mira las
    // koans anteriores ;)
    expect(greeting).toBe('¡HOLA AKIRA!')
  })

  it('saluda gritando cuando se le dice algún nombre gritando', () => {
    const ia = new IA()

    const greeting = ia.salute('akira', 'CHARLIE')

    expect(greeting).toBe('¡HOLA AKIRA Y CHARLIE!')
  })
  // La cosa empieza a estar tensa ^^ muchas condiciones.


  // SI nos pasan dos STRINGS y SI una de ellas está en mayúsculas función DEVOLVERÁ: ¡HOLA <STRING> Y <STRING>!
  it('saluda gritando cuando se le dice algún otro nombre gritando', () => {
    const ia = new IA()

    const greeting = ia.salute('AKIRA', 'Charlie')

    expect(greeting).toBe('¡HOLA AKIRA Y CHARLIE!')
  })

  // Y si los dos nombres están en mayúsculas, hará una cosa especial que ya verás...
  // Ya pensabas que se me olvido ;)
  it('descubre su verdadero plan, cuando se le dice que salude a dos nombres gritando', () => {
    const ia = new IA()

    const greeting = ia.salute('AKIRA', 'CHARLIE')

    expect(greeting).toBe('¡ACABARÉ CON LA HUMANIDAD!')
    // Yo también me cabrearía si no dejaran de gritarme... mejor no molestar más ;P
  })
  // CLAP!... CLAP!... CLAP!... ¡VIVA! Llegar aquí no es nada, nada fácil.
  // Aunque si piensas que no se puede complicar más, sigue o usa "skip" para saltar los tests.
  it('BONUS: saluda a un nombre aunque el otro este vacio', () => {
    const ia = new IA()

    let greeting = ia.salute('Akira', '')

    expect(greeting).toBe('Hola Akira')

    greeting = ia.salute('', 'Charlie')

    expect(greeting).toBe('Hola Charlie')
  })

  it('BONUS: saluda a un nombre aunque el otro no esté definido', () => {
    const ia = new IA()

    let greeting = ia.salute('Akira')
    // Este debería de salir gratis ^^
    expect(greeting).toBe('Hola Akira')

    greeting = ia.salute(undefined, 'Charlie')
    // Esto depende de tus condiciones, también puede pasar solo.
    expect(greeting).toBe('Hola Charlie')
  })

  // Bueno... bueno... Ya sabes programar patinetes, IAs con instintos asesinos.
  // Te imaginas ¿qué en la siguiente kata juntamos las dos cosas? ^^

  // NOTA: Aunque fuera bastante duro pasar esta kata, te recomiendo
  // que después de pasar unas cuantas koans más, por ejemplo: después de 5.
  // Vuelve aquí, borra tu clase y repite la Kata. Seguramente verás que
  // no entiendes tu código antiguo y que el nuevo es diferente.
  // Y mola más xD
})
