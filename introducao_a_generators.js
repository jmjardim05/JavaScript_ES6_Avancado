// Symbol => define um identificador único

var id = Symbol('id'); // 'id' é apenas um identificador para facilitar o debug
var id2 = Symbol('id');
console.log(id); //Symbol(id)
console.log(id === id2); //false, pois cada Symbol é único

// Well known symbols
// Symbol.iterator => adiciona a capacidade de iteração ( já existe em arrays e strings, onde podemos usar o for of 
// para iterar entre os elementos )
// existem outros como Symbol.split, Symbol.toStringTag...
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// podemos usar Symbol.iterator para tornar um objeto iterável
// o exemplo abaixo NÃO é a forma correta de iterar pelas chaves e valores de um objeto
// https://2ality.com/2015/02/es6-iteration.html
// seção 2.8 Plain objects are not iterable
const obj = {
    nome: "João",
    meio: "Marcos",
    sobrenome: "Jardim",
    [Symbol.iterator]() {
        let objEntries = Object.entries(this);
        let i = 0;
        return { // retorna o objeto iterador            
            next: () => {                
                i++;
                return {                    
                    chave: (i <= objEntries.length) ? objEntries[i - 1][0] : undefined,
                    valor: (i <= objEntries.length) ? objEntries[i - 1][1] : undefined,
                    done: i > objEntries.length
                };
            }
        };
    }
};
for (let keyValuePair of obj)
{
    console.log(keyValuePair); // retorna undefined, somente acessando o iterador diretamente e chamando next()
}

// forma mais segura para realizar seria usando destructuring
for (let [ chave, valor ] of Object.entries(obj))
{
    console.log({ chave, valor });
}

// Generators => incluindo um * na frente da palavra function retorna um Generator
// um Generator é uma função iterável através da palavra-chave yield
// similar ao yield return do C# onde a função precisa retornar um IEnumerable<>

function* somatorio(stopAt) // a função agrora retorna um generator
{
    let result = 0;
    for (let i = 0; i <= stopAt; i++) // soma de 0 a 6 (7 passos)
    {
        console.log(result += i);
        yield;
    }
}

let soma = somatorio(6);
console.log(soma.next());
console.log(soma.next());
console.log(soma.next());
console.log(soma.next());
console.log(soma.next());
console.log(soma.next());
console.log(soma.next());
console.log(soma.next()); // { value: undefined, done: true }

// generators podem ser usados para criar iteradores em objetos
const objPessoa = {
    nome: "João",
    meio: "Marcos",
    sobrenome: "Jardim",
    *[Symbol.iterator]() { // precisa colocar o * antes do symbol
        for (let [ chave, valor ] of Object.entries(this))
        {
            yield {                    
                chave,
                valor
            };
        }
    }
};
for (let keyValuePair of objPessoa)
{
    console.log(keyValuePair);
}