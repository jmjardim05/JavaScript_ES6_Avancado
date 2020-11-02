// ao declarar um objeto literal

let nome = "João";
let objPessoa = {
    nome // é possível omitir a atribuição se o nome da variável é o mesmo nome da propriedade
}

console.log(objPessoa);

function soma(a, b)
{
    return a + b;
}

let objCalc = {
    soma // também é possível omitir atribuição de método se a função tem o mesmo nome do método
}

console.log(objCalc.soma(1, 1));

let nomeProp = "ano";
let objCarro = {
    modelo: "Sentra",
    [nomeProp]: 2008 // é possível setar um nome de propriedade vindo de váriavel, colocar entre colchetes
}
console.log(objCarro);