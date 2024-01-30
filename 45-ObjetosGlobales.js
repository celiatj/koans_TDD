
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

    expect(raizCubicaDelEntero).toBe(4)

    // Calcula el coseno de un ángulo en radianes
    const piRadianes = Math.PI

    const coseno = Math.cos(piRadianes)

    expect(coseno).toBe(-1)

    // Devuelve un número aleatorio entre 0 y 1.
    const numeroAleatorio = Math.random()

    expect(numeroAleatorio > 0).toBe(true)
    expect(numeroAleatorio < 1).toBe(true)
    // Si quieres ver si es verdad descomenta el siguiente expect y refresca
    // los tests, cuando te aburras vuelve a comentarlo xD
    // expect(numeroAleatorio).toBe(RellenameCorrectamente)
    // También redondea un float al integer más cercano.
    const unFloat = 1.23452345

    const redondeadoAUnEntero = Math.round(unFloat)

    expect(redondeadoAUnEntero).toBe(1)
    const otroFloat = 22.63452345

    const redondeadoAOtroEntero = Math.round(otroFloat)

    expect(redondeadoAOtroEntero).toBe(23)
  })

  it('JSON', () => {
    // Transforma a string casi cualquier valor.
    const unNumeroEnJSON = JSON.stringify(55354234)

    expect(unNumeroEnJSON).toBe("55354234")

    const stringComoJSON = JSON.stringify('unaString')
    // Recuerda el tema de comillas simples y dobles ;)
    expect(stringComoJSON).toBe('"unaString"')

    const unNuloEnJSON = JSON.stringify(null)

    expect(unNuloEnJSON).toBe("null")

    const unUndefinedEnJSON = JSON.stringify(undefined)

    expect(unUndefinedEnJSON).toBe(undefined)
    // El undefined siempre dando guerra ^^

    const unArrayEnJSON = JSON.stringify([null, 'Akira', 3])

    expect(unArrayEnJSON).toBe('[null,"Akira",3]')

    const unDiccionarioEnJSON = JSON.stringify({ clave: 'valor' })

    expect(unDiccionarioEnJSON).toBe('{"clave":"valor"}')
    // Transforma todos los JSONs a su valor.
    // Vamos a por los casos gordos xD
    // Fijate que el método que usa JSON cambia.
    const unArray = JSON.parse('[null,"Akira",3]')

    expect(unArray).toBe([null, "Akira", 3])

    const unDiccionario = JSON.parse('{"clave":"valor"}')

    expect(unDiccionario).toBe({ clave: "valor" })
  })

  it('Date', () => {
    // De las más importantes, fechas. Trabajar con fechas es de lo
    // más duro, pero Javascript lo intenta poner fácil.
    // Si no fuera porque es difícil... (Chiste malo)
    const [anyo, mes, dia, hora, minutos, segundos] = [2022, 3, 5, 22, 8, 12]

    const fechaCompleta = new Date(anyo, mes, dia, hora, minutos, segundos)

    expect(fechaCompleta.toString()).toBe("Tue Apr 05 2022 22:08:12 GMT+0100 (GMT+01:00)")
    // ¿Mes 3 April? O.o Luego veremos el porque.
    expect(fechaCompleta.toDateString()).toBe("Tue Apr 05 2022")
    // El siguiente devuelve el día del mes.
    expect(fechaCompleta.getDate()).toBe(5)
    // El siguiente devuelve el día de la semana.
    expect(fechaCompleta.getDay()).toBe(2)
    // El martes es el 2º día ^^
    // El siguiente devuelve la hora.
    expect(fechaCompleta.getHours()).toBe(22)
    // El siguiente devuelve los minutos.
    expect(fechaCompleta.getMinutes()).toBe(8)
    // El siguiente devuelve el mes (atención Enero es el mes 0).
    expect(fechaCompleta.getMonth()).toBe(3)
    // ¿Por qué los días van del 1 al 7 y el mes del 0 al 11? Ni idea
    // pero seguro que tendrían su motivo (espero ;).
    // El siguiente devuelve los segundos.
    expect(fechaCompleta.getSeconds()).toBe(12)
    // El siguiente devuelve los milisegundos transcurridos entre el
    // día 1 de enero de 1970 y la fecha indicada.
    expect(fechaCompleta.getTime()).toBe(1649192892000)
    // El siguiente devuelve el año, al que se le ha restado 1900.
    expect(fechaCompleta.getYear()).toBe(122)
    // El siguiente devuelve el año con todos los dígitos.
    expect(fechaCompleta.getFullYear()).toBe(2022)
    // Este año mola más xD

    // Al construir la fechas, si no le indicas la hora, la pondrá a 00:00:00
    const fechaSinHora = new Date(2022, 3, 4)

    expect(fechaSinHora.toString()).toBe("Mon Apr 04 2022 00:00:00 GMT+0100 (GMT+01:00)")
    // ¿Qué pasará si no le indicamos nada?
    const fechaSinNada = new Date()

    //expect(fechaSinNada.toString()).toBe("Fri Dec 15 2023 19:43:21 GMT+0100 (GMT+01:00)")
    // Nos devuelve el momento actual, cuando te canses de intentar
    // pasar el expect, comentalo xDD Que después de cada segundo deja de pasar.
  })
})
