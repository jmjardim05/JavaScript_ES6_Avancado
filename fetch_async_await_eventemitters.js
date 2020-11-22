// fecth(url) => retorna uma promise de execução de uma requisição HTTP
// obs: não funciona no node (executar via IIS Express)
fetch("arrow_functions_ERRO.js")
.then(responseStream => {
    if (responseStream.status === 200) {    
        return responseStream.text();
    }
    else {
        throw `Erro HTTP ${responseStream.status} ${responseStream.statusText}`;
    }
})
.then(data => console.log(data))
.catch(reason => console.log("Erro:", reason)); // só pega erro de rede e não de conteúdo

// fetch pode receber um parâmetro com as configurações da requisição
let headers = new Headers();
//let token = prompt("informar um token valido");
//headers.append("Authorization", `Token token=${token}`);

let config = {
    method: "GET",
    mode: "no-cors",
    headers
};

fetch("https://viacep.com.br/ws/01001000/json/", config)
.then(responseStream => {
    if (responseStream.status === 200) {    
        return responseStream.json();
    }
    else {
        throw `Erro HTTP ${responseStream.status} ${responseStream.statusText}`;
    }
})
.then(data => console.log(data))
.catch(reason => console.log("Erro:", reason)); // só pega erro de rede e não de conteúdo

// async/await => a partir do ES7 é uma forma de criar promises e controlar o fluxo de uma maneira mais simplificada

const somarAsync = async (a, b) => a + b;
console.log(somarAsync(4, 4));

const somas = async () => {
    let soma1 = await somarAsync(5, 5);
    console.log(soma1);
    let soma2 = await somarAsync(10, 10);
    return soma2;
}

somas().then(data => console.log(data));
// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

// EventEmitter => cria um estrutura de eventos que são chamados de forma assíncrona
// obs: só funciona no Node.js

const EventEmitter = require("events"); // importar o módulo 'events'

const emitter = new EventEmitter();
emitter.on("Logged", data => console.log(data));
emitter.emit("Logged", { user: "João Marcos" });
emitter.emit("Logged", { user: "Pedro Henrique" });

// a classe pode ser extendida
class Users extends EventEmitter {
    userLogged(data) {
        this.emit("Logged", data);
    }
}

const user = new Users();
user.on("Logged", data => console.log(data));
//user.once("Logged", data => console.log(data)); // once executa o evento apenas uma vez
user.userLogged({ user: "Luiz Paulo" });
user.userLogged({ user: "Sophie" });