
describe('45-ObjetosGlobales.js', () => {
  // Ahora que sabes que es el scope global, te voy a presentar
  // algunas de las cosas que oculta ^^ Hay unas cuantas clases
  // del estándar de Javascript que están definidas en el scope global,
  // para ayudarnos con las fechas, operaciones complejas, comunicarnos
  // con otros sistemas, etc...
  // Ya conoces algunas como Math, JSON y no recuerdo si hemos visto alguna más.
  // No vamos a ver mucho más de lo que conoces, pero lo importante es que
  // sepas que hay un montón de ellas y están para ayudarnos en nuestro día a día.
  it('Math', () => {
    // Calcula la raíz cúbica de un número.
    const unEntero = 64

    const raizCubicaDelEntero = Math.cbrt(unEntero)

    expect(raizCubicaDelEntero).toBe(RellenameCorrectamente)

    // Calcula el coseno de un ángulo en radianes
    const piRadianes = Math.PI

    const coseno = Math.cos(piRadianes)

    expect(coseno).toBe(RellenameCorrectamente)

    // Devuelve un número aleatorio entre 0 y 1.
    const numeroAleatorio = Math.random()

    expect(numeroAleatorio > 0).toBe(RellenameCorrectamente)
    expect(numeroAleatorio < 1).toBe(RellenameCorrectamente)
    // Si quieres ver si es verdad descomenta el siguiente expect y refresca
    // los tests, cuando te aburras vuelve a comentarlo xD
    // expect(numeroAleatorio).toBe(RellenameCorrectamente)
    // También redondea un float al integer más cercano.
    const unFloat = 1.23452345

    const redondeadoAUnEntero = Math.round(unFloat)

    expect(redondeadoAUnEntero).toBe(RellenameCorrectamente)
    const otroFloat = 22.63452345

    const redondeadoAOtroEntero = Math.round(otroFloat)

    expect(redondeadoAOtroEntero).toBe(RellenameCorrectamente)
  })

  it('JSON', () => {
    // Transforma a string casi cualquier valor.
    const unNumeroEnJSON = JSON.stringify(55354234)

    expect(unNumeroEnJSON).toBe(RellenameCorrectamente)

    const stringComoJSON = JSON.stringify('unaString')
    // Recuerda el tema de comillas simples y dobles ;)
    expect(stringComoJSON).toBe(RellenameCorrectamente)

    const unNuloEnJSON = JSON.stringify(null)

    expect(unNuloEnJSON).toBe(RellenameCorrectamente)

    const unUndefinedEnJSON = JSON.stringify(undefined)

    expect(unUndefinedEnJSON).toBe(RellenameCorrectamente)
    // El undefined siempre dando guerra ^^

    const unArrayEnJSON = JSON.stringify([null, 'Akira', 3])

    expect(unArrayEnJSON).toBe(RellenameCorrectamente)

    const unDiccionarioEnJSON = JSON.stringify({ clave: 'valor' })

    expect(unDiccionarioEnJSON).toBe(RellenameCorrectamente)
    // Transforma todos los JSONs a su valor.
    // Vamos a por los casos gordos xD
    // Fijate que el método que usa JSON cambia.
    const unArray = JSON.parse('[null,"Akira",3]')

    expect(unArray).toBe(RellenameCorrectamente)

    const unDiccionario = JSON.parse('{"clave":"valor"}')

    expect(unDiccionario).toBe(RellenameCorrectamente)
  })

  it('Date', () => {
    // De las más importantes, fechas. Trabajar con fechas es de lo
    // más duro, pero Javascript lo intenta poner fácil.
    // Si no fuera porque es difícil... (Chiste malo)
    const [anyo, mes, dia, hora, minutos, segundos] = [2022, 3, 5, 22, 8, 12]

    const fechaCompleta = new Date(anyo, mes, dia, hora, minutos, segundos)

    expect(fechaCompleta.toString()).toBe(RellenameCorrectamente)
    // ¿Mes 3 April? O.o Luego veremos el porque.
    expect(fechaCompleta.toDateString()).toBe(RellenameCorrectamente)
    // El siguiente devuelve el día del mes.
    expect(fechaCompleta.getDate()).toBe(RellenameCorrectamente)
    // El siguiente devuelve el día de la semana.
    expect(fechaCompleta.getDay()).toBe(RellenameCorrectamente)
    // El martes es el 2º día ^^
    // El siguiente devuelve la hora.
    expect(fechaCompleta.getHours()).toBe(RellenameCorrectamente)
    // El siguiente devuelve los minutos.
    expect(fechaCompleta.getMinutes()).toBe(RellenameCorrectamente)
    // El siguiente devuelve el mes (atención Enero es el mes 0).
    expect(fechaCompleta.getMonth()).toBe(RellenameCorrectamente)
    // ¿Por qué los días van del 1 al 7 y el mes del 0 al 11? Ni idea
    // pero seguro que tendrían su motivo (espero ;).
    // El siguiente devuelve los segundos.
    expect(fechaCompleta.getSeconds()).toBe(RellenameCorrectamente)
    // El siguiente devuelve los milisegundos transcurridos entre el
    // día 1 de enero de 1970 y la fecha indicada.
    expect(fechaCompleta.getTime()).toBe(RellenameCorrectamente)
    // El siguiente devuelve el año, al que se le ha restado 1900.
    expect(fechaCompleta.getYear()).toBe(RellenameCorrectamente)
    // El siguiente devuelve el año con todos los dígitos.
    expect(fechaCompleta.getFullYear()).toBe(RellenameCorrectamente)
    // Este año mola más xD

    // Al construir la fechas, si no le indicas la hora, la pondrá a 00:00:00
    const fechaSinHora = new Date(2022, 3, 4)

    expect(fechaSinHora.toString()).toBe(RellenameCorrectamente)
    // ¿Qué pasará si no le indicamos nada?
    const fechaSinNada = new Date()

    expect(fechaSinNada.toString()).toBe(RellenameCorrectamente)
    // Nos devuelve el momento actual, cuando te canses de intentar
    // pasar el expect, comentalo xDD Que después de cada segundo deja de pasar.
  })
})
