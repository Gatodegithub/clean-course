# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

1. Programación declarativa : Consiste en decirle a un programa lo que tiene que hacer en lugar de decirle cómo debería hacerlo. Este enfoque significa implica proporcionar un lenguaje específico de dominio (DSL) para expresar lo que el usuario quiere.

2. Programación imperativa : Son como unas instrucciones paso a paso (cómo) redactadas para el ordenador. Describen de forma explícita qué pasos deben llevarse a cabo y en qué secuencia para alcanzar finalmente la solución deseada.

# Tips

1. Early return -> para evitar muchos if, doy vuelta la sentencia y hago un return si el caso no se cumple, asi consecutivamente con los posibles casos y al final cuando pase esos casos, continua con el codigo principal. Lo mismo con los bucles, usando continue.


# Notas del curso

1. Nombre de variables: Que se identifique facilmente que almacena la variable.
2. Nombre de funciones: Nombre de lo que realiza la funcion (no como lo hace).
3. DRY: Dont repeat yourself, evitar codigo repetitivo, utilizar funciones o refactorizar.
4. Clases: Aplicar principio de responsabilidad única y priorizar la composición frente a la herencia. 
5. Comentarios: No comentes el código mal escrito, reescríbelo. Nuestro código debe de ser suficientemente auto explicativo. Lo que debemos de comentar es el por qué en lugar de el que o el cómo, ya que el cómo lo vemos en el código y el que hace no deberia ser necesario ya que estamos escribiendo código auto explicativo, pero el por qué he decido resolver algo de cierta manera a sabiendas de que existen otras posibles soluciones, eso si debe ser explicado.
6. Uniformidad en el proyecto: Problemas similares, soluciones similares. Tener un estandar para la creacion de carpetas del proyecto.<br />
ej: product/product-list.html. <br />
Formato de codigo, ej: eslint <br />
Indentación: Depende del lenguaje.
7. STUPID: 6 code smells que debemos de evitar. Posibles indicios de que algo no esta del todo bien en nuestro codigo y es probable que necesitemos aplicar refactorización en el.
[link to https://refactoring.guru/es](https://refactoring.guru/es)
   - Singleton: Patrón singleton.
   - Tight Coupling: Alto acoplamiento. (Lo ideal es tener bajo acoplamiento y una buena cohesión)
       - Acoplamiento: Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.
       - En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.
       - En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.
       - Cohesión: Se refiere a lo que la clase (o módulo) puede hacer.
       - La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
       - La alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.
   - Untestability: Código no probable (unit test)
       - Código con alto acoplamiento (muy relacionadas entre si).
       - Código con muchas dependencias no inyectadas.
       - Dependencias en el contexto global (Tipo Singleton)
   - Premature optimization: Optimizaciones prematuras
       - Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.
       - No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.
           - Complejidad accidental: Cuando implementamos una solución compleja a la mínima indispensable.
           - Complejidad esencial: La complejidad es inherente al problema.
   - Indescriptive Naming: Nombres poco descriptivos.
       - Nombres de variables mal nombradas.
       - Nombres de clases genéricas.
       - Nombres de funciones mal nombradas.
       - Ser muy especifico (muy largo) o demasiado genérico (con lleva a que la clase o modulo haga demasiadas tareas).
   - Duplication: Duplicidad de código, no aplicar el principio DRY.
       - Duplicidad Real: Código es idéntico y cumple misma función. Un cambio implicaría actualizar todo el código idéntico en varios lugares. Incrementa posibilidades de error humano al olvidar una parte para actualizar. Mayor cantidad de pruebas innecesarias.
       - Duplicidad Accidental: Código luce similar pero cumple funciones distintas. Cuando hay un cambio, sólo hay que modificar un sólo lugar. Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

  ### Estructura de las clases
  Comenzar con la lista de propiedades.
  - Propiedades estáticas.
  - Propiedades públicas de último.
  ### Métodos
  - Empezando por los constructores estáticos.
  - Luego el constructor.
  - Seguidamente métodos estáticos.
  - Métodos privados después.
  - Resto de métodos de instancia ordenados de mayor a menor importancia.
  - Getters y Setters al final.


# SOLID - Son principios, no reglas. Una regla es algo que es de obligatorio cumplimiento, si no lo hago asi no funcionara. Los principios son recomendaciones que me ayudan a hacer mejor las cosas.

- S – Single Responsibility Principle (SRP): Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo. Una clase debe de tener una unica responsabilidad, tener mas de una hace que nuestro codigo sea dificil de mantener, leer, menos tolerante al cambio, tener una unica responsabilidad no es sinonimo de hacer una única cosa.
    - ## Detectar violaciones
    - Nombres de clases y módulos demasiado genéricos.
    - Cambios en el código suelen afectar la clase o módulo.
    - La clave involucra múltiples capas.
    - Número elevado de importaciones.
    - Cantidad elevada de métodos públicos.
    - Excesivo número de líneas de código.

- O – Open/Closed Principle (OCP): Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.
    - ## Detectar violaciones
    - Cambios normalmente afectan nuestra clase o módulo.
    - Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)

- L – Liskov Substitution Principle (LSP): Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo.

- I – Interface Segregation Principle (ISP): Los clientes no deberían estar obligados a depender de interfaces que no utilicen.
    - ## Detectar violaciones
    - Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.

- D – Dependency Inversion Principle (DIP): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deberian depender de abstracciones. Las abstracciones no deberían dependender de detalles. Los detalles deberían depender de abstracciones.

Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

# Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```