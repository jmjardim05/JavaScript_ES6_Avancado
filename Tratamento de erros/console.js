console.log("Retorna um texto comum");
console.warn("Retorna com fundo amarelo e ícone de atenção");
console.error("Retorna com fundo vermelho e ícone de erro");
console.trace(); // traz informações de onde foi executado (qual linha foi executada)

console.log("\n");
console.group("Grupo de Informaçãoes 1");
console.log("Informação dentro do grupo 1");
console.group("Grupo de Informaçãoes 2");
console.log("Informação dentro do grupo 2");
console.groupEnd("Grupo de Informaçãoes 2"); // fim do grupo 2
console.log("----------");
console.groupEnd("Grupo de Informaçãoes 1"); // fim do grupo 1

console.time("Timer");
console.log("inicia o contador de tempo");
setTimeout(() => {
    console.log("finaliza o timer inciado com console.timer()");
    console.timeEnd("Timer");
}, 2000);

console.table([{ nome: "joão marcos", idade: "34" }], ["nome", "idade"]); // gera o log em forma de tabela

console.log("%c log com esitlos css", "color: blue; font-size: 30px"); // só funciona no console do navegador