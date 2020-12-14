// Teste com Mocha
const assert = require("assert"); // assert é uma função nativa do node.js
const Math = require("../src/math.js"); // importa a classe que iremos testar

const expect = require("chai").expect; // importa a função expect da biblioteca chai

const sinon = require("sinon"); // importa os métodos da biblioteca de mock sinon

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

    it("Classe com funções matemáticas", function() {
        // exepmlos com chai
        expect(math).to.have.property("descricao").equals("Classe com funções matemáticas");
        expect(math).to.have.property("descricao").is.a("string");
    });

    // it(string, fn) => descreve o teste e executa
    it("Somar dois números", function(){
        try {
            // assert.strictEqual(math.soma(a, b), a + b);
            expect(math.soma(a, b)).to.equal(a + b);
            // expect(valor).to.equal(valor que precisa ser igual) // biblioteca chai
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
    it.only("Retorna a potência", function() {
        const res = {
            print: sinon.spy() // sinon.spy => consegue verificar se uma função foi chamada internamente
        }

        // é possível aplicar spy em funções já existentes e mesmo assim verificar se ela foi chamada
        const res2 = {
            print: function() {
                console.log("Função chamada");
            }
        }
        // chama spy(obj, "método") pela veriável global sinon, passando o objeto a espionar, e o nome do método sendo espionado
        sinon.spy(res2, "print");
        
        // o comportamento da função pode ser substituído com sinon.stub
        const res3 = {
            print: function() {
                console.log("Função chamada");
            }
        }
        // agora o console.log não eserá executado, pois stub substituiu o método
        sinon.stub(res3, "print").returns("alô silver"); // também podemos definir um retorno arbritário 

        math.potenciacao(a, b, res);
        // verifica se o primeiro argumento da primeira chamada é igual a potência de a na base b
        expect(res.print.args[0][0]).to.equal(a ** b);

        a = 2;
        b = 3;
        math.potenciacao(a, b, res2);        

        // verifica se o primeiro argumento da primeira chamada é igual a potência de a na base b
        // a função deverá ser executada com o console.log()
        expect(res2.print.args[0][0]).to.equal(a ** b);

        // o console.log("Função chamada") só será executado em re2, o stub substituiu print no res3
        math.potenciacao(a, b, res3);
        expect(res3.print.args[0][0]).to.equals(a ** b);
    });

    // it.only() executa somente este teste
    // it.only("Dividir um número", function() {
    it("Dividir um número", function() {
        assert.strictEqual(math.dividir(a, b), a / b);
    });
})