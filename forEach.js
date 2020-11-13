// método

const letras = ['a', 'b', 'c'];
letras.forEach(element => console.log(element));

const numeros = [1,2,3,4,5]
numeros.forEach(consoleNumero);
function consoleNumero(item, index, arr){
    console.log('[' + index + ']' + item)
}

