
describe('26-GreetingsMegaPro.js', () => {
  // Prometido, la última vez que uso la kata greetings ^^ pero el motivo de
  // utilizarla la, es porque el problema ya es conocido y así se ve diferentes
  // maneras de resolver el mismo problema (Aunque cada vez se le añada
  // un extra al problema ;)
  // Aunque el problema sea conocido, vamos a repasar.
  // Bueno... pues vamos a hacer que nuestra IA ^^ aprenda a saludar.
  // Si no se le dice a quien saludar, saludará a todo el mundo. Si se le
  // dice un nombre al que saludar, saludara a ese nombre. Si se le dicen
  // varios nombres saludará a todos. Y... una misma IA tiene que ser
  // capaz de si se le dice que salude por segunda vez y no se le dice a quien
  // repetirá el saludo anterior (Ya verás que sencillo es con los tests).
  // Ahora Coder language:
  // Tenemos que crear una CLASE con una FUNCIÓN de INSTANCIA, que RECIBA una
  // ARRAY con nombres y salude dependiendo de los nombres en la ARRAR:
  // - Si la FUNCIÓN RECIBE un ARRAY VACÍO, RETORNARA la STRING '¡Hola a todos!'
  // - Si la FUNCIÓN RECIBE un ARRAY con UNA STRING, RETORNARA otra STRING
  //   saludando a la primera: ¡Hola! Akira.
  // - Si la FUNCIÓN RECIBE un ARRAY con DOS STRINGS, RETORNARA otra STRING
  //   saludando a las STRINGS: ¡Hola! Akira y Charlie.
  // - Si la FUNCIÓN RECIBE un ARRAY con MÁS DE DOS STRINGS, RETORNARA otra STRING
  //   saludando a las STRINGS: ¡Hola! Akira, Charlie y Robin.
  // - Si la FUNCIÓN se usa por SEGUNDA vez y NO RECIBE nada, RETORNARA una STRING
  //   con el saludo anterior (en el test, se verá bastante más claro).
  // Escribe aquí abajo tu clase (Nota: Puedes mirar lo anterior, pero no copies y
  // pegues, por si se te había pasado por la cabeza :)


  // Estos primeros para no perder la costumbre de ir poco a poco.
  it('la IA existe', () => {
    expect(IA).not.toBeUndefined()
  })

  it('puede crear nuevas IAs', () => {

    const nuevaIa = new IA()

    expect(nuevaIa instanceof IA).toBe(true)
  })

  // - Si la FUNCIÓN RECIBE un ARRAY VACÍO, RETORNARA la STRING '¡Hola a todos!'
  it('saluda a todos si no se le indica ningún nombre', () => {
    const ia = new IA()

    const saludo = ia.saluda([])

    expect(saludo).toBe('¡Hola a todos!')
  })

  // - Si la FUNCIÓN RECIBE un ARRAY con UNA STRING, RETORNARA otra STRING
  //   saludando a la primera: ¡Hola! Akira.
  it('saluda a un nombre si sólo se le indica uno', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Akira'])

    expect(saludo).toBe('¡Hola! Akira')
  })

  it('saluda a un nombre si sólo se le indica uno', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Charlie'])

    expect(saludo).toBe('¡Hola! Charlie')
  })

  // - Si la FUNCIÓN RECIBE un ARRAY con DOS STRINGS, RETORNARA otra STRING
  //   saludando a las STRINGS: ¡Hola! Akira y Charlie.
  it('saluda a dos nombres si se le indican', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Akira', 'Charlie'])

    expect(saludo).toBe('¡Hola! Akira y Charlie')
  })

  it('saluda a otros dos nombres si se le indican', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Charlie', 'Robin'])

    expect(saludo).toBe('¡Hola! Charlie y Robin')
  })

  // - Si la FUNCIÓN RECIBE un ARRAY con MÁS DE DOS STRINGS, RETORNARA otra STRING
  //   saludando a las STRINGS: ¡Hola! Akira, Charlie y Robin.
  it('saluda a muchos nombres si se le indican', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Akira', 'Charlie', 'Robin'])

    expect(saludo).toBe('¡Hola! Akira, Charlie y Robin')
  })
  // Esto es lo duro ^^
  it('saluda a muchos nombres si se le indican', () => {
    const ia = new IA()

    const saludo = ia.saluda(['Robin', 'Charlie', 'Akira'])

    expect(saludo).toBe('¡Hola! Robin, Charlie y Akira')
  })

  // - Si la FUNCIÓN se usa por SEGUNDA vez y NO RECIBE nada, RETORNARA una STRING
  //   con el saludo anterior (en el test, se verá bastante más claro).
  it('saluda por segunda vez a los mismos si no se le dice a quien saludar', () => {
    const ia = new IA()

    let saludo = ia.saluda(['Akira', 'Charlie', 'Robin'])

    expect(saludo).toBe('¡Hola! Akira, Charlie y Robin')

    saludo = ia.saluda()
    // A estas alturas, esto puede ser muy, muy, complicado. Calma
    // Repasate el 20-Clases101.js
    // Recuerda que hay unos atributos de clase, que son unas variables
    // que empiezan con "this.", que se puede usar, para "recordar cosas"
    // entre usos ^^ Si ves que te atascas mucho, usa el "skip" y recuerda
    // de volver koans más tarde a resolverlo, el objetivo de esta kata
    // es practicar las Arrays y los bucles.
    expect(saludo).toBe('¡Hola! Akira, Charlie y Robin')
  })

  // A todo esto, por si hiciste trampas con ifs y 3 posiciones
  it('saluda a muchísima gente', () => {
    const ia = new IA()

    let saludo = ia.saluda(['Aike', 'Aymar', 'Alex', 'Alexis', 'Andrea', 'Andy', 'Aran', 'Ariel', 'Akira', 'Artis', 'Asunción', 'Azul', 'Cameron', 'Charlie', 'Concepción', 'nombre', 'Cris', 'Cruz', 'Denis', 'Eider', 'Emo', 'Francis', 'Gael', 'Guadalupe', 'Harper', 'Jade', 'Jess', 'Joss', 'Lamar', 'Lucian', 'Luján', 'Marlon', 'Milán', 'Montserrat', 'Morgan', 'Nain', 'Neftalí', 'Noa', 'Noel', 'Paris', 'Pau', 'Paz', 'René', 'Reyes', 'Robin', 'Rosario', 'Trinidad', 'Tyler', 'Sagrario', 'Santana', 'Sasha', 'Yael', 'Yeray', 'Zuri'])
    // Si está bien hecho, este test, pasara solo ^^
    expect(saludo).toBe("¡Hola! Aike, Aymar, Alex, Alexis, Andrea, Andy, Aran, Ariel, Akira, Artis, Asunción, Azul, Cameron, Charlie, Concepción, nombre, Cris, Cruz, Denis, Eider, Emo, Francis, Gael, Guadalupe, Harper, Jade, Jess, Joss, Lamar, Lucian, Luján, Marlon, Milán, Montserrat, Morgan, Nain, Neftalí, Noa, Noel, Paris, Pau, Paz, René, Reyes, Robin, Rosario, Trinidad, Tyler, Sagrario, Santana, Sasha, Yael, Yeray y Zuri")
  })
})
// Aunque al principio de la kata puse, que ya está bien de usar la Kata Greetings
// hemos aprendido un montón con ella y puede que nos enseñe más cosas, pero si la
// vuelvo a usar, usaré otro nombre ;P

// Puede que pasar esta kata fuera bastante duro. Pero te pido que pegues un repaso
// y evalúes lo que has tenido que aprender para llegar hasta aquí, lo que sabías
// cuando empezaste y lo que haces ahora (aunque no lo acabes de entender muy bien)
// ¡haces programas!, si, puede parecer que no valen para mucho, pero antes de empezar
// te imaginabas que podrías programar una pequeña parte de una ¿IA? ^^ Por si no te lo
// dices tú, lo hago yo: - ¡Muy bien hecho!
// ¡A seguir!
