let nome; //declarou a variavel mas não acrescentou nada a ela
nome = 'João'; //Inicializando a variável
console.log(nome);
nome = 'Lucas';
console.log(nome);
//não podemos criar variavei com palavras reservadas, exelplo: let if; (if  é uma palavra reservada da linguagem JS)

/* Variáveis precisam ter nomes significativos
let nomeCliente = 'joão';
*/

/* Não pode começar o nome de uma variável com um número
let 1nome;*/

/*As bariaveis não podem conter espaços ou traços
let nome-Cliente;
*/

/* para colocar nomes compostos podemos utilizar camelCase (a cada fim de uma pavra iniciar a proxima com uma letra maiuscula sem dar espaço entre elas.)
let nomeCompletoDoCliente = 'Luiz Otávio';
console.log(nomeCompletoDoCliente);
*/

/* essas variaveis são case-sensitive ou seja a letra maiscula e a minuscula vai ter diferença.

let nomeCliente = 'Luiz';
let nomecliente = 'Otávio';
console.log(nomeCliente, nomecliente);

*/

/* Não podemos redeclarar variáveis com let, então o programa sempre vai levar em consideração a ultrima alteração.

let nomeCliente = 'Luiz'
nomeCliente = 'Otávio'

console.log(nomeCliente)

*/

//  sempre que vor criar uma variavel não utilize var, utilize let.