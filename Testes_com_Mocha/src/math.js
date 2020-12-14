class Math {
    descricao = "Classe com funções matemáticas";
    soma = (a, b) => a + b;
    // teste com método assíncrono
    subtrair = (a, b, callback) => { 
        setTimeout(() => callback(a - b), 2500);
    };
    dividir = (a, b) => a / b;
    multiplicar = (a, b) => a * b;
    potenciacao = (a, b, res) => {
        res.print(a ** b);
    }
}

module.exports = Math;