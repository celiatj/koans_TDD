describe("41-SpreadOperator.js", () => {
  // Sinceramente esta es la típica cosa que sabes como funciona pero no
  // sabes como explicar :_( Así que esta es la definición de internet:
  // - Convierte un array o un objeto en el conjunto de valores que contiene.
  it("convierte un array en un conjunto de valores", () => {
    // Primero vamos a ver algo que necesite un conjunto de valores.
    // Te presento a la clase "Math" que tiene métodos muy útiles (que veremos
    // pronto :) Pero para ahora vamos a ver que hace el método "max".
    // Nos dice del conjunto de números que le pasamos, cuál es el más alto.
    let elMasAlto = Math.max(4, 106, 225, 20, 999, 88);

    expect(elMasAlto).toBe(999);
    // Al método max recibe un conjunto de números (ya sea uno o 2999 números)
    // Vamos a ver qué ocurre si se le pasa un array con numeros.
    elMasAlto = Math.max([4, 106, 225, 20, 999, 88]);
    // la expectación creo que hace spoiler xD
    expect(isNaN(elMasAlto)).toBe(true);
    // Cómo espera un conjunto de números, pero recibe un array y el array no es
    // un número, nos devuelve NaN.
    // Así que ahora usaremos el spread operator para convertir la array en un
    // conjunto de valores.
    const numeros = [4, 106, 225, 20, 999, 88];
    // El spread operator usa el símbolo ... (tres puntos seguidos)
    elMasAlto = Math.max(...numeros);

    expect(elMasAlto).toBe(999);
    // Vamos a ver otro ejemplo.
    // Voy a definir una función que juntará 4 textos.
    const concatenarTextos = function (
      unTexto,
      otroTexto,
      otroTextoMas,
      elUltimo
    ) {
      return unTexto + " " + otroTexto + " " + otroTextoMas + " " + elUltimo;
    };
    // Veremos que tal va.
    let texto = concatenarTextos("a", "b", "c", "d");
    // Muy, muy fácil.
    expect(texto).toBe("a b c d");

    texto = concatenarTextos("a", "b");

    expect(texto).toBe("a b undefined undefined");
    // Nada nuevo.
    const cuatroTextos = ["1", "2", "3", "4"];
    // Ahora spread operator
    texto = concatenarTextos(...cuatroTextos);

    expect(texto).toBe("1 2 3 4");
    const tresTextos = ["1", "2", "3"];
    // Ahora spread operator
    texto = concatenarTextos(...tresTextos);

    expect(texto).toBe("1 2 3 undefined");
  });
  // Ahora vamos a usar el spread operator para recoger el resto
  // de parámetros. Ahora a ver de qué hablo ^^
  it("rest parameter (parámetro rest)", () => {
    // Esto se usa para hacer funciones como la de Math.max, ahora
    // voy a definir una función que concatene todos los textos que
    // reciba, sin un limite de textos (Espera un conjunto de textos)
    const concatenarTextos = function (...textos) {
      // Pero dentro de la función, con el spread operator convertiremos
      // ese conjunto de textos en una array con todos los textos que reciba.
      return textos.join(" ");
      // Si no recuerdas que hace el método "join" de las arrays, pegale un
      // vistazo a la koan de las Arrays donde se explica.
    };
    let texto = concatenarTextos("a", "b", "c", "d", "e");

    expect(texto).toBe("a b c d e");
    expect(concatenarTextos("Akira", "Noa")).toBe("Akira Noa");
    expect(concatenarTextos(2, 3, 7, 88)).toBe("2 3 7 88");
    // vamos a probar ahora pasandole un array.
    expect(concatenarTextos([2, 3, 7, 88])).toBe("2,3,7,88");
    // Upss... ¿y esas comas?
    expect(concatenarTextos([3, 5], [23, 1])).toBe("3,5 23,1");
    // Vale, trata cada array como un valor, pero el "join" nos la juego un poco ^^
  });
  // Ahora vamos a por los usos más comunes del spread operator.
  it("concatena arrays", () => {
    const arrayConDosValores = ["a", "b"];
    const arrayConTresValores = ["c", "d", "e"];
    // Primero la manera que conocemos:

    let arrayConcatenada = arrayConDosValores.concat(arrayConTresValores);

    expect(arrayConcatenada).toBe(["a", "b", "c", "d", "e"]);
    // Ahora con el spread operator:
    arrayConcatenada = [...arrayConDosValores, ...arrayConTresValores];

    expect(arrayConcatenada).toBe(["a", "b", "c", "d", "e"]);
    // ¿Importará el orden?
    arrayConcatenada = [...arrayConTresValores, ...arrayConDosValores];

    expect(arrayConcatenada).toBe(["c", "d", "e", "a", "b"]);
    // ¿Qué pasará si se nos olvida un spread operato?
    arrayConcatenada = [...arrayConDosValores, arrayConTresValores];

    expect(arrayConcatenada).toBe(["a", "b", ["c", "d", "e"]]);
    // Confirmado, es el spread operator el que concatena ^^
  });

  it("concatena diccionarios", () => {
    // No hace falta presentaciones ^^
    const unDiccionario = { a: 1, b: 2 };
    const otroDiccionario = { c: 3, d: 4 };

    let diccionarioConcatenado = { ...unDiccionario, ...otroDiccionario };

    expect(diccionarioConcatenado).toBe({ a: 1, b: 2, c: 3, d: 4 });
    // Es un diccionario, no importa el orden. Pero ¿qué pasa si se
    // repitiera una clave?
    const diccionarioConClaveRepetida = { a: "unValor", e: 5 };

    diccionarioConcatenado = {
      ...unDiccionario,
      ...diccionarioConClaveRepetida,
    };

    expect(diccionarioConcatenado).toBe({ a: "unValor", b: 2, e: 5 });
    // Interesante... ¿Importará el orden?

    diccionarioConcatenado = {
      ...diccionarioConClaveRepetida,
      ...unDiccionario,
    };

    expect(diccionarioConcatenado).toBe({ a: 1, b: 2, e: 5 });
    // Pues si, el último es el que sobreescribe la clave repetida.
  });
  // Ok, ahora nos queda el uso que más me gusta ^^
  it("clona arrays y diccionarios", () => {
    // Bien, ¿Qué es eso de clonar? Vamos a ver un par de cosillas y
    // se entenderá.
    const arrayInicial = [0, 1, 2, 3, 4];
    const cambiaPrimerValor = function (unaArray) {
      unaArray[0] += 1;

      return unaArray;
    };

    let arrayCambiada = cambiaPrimerValor(arrayInicial);

    expect(arrayCambiada).toBe([1, 1, 2, 3, 4]);
    // Perfecto, nada inesperado.
    expect(arrayInicial).toBe([1, 1, 2, 3, 4]);
    // ¡Ojo! que se ha modificado el array original,
    // esto puede causar muchos líos :_(
    // Si la función clonara el array, no pasaría esto.
    // Primero dejaremos el array como estaba.
    arrayInicial[0] = 0;

    expect(arrayInicial).toBe([0, 1, 2, 3, 4]);
    // Bien. Ahora vamos a crear una función como la de antes,
    // pero que no cambie la inicial.
    const cambiaPrimerValorMucho = function (unaArray) {
      const arrayClonada = [...unaArray];

      arrayClonada[0] += 100000;

      return arrayClonada;
    };

    arrayCambiada = cambiaPrimerValorMucho(arrayInicial);

    expect(arrayCambiada).toBe([100000, 1, 2, 3, 4]);
    // La hora de la verdad...
    expect(arrayInicial).toBe([0, 1, 2, 3, 4]);
    // Me encanta que los planes salgan bien xD
  });
});
// El destructuring y el spread operator me reventaron la cabeza cuando
// salieron, pero al final les cogí cariño xD
