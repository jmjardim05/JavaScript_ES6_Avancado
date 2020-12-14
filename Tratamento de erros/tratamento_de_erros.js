// Erro é uma classe podemos criar um erro customizado herdando a classe Error
class MyError extends Error {
    constructor({ // método construtor usado com a palavra new. ex; new MyError({ msg, data });
        message,
        data
    }) {
        super(message); // super executa o método na classe pai, neste caso chama o constutor da classe Error
        this.data = data;
    }
}

try {
    try {
        debugger; // cria um breakpoint via código 
        const name = "João Marcos";
        throw new MyError({
            message: "Erro aqui!!",
            data: {
                codigo: 1,
                tipo: "Teste"
            }
        });
    } catch (err) {
        console.log(err, err.data.codigo, err.data.tipo);
    }
} finally {
    console.log("continua...");
}