/* para passar um valor default para um argumento da função basta usar o operador de atribuição e o valor padrão */

function soma(a, b = 0) 
{
    return a + b;
}

console.log(soma(15)); // o segundo argumento omitdo irá assumir o valor 0

// com arrow function a expressão com valor default precisa estar dentro do parênteses
var log = (texto = "informar um texto") => console.log(texto);
log(); // printa "informar um texto"
log("novo texto"); // printa "novo texto"

// é possível que o valor default seja o valor de outro parâmetro da função
function multiplicar(a = 2, b = a)
{
    return a * b;
}

console.log(multiplicar(10)); // retorna 100, pois omitindo 'b' assume o valor passado para 'a'
console.log(multiplicar(undefined, 10)); // retorna 20, pois o valor default de 'a' é 2
console.log(multiplicar()); // retorna 4, pois 'b' vai assumir o valor padrão de 'a'
console.log(multiplicar(7, 8)); // retorna 56, produto de 7 x 8

// se referenciar outro parâmetro como valor default, este deve vir antes na lista de parâmetros
/*
 * function dividir(a = b, b) <- 'a' não pode ter como valor padrão 'b' pois 'b' vem depois na lista
 */

// lazy evaluation => é possível passar uma função como valor default, ela será executada somente 
// quando o argumento for omtido
function pegaUmNumeroQualquer()
{
    console.log("gerando numero aleatorio...");
    return Math.trunc(Math.random() * 10); // gera números de 0 a 10
}

function subtrair(a, b = pegaUmNumeroQualquer())
{
    return a - b;
}

console.log(subtrair(10));
console.log(subtrair(10));
console.log(subtrair(10, 2)); // log de geração de número aleatório não deve aparecer
console.log(subtrair(10));