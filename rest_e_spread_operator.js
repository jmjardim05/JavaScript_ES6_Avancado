// rest operator (...) usado para definir um número indefindo de argumentos para uma função

function soma(...args)
{
    // args será um array, então podemos usar os métodos de array
    return args.reduce((sum, value) => sum += value, 0);
}

console.log(soma(1, 2, 3, 4, 5));

// antigamente, poderíamos usar a plavara-chave arguments
function gerarArray()
{
    let arr = [];
    // arguments é um objeto, enão não temos as facilidades de um array
    // podemos apenas iterar utilizando length
    for (let i = 0; i < arguments.length; i++)
    {
        arr[i] = arguments[i];
    }
    return arr;
}

console.log(gerarArray(1, 2, 3, 4, 5));

// arguments não pode ser usado em arrow functions
// const soma => () => { console.log(arguments); } // arguments é undefined

// em arrow functions, usar o rest operator
const multiplicarTodosPor = (fator, ...valores) =>
{
    return valores.map(produto => produto * fator);
}

console.log(multiplicarTodosPor(5, 1, 2, 3, 4, 5, 6));


// spread operator (...) => quebra um objeto iterável (string, array, Iterable) em parâmetros e pode ser usado para criar objetos literais
function triplicarValores(...valores)
{
    return multiplicarTodosPor(3, ...valores); // o spread transforma a array valores em parâmetros
}
console.log(triplicarValores(3, 6, 9));

// funciona com strings
const strAlfa = 'acbdefghijklmnopqrstuvwxyz';
const separaAlfabeto = (...letras) => console.log(letras); // rest operator em letras, retrona array com as letras
separaAlfabeto(...strAlfa); // spread operator na string, passa cada caractere como parâmetro

// usando o spread com arrays
const arr1 = ["João", "Marcos", "Jardim", 34];
function logNome(primeiroNome, segundoNome) // função declarada com dois argumentos
{
    console.log(primeiroNome, segundoNome);
}
logNome(...arr1); // spread na array passa os dois primeiros elementos para os parametros primeiroNome e segundoNome

// ainda com arrays, podemos utilizar o spread para concatenar arrays
const pessoa = [...arr1, 5, 6, 1986]; // mesmo que const pessoa = arr1.concat([5, 6, 1986]);
console.log(...pessoa); // João Marcos Jardim 34 5 6 1986

// mas com spread a concatenação pode acontecer no meio da array de forma mais fácil
const arr2 = [3, 4, 5];
const arr3 = [1, 2, ...arr2, 6, 7]; // const arr3 = [1, 2].concat(arr2).concat([6, 7]);
console.log(arr3);

// spread ajuda a criar novos objetos literais a partir de outros
const carro = {
    ano: 2020,
    marca: "Fiat",
    modelo: "Siena"
}

const carroComCor = {
    ...carro, // spread copia os atributos do objeto
    cor: "Prata"
}

console.log(carroComCor);

// mas não podemos usar para popular arrays
// const carro = {
//    ano: 2020,
//    marca: "Fiat",
//    modelo: "Siena"
// }
// let arr = [..carro, "Prata"]; // erro pois carro não é iterável
//
// assim como não pode ser usado como parâmetro de função


// ao criar clones do obj usando spread, atentar-se que o clone não será criado para propriedades que sejam outro objeto
// ex:
const obj1 = {
    prop1: "abc",
    propObj: { prop1: 123 }
};

const obj2 = { ...obj1 };
obj2.propObj.prop1 = 456;

console.log(obj1); // a propiedade propObj foi alterada qunado alteramos o obj2

// precisa clonar o objeto 'nested' também
const obj3 = {
    ...obj1,
    propObj: { ...obj1.propObj } // criamos um clone do propObj também
};

obj3.propObj.prop1 = 789;

console.log(obj1); // a propiedade propObj foi clonada, logo não há alteração em obj1
console.log("obj3", obj3);