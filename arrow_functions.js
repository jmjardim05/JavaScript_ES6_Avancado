// arrow functions => funções anônimas, só pode atribuir a uma variável ou passar de parâmetro para uma outra função

var soma = (a, b) => a + b;
console.log(soma(10, 5));

// se houver apenas um parametro, pode omitir os parenteses
var dobrar = a => a * 2;
console.log(dobrar(3));

// se houver mais de uma operação na função, deve colocar entre chaves e usar return
var somatorio = (inicio, fim) => {
    if (fim < inicio)
    {
        return -1;
    }

    let soma = 0;
    for (let i = inicio; i <= fim; i++)
    {
        soma += i;
    }

    return soma;
}
console.log(somatorio(1, 10));

// para retornar um objeto literal é preciso colocá-lo entre parênteses
var novaPessoa = (nome, idade) => ({
    nome,
    idade
});
console.log(novaPessoa("João Marcos", 34));

// NOTA: os parênteses de parâmetro também são obrigatórios ao usar destruction e rest operators
// também é orbigatório se houver valor default para o parâmetro

// NOTA: arrow functions não podem ser funções construtoras
/*
 * var Carro = () => { this.modelo = "Sentra"; }
 * console.log(ner Carro()); // erro pois Carro não é construtor
 */

// NOTA: arrow functions não aplica o conceito de hoisting
/*
 * soma(1, 2); // erro porque soma não é função, o hoisting não é aplicado
 * var soma = (a, b) => a + b;
 */

 // contetxo de invocação das funções
 // usado com a palavra chave this e indica qual objeto chamou a função

const obj = {
    log: function (text) {
        console.log(text);
    },
    logAfter1sec: function (text) {
        setTimeout(function () {
            this.log(text);
        }, 1000);
    },
    logObjAfter1sec: function (text) {
        setTimeout(function () {
            this.log(text);
        }.bind(this), 1000); // bind() método da função que nos permite definir qual o contexto da chamada da função
    },
    logAfter1seg_AF: function (text) {
        setTimeout(() => this.log(text), 1000); // arrow function usa contexto léxico, ou seja, o contexto pertence ao bloco que a função é inserida
    }
}

obj.log("teste do log");
// obj.logAfter1sec("log depois de 1 seg"); // erro: this referencia um contexto global
obj.logObjAfter1sec("log depois de 1 seg"); // com o bind() definimos que obj é o contexto e executa normalmente
obj.logAfter1seg_AF("log com arrow function "); // com arrow function sabemos que o this é o que esperamos
