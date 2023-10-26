// Aquí necesito empezar la explicación un poco antes.
// El scope es el alcance que tiene una declaración de un valor.
// Digámoslo de una manera más de ir por casa, es más o menos como
// los lugares desde donde se puede usar una variable. En javascript
// hay dos "scopes"; El scope global que está fuera de todo, por lo que
// se puede acceder a cualquier cosa que se defina allí desde cualquier
// otro scope, pero él no puede acceder a las declaraciones en otros scopes.
const variableEnElScopeGlobal = 'valorEnElScopeGlobal'
// Y luego está el scope del bloque de código {}, desde el scope global no se
// puede acceder a las declaraciones dentro del bloque, pero desde dentro del
// bloque sí que se puede acceder a las declaraciones del scope global.
// ¿Qué pasa si hay un bloque de un bloque?
// Pues que el "subBloque" puede acceder a las declaraciones del scope global
// y de todas las declaraciones hechas en los bloque de código dentro de los
// que se encuentre, pero el scope global y el de los bloques que contienen a este
// no pueden acceder a las declaraciones dentro del "subBloque". Ufff....

// Esto es como ir en un coche con las ventanillas tintadas, tu ves a las personas de
// fuera pero ellas no te ven a ti. ¿Y el "subBloque"?, pues es como si dentro de tu
// coche hubiera otro coche con las ventanillas tintadas, entonces, las personas de
// dentro del "subCoche" pueden ver a todas las del coche de fuera y las de la calle,
// pero todas esas personas, no pueden ver a las del "subCoche" xDDDD

