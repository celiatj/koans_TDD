// Si has llegado hasta aquí es porque te has leido el README.md
// (o eso espero ;)

// ¿Qué es esto que estoy viendo?
// Lo primero que estás viendo es el "describe" en el que puedes ver el
// nombre del sujeto bajo test, también conocido como SUT (Subject under test),
// por ahora para simplificar vamos a poner el nombre del archivo en el que se
// está trabajando
describe('1-Tests.js', () => {
  // ¿Y esto del "it"? ¿Qué es?
  // Pues es el famoso test y lo primero que ves es el nombre del test.
  it('¡HOLA! Soy un test y estoy roto :_( ¿Puedes arreglarme?', () => {
    // Este test está roto o como hemos hablado antes, está en rojo. Por lo que
    // podrás verlo en rojo en tu navegador.
    // y te preguntarás: - ¿Pero cómo lo arreglo?
    // Dependiendo del test puede tener diferentes formas de arreglarse.
    // Siempre lee detenidamente todos los comentarios y el nombre del test,
    // y ellos te dirán la manera de solucionarlo. Aunque para decir una forma genérica
    // tienes que hacer, que el valor que hay dentro del expect sea
    // el mismo que hay dentro del toBe. (Recuerda salvar los cambios de este
    // fichero y recargar el navegador)
    expect('Arreglado').toBe('Arreglado')
  })
  // ¡Bien! Has puesto en verde tu primer test, seguro que lo has podido comprobar
  // en tu navegador. ¡Ahora a ponerlos todos en verde!
  // ¡Cuidado, este test es muy difícil!
  skip('!NO, PUEDES, PASAR!', () => {
    // Ok. Como se puede ver no es tan difícil como parece.
    // Aprovecho para explicar una situación con la que te puedes encontrar.
    // Imaginate, que estas con un test y que es realmente difícil de poner
    // en verde. Ya lo has probado todo...
    // - Te has leído atentamente el error en el navegador
    // - Te has asegurado que está en el fichero que toca y en el test que toca
    // - Te has leido atentamente todos los comentarios y el nombre del test
    // - Has buscando con calma por internet
    // Pero aun haciendo todo esto, no puedes solucionar el test y estas al borde
    // de un ataque de nervios.
    // Pues no te preocupes, tómate un descanso y aléjate de la pantalla un ratito.
    // Cuando vuelvas a ponerte a solucionar el test, repite todos los pasos
    // con calma, y si aun así no puedes solucionarlo, busca a alguien que te pueda
    // ayudar. Si ahora no cuentas con nadie, pasa del test, anotalo y asegurate
    // de que alguien te ayude a entenderlo.
    // Para pasarte el test lo único que tienes que hacer es en la línea donde
    // empieza el test (que es el "it") cambiar el "it" por "skip". Si guardas y
    // miras el navegador verás que está en gris y te dará error el siguiente test.
    // El día que lo quieras retomar, sencillamente revierte el cambio. skip -> it
    expect(RellenameCorrectamente).toBe('Pues no es tan difícil')
  })
  // ¡MUY BIEN! Ya nos vemos en el siguiente archivo.
  // P.D.: TestConsejo, si estás usando GIT o un control de versiones y no lo has
  // utilizado... quizás es un buen momento de usarlo ;)
})
