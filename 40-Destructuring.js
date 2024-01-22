describe("40-Destructuring.js", () => {
  // Definición:
  // Destructuring nos da la posibilidad de poder coger los datos de objetos
  // o arrays directamente y de manera múltiple, para extraerlos a variables.
  // Es algo que ya sabemos hacer. Imagínate que tenemos un array con cinco
  // valores y queremos asignar cada uno en una variables. Entonces declararemos
  // una variable y le asignaremos el primer valor, otra variable con el segundo
  // valor... Pues esto te permite hacer todas las asignaciones a la vez.
  it("asignar varios valores a varias variables ^^", () => {
    const arrayDeValores = [
      "primerValor",
      "segundoValor",
      "tercerValor",
      "cuartoValor",
    ];
    // Primero cómo lo sabemos hacer:
    const primeraVariable = arrayDeValores[0];
    const segundaVariable = arrayDeValores[1];
    const terceraVariable = arrayDeValores[2];
    const cuartaVariable = arrayDeValores[3];

    expect(primeraVariable).toBe("primerValor");
    expect(segundaVariable).toBe("segundoValor");
    expect(terceraVariable).toBe("tercerValor");
    expect(cuartaVariable).toBe("cuartoValor");
    // Ahora destructuring...(Parece el nombre de un hechizo chungo :)
    const arrayConOtrosValores = [
      "otroPrimerValor",
      "otroSegundoValor",
      "otroTercerValor",
      "otroCuartoValor",
    ];
    // Primero solo con dos, que se vea bien.
    const [otraPrimeraVariable, otraSegundaVariable] = arrayConOtrosValores;

    expect(otraPrimeraVariable).toBe("otroPrimerValor");
    expect(otraSegundaVariable).toBe("otroSegundoValor");
    // A la primera le da el primer valor, a la segunda el segundo valor.
    // ¿Tendrá algo que ver con los nombres? ^^ Pues lo comprobamos.

    const [otraTerceraVariable, otraCuartaVariable] = arrayConOtrosValores;

    expect(otraTerceraVariable).toBe("otroPrimerValor");
    expect(otraCuartaVariable).toBe("otroSegundoValor");
    // Pues... efectivamente, solo tiene el cuenta la posición.
  });
  // Puede que estés pensando: - ¿Pero en la definición también habla de objetos?
  // Respuesta: Recuerda que los objetos se refieren también a los diccionarios.
  // Y te has metido en un lio.
  it("también funciona con diccionarios", () => {
    const unDiccionarioConValores = {
      unaClave: "unValor",
      otraClave: "otroValor",
      otraClaveMas: "otroValorMas",
    };
    // Primero como sabemos.
    const primeraVariable = unDiccionarioConValores["unaClave"];
    const segundaVariable = unDiccionarioConValores["otraClave"];
    const terceraVariable = unDiccionarioConValores["otraClaveMas"];

    expect(primeraVariable).toBe("unValor");
    expect(segundaVariable).toBe("otroValor");
    expect(terceraVariable).toBe("otroValorMas");
    // Ahora: ¡DESTRUCTURING!
    const { unaClave, otraClave } = unDiccionarioConValores;
    // En lugar de corchetes usa llaves xD
    expect(unaClave).toBe("unValor");
    expect(otraClave).toBe("otroValor");
    // Ya huele a chamusquina, que la variable que se llame como la clave
    // vamos a probar con una clave que no exista.
    let { unaClaveInventada } = unDiccionarioConValores;

    expect(unaClaveInventada).toBe(undefined);
    // Pues lo mismo que esto:
    unaClaveInventada = unDiccionarioConValores["unaClaveQueNoExiste"];

    expect(unaClaveInventada).toBe(undefined);
    // Nada sorprendente.
    // Esto significa, que en las arrays si pongo más variables, que valores
    // en el array tenemos, ¿se asignará undefined?
    // Hagamos un prueba rápida.
    const miniArray = ["unValor"];

    const [primeraPosicion, posicionFueraDelRango] = miniArray;

    expect(primeraPosicion).toBe("unValor");
    expect(posicionFueraDelRango).toBe(undefined);
    // Nos quitamos la duda.
  });
  // Estos dos son los usos más básicos del destructuring.
  // Ahora el que más me gusta.
  it("se puede usar destructuring con los argumentos de las funciones", () => {
    // Difícil de explicar escrito, fácil de explicar con código.
    // Recibiremos un diccionario con un nombre y un apellido. Y nuestra
    // función nos devolverá el nombre completo.
    const nombreYApellido = { nombre: "Robin", apellido: "Harper" };
    const ApellidoYNombre = { apellido: "Noa", nombre: "Akira" };
    // Aquí viene:
    const transformarANombreCompleto = function ({ nombre, apellido }) {
      return nombre + " " + apellido;
    };
    let nombreCompleto = transformarANombreCompleto(nombreYApellido);
    expect(nombreCompleto).toBe("Robin Harper");
    // Ahora con la otra, para asegurarnos que no lo hace por orden.
    nombreCompleto = transformarANombreCompleto(ApellidoYNombre);
    expect(nombreCompleto).toBe("Akira Noa");
    // ¿Qué pasará si el diccionario que le pasamos no tiene esas claves? ^^
    const unDiccionarioConValores = {
      unaClave: "unValor",
      otraClave: "otroValor",
      otraClaveMas: "otroValorMas",
    };

    const veteASaberQueSale = transformarANombreCompleto(
      unDiccionarioConValores
    );

    expect(veteASaberQueSale).toBe("undefined undefined");
    // Te presentamos a Undefined... Undefined... gran persona xD
  });

  it("DIY: Rellena el array", () => {
    const valores = [33, null, false, undefined];

    const [unaVariable, otraVariable, otraVariableMas, loQueSea] = valores;

    expect(unaVariable).toBe(33);
    expect(otraVariable).toBe(null);
    expect(otraVariableMas).toBe(false);
    expect(loQueSea).toBe(undefined);
  });

  it("DIY: Rellena el diccionario", () => {
    const nombresCompletos = {
      akira: "Noa",
      robin: "Harper",
      denis: "Zuri",
    };

    const { akira, robin, denis } = nombresCompletos;

    expect(akira).toBe("Noa");
    expect(robin).toBe("Harper");
    expect(denis).toBe("Zuri");
  });
  // Parece que había alguien prestando atención :)
  // Ahora a por él de verdad.
  it("DIY: Cantidad + divisa", () => {
    const cantidadEnEuros = { cantidad: 33.65, divisa: "€" };
    const cantidadEnDolares = { divisa: "$", cantidad: 12.87 };
    // Termina mi función "toString" que recibirá un diccionario con una
    // cantidad y una divisa y lo devuelve "junto" (Mira las expectaciones).
    // Rellena correctamente:

    const toString = function ({ cantidad, divisa }) {
      if (typeof cantidad !== "number" || typeof divisa !== "string") {
        throw new TypeError();
      }
      return cantidad + " " + divisa;
    };

    expect(toString(cantidadEnEuros)).toBe("33.65 €");
    expect(toString(cantidadEnDolares)).toBe("12.87 $");
    const cantidadEnLibras = { wtf: "OMG", cantidad: 86.18, divisa: "£" };
    // De esto no habíamos hablado, ¿Qué pasará con la clave "wtf"?
    expect(toString(cantidadEnLibras)).toBe("86.18 £");
    // Pues si no la recoges como argumento, ni la usas, pues que tenia
    // ¿qué pasar?. Pues nada ^^
    // BONUS TRACK:
    expect(() => {
      toString({ cantidad: 33.65 });
    }).toThrowAnError(TypeError);
    expect(() => {
      toString({ divisa: "£" });
    }).toThrowAnError(TypeError);
    // Esta no la viste venir ;P
  });
  // Bueno, pues ya tienes un hechizo nuevo para tu colección, pero cuidado que
  // es peligroso xD ¿Cuál será el siguiente?
});
