/*
Ejercicio 1: Filtrar personajes menores de edad
Crear un array de objetos con información de personajes de Los Simpsons, cada
objeto debe contener el nombre, la edad y el rol del personaje. Utilizar el método
filter para obtener un nuevo array que contenga solamente los personajes
menores de 18 años.
*/
const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

//(Me creo la variable personajesMenores-ahora->filtroMenores18 xq lo necesito para los otros ejs.)
const filtroMenores18 = personajesSimpsons.filter(personajesSimpsons => personajesSimpsons.edad < 18); //RTA = Un arreglo de 7 personajes.

/*
Ejercicio 2: Sumar edades de los personajes
Utilizar el método reduce para sumar las edades de todos los personajes del array
creado en el Ejercicio 1. Mostrar el resultado en la consola.
*/
//ejemplo: numeros.reduce((acumulador, numero) => acumulador + numero, 0)

//ejemploOficial: const sumWithInitial = array1.reduce(
//(accumulator, currentValue) => accumulator + currentValue,
//  initialValue
//);

//Ejemplo oficial q sirve: Grouping objects by a property

const sumaEdadesEjs1 = filtroMenores18.reduce((acumulador, personaje) => acumulador + personaje.edad, 0);
console.log(sumaEdadesEjs1); //RTA = 59

/*
Ejercicio 3: Obtener los nombres de los personajes
Utilizar el método map y una función arrow para crear un nuevo array que contenga
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo
array en la consola.
*/
const mapEjs1 = filtroMenores18.map(personaje => personaje.nombre);
console.log(mapEjs1);
/*RTA = 
Array(7)
    0: "Bart"
    1: "Lisa"
    2: "Maggie"
    3: "Ralph"
    4: "Milhouse"
    5: "Nelson"
    6: "Martin"
*/

/*
Ejercicio 4: Cambiar el rol de los personajes
Utilizar el método map y destructuring para crear un nuevo array a partir del array
del Ejercicio 1, en el cual el rol de los personajes menores de edad sea cambiado a
"Estudiante". Mostrar el nuevo array en la consola.
*/

//Recordar: Map = sirve para crear un NUEVO array pudiendo transformar los elementos.

/* v1: no es lo q pedian. El array tiene q tener el objeto personaje.
const mapRolEjs1 = filtroMenores18.map(personaje => personaje.rol);
const cambioRolEjs1 = mapRolEjs1.map(rol => "Estudiante");
console.log(cambioRolEjs1);
RTA= Array(7)
0: "Estudiante"
1: "Estudiante"
2: "Estudiante"
3: "Estudiante"
4: "Estudiante"
5: "Estudiante"
6: "Estudiante"
*/

/* opcion 2: const cambioRolEjs1 = filtroMenores18.map(personaje => personaje.rol = "Estudiante");
console.log(cambioRolEjs1);*/

/* opcion 3-iterando-: for (let i = 0; i < filtroMenores18.length; i++) {
    const personajeActual = filtroMenores18[i];
}*/

/* opcion 4: const mapRolEjs1 = filtroMenores18.map(function(personaje){
    return personaje.rol="Estudiante";
});
console.log(mapRolEjs1);*/
/*RTA= Array(7)
0: "Estudiante"
1: "Estudiante"
2: "Estudiante"
3: "Estudiante"
4: "Estudiante"
5: "Estudiante"
6: "Estudiante"*/

// opcion 5:
// IMPORTANTE: destructuring = en vez de poner el nombre del array-> poner los nombres a cada index del array (es para despues poder llamar a esos como variables).
//ej: const {bart, lisa, maggie, ...rest} = mapRolEjs1
const mapRolEjs1 = filtroMenores18.map(({ nombre, edad, rol }) => ({ nombre, edad, rol: "Estudiante" }));
console.log(mapRolEjs1);