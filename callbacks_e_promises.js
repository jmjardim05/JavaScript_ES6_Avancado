// Promises => similar ao Task<> do C#, configurar uma função para ser executada de forma assíncrona
// ao criar uma Promise ele tem o status "pending" ou seja aguardando a execução

const myPromise = new Promise((resolve, reject) => 
{
    setTimeout(function () {
       resolve("Promise executada"); // recebe o valor que indica que a promise foi exxecutada
    }, 1000);
});

// then() recebe um callback para que possa realizar algo com o valor passado para o resolve
//console.log(myPromise);
//myPromise.then(data => console.log(data, myPromise));


const somarPromise = (a, b) => new Promise((resolve, reject) => 
{    
    if (isNaN(a) || isNaN(b))
    {
        throw "Existem parâmetros que não são números";
    } 
    setTimeout(function () {
        resolve(a + b);
    }, 1000);
});

// estados da Promise
// pending => aguardando a execução retorna Promise { <pending> }
// fullfiled => finalizada retorna Promise { Value } => Value passado para o resolve
// rejected => erro na execução retorna Promise { <rejected> Reason } => Reason é a msg de erro informada no throw

const promiseSoma = somarPromise(5, 2);
console.log("promiseSoma", promiseSoma);
promiseSoma.then(data => console.log(data, promiseSoma)).catch(reason => console.log(reason));

//catch() usado depois do then(), recebe um callback com o motivo do erro como parâmetro
const promiseSoma2 = somarPromise('a', 2);
promiseSoma2.then(data => console.log(data)).catch(reason => console.log(reason));
// no exemplo acima a exceção executa primeiro pois o tratamento de erro ocorre antes do resolve

// o then() pode ser usado para executar as promises em sequência
// nota: se a promise anterior não retornar com resolve, não é garantia que tenha terminado de executar
// ver o segundo link no final deste documento
const testePromise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        const somar_1 = somarPromise(10, 1);
        const somar_2 = somarPromise(2, 2);
        somar_1.then(data => { 
            console.log(data);
            return somar_2; 
        })
        .then(data => { 
                console.log(data);
                return myPromise;
        })
        .then(data => console.log(data))
        .then(() => resolve("Fim da execução"))
        .catch(reason => reject(reason));
    }, 1000);     
});

const testePromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        const somar_1 = () => somarPromise(10, 1);
        const somar_2 = () => somarPromise(2, 'a');
        somar_1().then(data => { 
            console.log(data);
            return somar_2(); 
        })
        .then(data => { 
                console.log(data);
                return myPromise;
        })
        .then(data => console.log(data))
        .then(() => resolve("Fim da execução"))
        .catch(reason => reject(reason)); //catch vai tratar a exceção em qualquer uma das etapas
    }, 1000); 
});

testePromise1().then(data => testePromise2()).then(data => data).catch(reason => console.log(reason));

// Promise.all([promise1, ...promiseN]) => executa as promises em paralelo e retorna uma promise que só é resolvida 
// quando todas as promises forem resolvidas, ou rejeitada se uma das promises for rejeitada

const allPromises = Promise.all([myPromise, somarPromise(5, 2), somarPromise(2, "a")])
                           .then(data => console.log("allPromises result:", data)) 
                           .catch(reason => console.log("Uma das promises falhou com o erro: ", reason));

const allPromises2 = Promise.all([myPromise, testePromise1()])
                            .then(result => console.log("allPromises2 result:", result));

// Promise.race([promise1, ...promiseN]) => executa as promises em paralelo e retorna uma promise resolvida 
// quando a primeira promise for resolvida, ou rejeitada se uma das promises for rejeitada

const racePromises = Promise.race([myPromise, somarPromise(1,1), somarPromise(2, 2)])
                            .then(result => console.log("racePromises result:", result));

const racePromises2 = Promise.race([myPromise, somarPromise(1,'c'), somarPromise(2, 2)])
                             .then(result => console.log("racePromises2 result:", result))
                             .catch(reason => console.log("Uma das promises falhou com o erro: ", reason));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises
// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern
