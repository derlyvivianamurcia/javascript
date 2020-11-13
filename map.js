/* const alumnos =[[5,8,4],[2,5,2], [8,8,9]];

const promedios = alumnos.map((alumno)=>{
    let suma = alumno.reduce((a,b)=> a+b);
    return suma/alumno.length
})

console.log(promedios) */



const numeros = [1,2,3,4,5]
const numerosDoble = numeros.map(doble);

function doble(value, index, arr) {
    return value*2
}

console.log(numerosDoble)