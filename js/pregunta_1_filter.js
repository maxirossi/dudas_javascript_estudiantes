/*
Pregunta =>
En la función con .filter  arrow actúa como if?
Código de ejemplo =>
*/

let personas = [
{
    nombre: "Jhony",
    asistente: null,
    seccion: "gold",
    rol: "speaker"
},
{
    nombre: "Manuel",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
},
{
    nombre: "Fran",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
},
{
    nombre: "Cintia",
    seccion: "platino",
    rol: "viewer"
},
{
    nombre: "Marcos",
    asistente: null,
    seccion: "gold",
    rol: "viewer"
},
{
    nombre: "Victoria",
    asistente: true,
    seccion: "platino",
    rol: "speaker"
}
];

function filtrarPersonas(propiedad, valor) {
    let personasFiltradas = [];
        for (let index = 0; index < personas.length; index++) {
            let personaIndividual = personas[index];
            if (personaIndividual[propiedad] == valor){
                personasFiltradas.push (personaIndividual);
            }
}
    return personasFiltradas;
}

function filtrarPersonas2(propiedad, valor) {
    return personas.filter(element => element[propiedad] == valor);
}
    
 //console.log (filtrarPersonas2("rol", "viewer"));
 //console.log (filtrarPersonas2("rol", "viewer"));



/* Respuesta =>
La función filter, es una función de orden superior, que permite filtrar arrays mediante una condición.
Se puede utilizar con arrow function o no, (no es obligatorio), lo que si tenemos que tener en claro, 
es que se filtra un array por medio de una condición, para evaluar está condición internamente la función filter, 
utiliza un if (aunque no lo vemos en el código)
Documentación : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Ejemplo =>
 */

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/* En este caso hacemos uso de arrow functions, query es lo que buscamos y aunque
no vemos el if en el ejemplo, si vemos la condición de filtrado =>
el.toLowerCase().indexOf(query.toLowerCase()) > -1
Esta linea, dice que solo devolvamos cuando (sería el if) el elemento que iteremos. pasado a minisculas, coincida en parte o matchee con 
el contenido de lo que estamos iterando (que está en minusculas también) (nos aseguramos de esto, con la función toLoWerCase())
*/

const filterItems = query => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1 // <= Condición de filtrado
  );
}

/*
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
console.log(filterItems('AP')); // ['apple', 'grapes']
*/

/* Veamos el mismo ejemplo, pero utilizando funciones con la sintaxist
tradicional (sin arrow functions) */

//console.log(fruits);

function filterItems2(query){
    return fruits.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1 // <= Condición de filtrado
    });
}

console.log(filterItems2('ap')); // ['apple', 'grapes']
console.log(filterItems2('an')); // ['banana', 'mango', 'orange']
console.log(filterItems2('AP')); // ['apple', 'grapes']
