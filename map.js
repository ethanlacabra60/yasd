let numero = [1,2,3,4,5,6,7,8,9,10]
let numerosalcuadrado = numero.map(function(numero){

    return numero * numero;

});
let numerosmayoresque40 = numerosalcuadrado.filter(function(numero) {
    return numero > 40;
});

console.log(numerosalcuadrado);
console.log(numerosmayoresque40);