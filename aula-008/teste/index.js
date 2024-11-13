// Forme éssa frase com os resultados do seu código e utilizando seus dados:
//Luiz Otavio Miranda tem 30 anos, pesas 84kg, tem 1,80 de altura e seu IMC é de 25,925925925925924, Luiz Otavio nasceu em 1989.
//resolução da aula:
const nome = 'Lucas';
const sobrenome = 'Ruan';
const idade = 27
const peso = 75;
const alturaEmM = 1.68;
let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento; //ano atual - idade

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = 2024-idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log('tem', alturaEmM, 'de altura e seu Indice de massa corporal é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento,'.');


//templete strings (aqui utilizaremos as crazis para realizar o codigo).
/*
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome}  nasceu em ${anoNascimemto}`);
*/

//também tinhamos a opçaõ de realizar o Código utilizando o sinal de + para juntar as palavras do código.
/*
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' Kg ');
console.log('tem ' + alturaEmM + ' de altura e sei IMC é de ' + indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento);
*/