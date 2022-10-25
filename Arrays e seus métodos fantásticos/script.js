// Exercício 1: Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.

// var numbers = [];

// for (let i = 0; i < 20; i++) {

//     var number = parseInt(prompt("Digite um número abaixo:"));

//     numbers.push(number);

// }

// console.log(numbers);

//Exercício 2: Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.

    var menor50 = [];
    var maior50 = [];

    for(let i = 0; i < 12; i ++) {

    var numbers = parseInt(prompt("Digite um número abaixo, por favor:"));

    if (numbers < 50) {

        menor50.push(numbers);

    } else {

        maior50.push(numbers);
        
    }
}

console.log("Os números menores que 50 foram: " + menor50);
console.log("Os números maiores que 50 foram " + maior50);
