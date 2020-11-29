// Teste com Mocha
const assert = require("assert"); // assert é uma função nativa do node.js
const Math = require("../src/math.js"); // importa a classe que iremos testar

// describe(string, fn) => função do Mocha que descreve a funcionalidade e executa os testes
describe("Classe Math", function(){
    let math;
    // before(fn) executa antes de iniciar os testes
    before(function() {
        math = new Math(); // instanciamos a variável math assim não precisamos fazer isso em todos os testes
    });

    // beforeEach(fn) executa antes de cada teste
    let a = 0;
    let b = 0;
    beforeEach(function() {
        a = 5;
        b = 2;
    });

    // it(string, fn) => descreve o teste e executa
    it("Somar dois números", function(){
        try {
            assert.strictEqual(math.soma(a, b), a + b);
        }
        catch {
            throw new Error("O resultado falhou");
        }
    });

    // o tempo padrão de limite de espera do Mocha é de 2000ms
    // para alterar esse tempo no teste devemos chamar a função timeout => this.timeout()
    // porque estamos utilizando o this e queremos que ele pegue as funções do Mocha
    // não utilizar arrow functions nos parametros do describe() e it()
    it("Subtrair dois números", function(done){ 
        this.timeout(3000);

        try {
            a = 1500;
            b = 500;
            math.subtrair(a, b, value => {
                assert.strictEqual(value, a - b); // se rodar o teste somente com a linha do assert, vai passar o teste e depois dar o erro
                done(); // incluir o done na função do it() faz com que o teste espere a conclusão
            });
        } catch
        {
            throw new Error("O resultado falhou");
        }
    });

    //it.skip() pula a execução, deixa o teste como pendente
    it.skip("Multiplicar dois números", function() {
        assert.strictEqual(math.multiplicar(a, b), a * b);
    });

    // não passando função para o it() o teste fica pendente, desta forma
    // podemos ter um alerta de que testes faltam ser escritos e realizados
    it("Retorna a potência");

    // it.only() executa somente este teste
    // it.only("Dividir um número", function() {
    it("Dividir um número", function() {
        assert.strictEqual(math.dividir(a, b), a / b);
    });
})