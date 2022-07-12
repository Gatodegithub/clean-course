# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

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