// Vamos a un bloque, despídete del scope global.
describe('44-Scope.js', () => {
  // Ya estamos en el primer bloque de código.
  const variableEnElScopeDelDescribe = 'valorEnElScopeDelDescribe'

  it('un bloque dentro de un bloque', () => {
    const variableEnElScopeDelPrimerTest = 'valorEnElScopePrimerTest'
    // Comprobemos que se ve desde este bloque de código.
    expect(variableEnElScopeGlobal).toBe(RellenameCorrectamente)
    expect(variableEnElScopeDelDescribe).toBe(RellenameCorrectamente)
    expect(variableEnElScopeDelPrimerTest).toBe(RellenameCorrectamente)
    // Despídete del scope del subBloque
  })
  // ¡Hola, primer bloque!
  // Veremos que se puede usar desde aquí...
  // Por unos problemillas técnicos tengo que resolverte estas expectaciones.
  expect(variableEnElScopeGlobal).toBe('valorEnElScopeGlobal')
  expect(variableEnElScopeDelDescribe).toBe('valorEnElScopeDelDescribe')
  // Desde aquí no se puede acceder a la variable variableEnElScopeDelPrimerTest
  // Si la usamos da un error y se acabó todo. Ahora haz lo que quieras, creerme
  // o descomentar la línea donde se usa la variable. Pero la volveras a comentar xD
  // variableEnElScopeDelPrimerTest

  it('un coche dentro de otro, ambos con las ventanas tintadas', () => {
    // Uhm... otro "subBloque"
    const variableEnElScopeDelSegundoTest = 'valorEnElScopeSegundoTest'

    expect(variableEnElScopeGlobal).toBe(RellenameCorrectamente)
    expect(variableEnElScopeDelDescribe).toBe(RellenameCorrectamente)
    expect(variableEnElScopeDelSegundoTest).toBe(RellenameCorrectamente)
    // ¿Crees que desde un subBloque se puede acceder a otro subBloque "igual"?
    // Creo que esta expectación hace spoiler.
    expect(() => {
      variableEnElScopeDelPrimerTest
    }).toThrowAnError(ReferenceError)
    // Un error de referencia... será que no sabe a qué nos referimos ^^
  })

  it('el scope de las funciones', () => {
    const funcionConSuScope = function() {
      // Al final es como otro bloque de código más.
      const unaVariableEnUnaFuncion = 'unValorEnUnaFuncion'

      return unaVariableEnUnaFuncion
    }
    // Bueno y dentro del bloque de función podemos usar cualquier cosa
    // de los bloques donde se encuentra y del scope global.
    // No hace falta probarlo, ¿no? :)
    expect(funcionConSuScope()).toBe(RellenameCorrectamente)
    expect(() => {
      unaVariableEnUnaFuncion
    }).toThrowAnError(ReferenceError)
  })

  it('scopes de la parte estática de la clase', () => {
    const Clase = class {
      static atributoEnELScopeDeLaClase = 'atributoEnELScopeDeLaClase'
      static unMetodoEnElScopeDeLaClase() {
        return this.atributoEnELScopeDeLaClase
      }
      static otroMetodoEnElScopeDeLaClse() {
        return 'otroMetodoEnElScopeDeLaClse'
      }
      static intentandoAccederAlScopeDeLaInstancia() {
        return this.atributoEnELScopeDeLaInstancia
      }
      constructor() {
        this.atributoEnELScopeDeLaInstancia = 'atributoEnELScopeDeLaInstancia'
      }
    }

    expect(Clase.atributoEnELScopeDeLaClase).toBe(RellenameCorrectamente)
    expect(Clase.unMetodoEnElScopeDeLaClase()).toBe(RellenameCorrectamente)
    expect(Clase.otroMetodoEnElScopeDeLaClse()).toBe(RellenameCorrectamente)
    expect(Clase.intentandoAccederAlScopeDeLaInstancia()).toBe(RellenameCorrectamente)
    const clase = new Clase()
    expect(clase.atributoEnELScopeDeLaInstancia).toBe(RellenameCorrectamente)
    // Ahora verás mejor que el this es una cosa depende si se usa desde
    // la parte estática o desde instancia
  })

  it('scopes dentro de la instance de clase', () => {
    const Clase = class {
      static atributoEnELScopeDeLaClase = 'atributoEnELScopeDeLaClase'
      constructor() {
        this.atributoEnELScopeDeLaInstancia = 'atributoEnELScopeDeLaInstancia'
      }
      unMetodoEnElScopeDeLaInstancia() {
        return this.atributoEnELScopeDeLaInstancia
      }
      otroMetodoEnElScopeDeLaInstancia() {
        return 'otroMetodoEnElScopeDeLaInstancia'
      }
      intentandoAccederAlScopeDeLaClase() {
        return this.atributoEnELScopeDeLaClase
      }
    }

    expect(Clase.atributoEnELScopeDeLaClase).toBe(RellenameCorrectamente)
    const clase = new Clase()
    expect(clase.atributoEnELScopeDeLaInstancia).toBe(RellenameCorrectamente)
    expect(clase.unMetodoEnElScopeDeLaInstancia()).toBe(RellenameCorrectamente)
    expect(clase.otroMetodoEnElScopeDeLaInstancia()).toBe(RellenameCorrectamente)
    expect(clase.intentandoAccederAlScopeDeLaClase()).toBe(RellenameCorrectamente)
  })
  // Último ejemplo con clases, prometido ^^
  it('los métodos de las clases son un bloque de código más', () => {
    const variableEnElScopeDelTest = 'valorEnElScopeDelTest'

    const Clase = class {
      intentandoAccederAlScopeGlobal() {
        return variableEnElScopeGlobal
      }

      intentandoAccederAlScopeDelDescribe() {
        return variableEnElScopeDelDescribe
      }

      intentandoAccederAlScopeDelTest() {
        return variableEnElScopeDelTest
      }
    }

    const clase = new Clase()
    expect(clase.intentandoAccederAlScopeGlobal()).toBe(RellenameCorrectamente)
    expect(clase.intentandoAccederAlScopeDelDescribe()).toBe(RellenameCorrectamente)
    expect(clase.intentandoAccederAlScopeDelTest()).toBe(RellenameCorrectamente)
  })
})
// Intensito ;P Lo que viene será más relajado. Prometido.
