//****Nesting Object within Objects
// const user = {
//     thunderBold: {
//         name: "elide",
//         job: "programador",
//     },
//     grado: "A"
// };

// console.log(user["thunderBold"])
// console.log(user["thunderBold"].name)
// console.log(user["grado"])
// console.log(user["thunderBold"]["name"])

// const user = {
//     thunderBold: {
//         name: "elide",
//         job: "programador",
//     },
//     grado: "A",
//     hobbies: ['Leer', 'Meditar', 'Hacer Ejercicio']
// };

// console.log(user["hobbies"][1]);

//****Nesting Object within Array

const user = [
    {
        name: 'Elide',
        trabajo: 'Programador',
    },
    "compassionate",
    ['making suits',"destroying suits" ]
]

console.log(user[0]);
console.log(user[0].name);
console.log(user[2]);
console.log(user[2][1]);
console.log(`${user[0]["name"]} trabaja como ${user[0]["trabajo"]}`);   