// * Patron singleton garantiza una única instancia a lo largo de toda la aplicación
// ! Vive en el contexto global, puede ser modificado por cualquiera y en cualquier momento, no es rastreable, dificil de testear debido a su ubicación.
const Singleton = (function () {
    
  let instance;

  function createInstance() {
      return new Object('I am the instance');
  }

  return {
      getInstance() {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

function main() {

  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', (instance1 === instance2));
}

main();