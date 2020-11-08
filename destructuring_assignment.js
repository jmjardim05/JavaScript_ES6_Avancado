// Destructuring assigment, forma de desestruturar um objeto e passar seus atributos ou elementos para variáveis

// com array - uma dimensão
var arr = ["João", "Marcos", "Jardim"];
var [nome, meio, sobrenome] = arr;
console.log(nome, meio, sobrenome, arr);

// com array - multipla dimensão
var arr2 = ["João", "Marcos", "Jardim", [5, 6, 1986]];
var [nome2, meio2, sobrenome2, [dia, mes, ano]] = arr2;
console.log(nome2, meio2, sobrenome2, dia, mes, ano, arr2);

// se atentar para array de multiplas dimensoes, a segunda dimensao precisa existir na atribuição
var arr3 = ["João", "Marcos", "Jardim"];
//var [nome3, meio3, sobrenome3, [dia2, mes2, ano2]] = arr3;
//console.log(nome3, meio3, sobrenome3, dia2, mes2, ano2, arr3); // erro undefined is not iterable, pois não existe 
// a segunda dimensão em arr3

// sem a segunda dimensao a variável é atrubída a undefinded
var [nome3, meio3, sobrenome3, dia2] = arr3;
console.log(nome3, meio3, sobrenome3, dia2, arr3); // João Marcos Jardim undefined [ 'João', 'Marcos', 'Jardim' ]

// com objeto
var obj = {
    nome: "João",
    meio: "Marcos",
    sobrenome: "Jardim"
};

var { nome, meio, sobrenome } = obj;
console.log(nome, meio, sobrenome, obj);

// o nome da variável tem que ser o mesmo nome da propriedade, ou retorna undefined
var { nome4, meio4, sobrenome4 } = obj;
console.log(nome4, meio4, sobrenome4, obj); //undefined undefined undefined { nome: 'João', meio: 'Marcos', sobrenome: 'Jardim' }

// para realizar  o que foi tentado acima
var { nome: nome4, meio: meio4, sobrenome: sobrenome4 } = obj;
console.log(nome4, meio4, sobrenome4, obj);

// com objetos aninhados (nested)
var obj2 = {
    nome: "João",
    meio: "Marcos",
    sobrenome: "Jardim",
    dataNasc: {
        dia: 5,
        mes: 6,
        ano: 1986
    }
};

var { nome, meio, sobrenome, dataNasc: { dia, mes, ano }} = obj2;
console.log(nome, meio, sobrenome, dia, mes, ano, obj2);
/* João Marcos Jardim 5 6 1986 {
  nome: 'João',
  meio: 'Marcos',
  sobrenome: 'Jardim',
  dataNasc: { dia: 5, mes: 6, ano: 1986 }
} */

// destructuring quando uma propriedade é array
var obj3 = {
    nome: "João",
    meio: "Marcos",
    sobrenome: "Jardim",
    dataNasc: [5, 6, 1986]
};
// na propriedade array já conseguimos definir diretamente um nome de variável diferente
var { nome: nome5, meio: meio5, sobrenome: sobrenome5, dataNasc: [dia2, mes2, ano2]} = obj3;
console.log(nome5, meio5, sobrenome5, dia2, mes2, ano2, obj3);

// destructuring com funções
function soma([a, b] = [1, 1]) // é possível também definir default arguments usando destructuring
{
    return a + b;
}
console.log(soma([2, 2])); // array será desestruturada para os argumentos 'a' e 'b'
console.log(soma()); // a default value [1, 1] é que será desestruturada para 'a' e 'b'

// passando objeto de parâmetro
function somatorio({ a, b, c } = { a: 0, b: 0, c: 0 })
{
    return a + b + c;
}
console.log(somatorio({ a: 2, b: 2, c: 4})); // objeto será desestruturado para os argumentos 'a', 'b' e 'c'
console.log(somatorio()); // a default value { a: 0, b: 0, c: 0 } é que será desestruturada para 'a', 'b' e 'c'