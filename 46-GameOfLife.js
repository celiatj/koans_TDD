
describe('46-GameOfLife.js', () => {
  // "Game of life", también conocida como la "Conway", es la kata que
  // todo developer tiene que conocer. Porque es la kata que se ha el
  // "Global day of code retreat".
  // Este día que es entre el 12 y 13 de Noviembre, se celebra un evento
  // donde developers de todo el mundo se juntan de la manera que sea
  // a practicar esta kata poniendo restricciones que pueden ir desde:
  // No usar el ratón, hasta, no se pueden usar bucles, pasando por no
  // se pueden usar valores primarios O.o

  // Ahora ya a por la kata. El problema según wikipedia:
  // - El Juego de la vida es un autómata celular diseñado
  // por el matemático británico John Horton Conway en 1970.
  // Se trata de un juego de cero jugadores, lo que quiere decir
  // que su evolución está determinada por el estado inicial y no
  // necesita ninguna entrada de datos posterior. El "tablero de
  // juego" es una malla plana formada por cuadrados (las "células")
  // que se extiende por el infinito en todas las direcciones. Por
  // tanto, cada célula tiene 8 células "vecinas", que son las que
  // están próximas a ella, incluidas las diagonales. Las células tienen
  // dos estados: están "vivas" o "muertas" (o "encendidas" y "apagadas").
  // El estado de las células evoluciona a lo largo de unidades de tiempo
  // discretas (se podría decir que por turnos). El estado de todas las
  // células se tiene en cuenta para calcular el estado de las mismas al
  // turno siguiente. Todas las células se actualizan simultáneamente en
  // cada turno, siguiendo unas reglas.
  // Si buscas videos de "game of life conway" vas a flipar ^^

  // Puede que ahora mismo el problema sea un poco abrumador, por
  // eso lo vamos a acotar al "motor de reglas", las reglas que
  // dictan si en la siguiente generación la célula tiene que tener
  // vida o no. Estas reglas son las siguiente:

  // - Una célula muerta con exactamente 3 células vecinas vivas "nace"
  //  (es decir, al turno siguiente estará viva).
  // - Una célula viva con 2 o 3 células vecinas vivas sigue viva, en otro
  //   caso muere (por "soledad" o "superpoblación").

  // Como siempre, poco a poco, test a test.
  // Escribe aquí tu código:


  it('dictamina que una célula continuará viva con dos vecinas', () => {
    const reglas = new Reglas()
    const cantidadDeVecinas = 2

    const siguienteEstado = reglas.dictaminar('celulaViva', cantidadDeVecinas)

    expect(siguienteEstado).toBe('celulaViva')
  })

  it('dictamina que una célula continuará viva con tres vecinas', () => {
    const reglas = new Reglas()

    const siguienteEstado = reglas.dictaminar('celulaViva', 3)

    expect(siguienteEstado).toBe('celulaViva')
  })

  it('dictamina que una célula continúa muerta con pocas vecinas', () => {
    const reglas = new Reglas()
    const pocasVecinas = 1

    const siguienteEstado = reglas.dictaminar('celulaMuerta', pocasVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula continúa muerta sin vecinas', () => {
    const reglas = new Reglas()
    const sinVecinas = 0

    const siguienteEstado = reglas.dictaminar('celulaMuerta', sinVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula continúa muerta con muchas vecinas', () => {
    const reglas = new Reglas()
    const muchasVecinas = 8

    const siguienteEstado = reglas.dictaminar('celulaMuerta', muchasVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula continúa muerta con dos vecinas', () => {
    const reglas = new Reglas()

    const siguienteEstado = reglas.dictaminar('celulaMuerta', 2)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula morirá con pocas vecina', () => {
    const reglas = new Reglas()
    const pocasVecinas = 1

    const siguienteEstado = reglas.dictaminar('celulaViva', pocasVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula morirá de soledad sin vecinas', () => {
    const reglas = new Reglas()
    const sinVecinas = 0

    const siguienteEstado = reglas.dictaminar('celulaViva', sinVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula morirá con cuatro vecinas', () => {
    const reglas = new Reglas()

    const siguienteEstado = reglas.dictaminar('celulaViva', 4)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula morirá por sobrepoblación con muchas vecinas', () => {
    const reglas = new Reglas()
    const muchasVecinas = 8

    const siguienteEstado = reglas.dictaminar('celulaViva', muchasVecinas)

    expect(siguienteEstado).toBe('celulaMuerta')
  })

  it('dictamina que una célula muerta nacerá con tres vecinas', () => {
    const reglas = new Reglas()
    const vecinasParaQueSeDeLaVida = 3

    const siguienteEstado = reglas.dictaminar('celulaMuerta', vecinasParaQueSeDeLaVida)

    expect(siguienteEstado).toBe('celulaViva')
  })
  // ¿Y lo siguiente que será? Ya tienes de todo, patinetes, robots, IAs,
  // viajes a Marte... también decides el destino de las células ^^
  // Sinceramente si solo nos centramos en el motor de reglas, tampoco
  // es un gran problema, pero no quería acabar con estas koans sin que
  // conocieras un poco sobre esta kata. A ver hasta donde llegas por tu
  // cuenta, te lo dejo como ejercicio ;)
})
