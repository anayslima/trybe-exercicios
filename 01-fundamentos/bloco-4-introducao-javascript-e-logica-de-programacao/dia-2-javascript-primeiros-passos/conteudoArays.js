// Para saber a quantidade de itens dentro de um array utilize (.length) ele mostra o "comprimento" do seu array.

let tasksList= ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

//-------------------------------------------------------------------------------------------------------------

// É possível acessar os arrays pelo seu índice.

let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList1[0];
console.log(searchForFirstTask);
// Tomar café

//-------------------------------------------------------------------------------------------------------------

// A primeira posição do array é representada pelo número 0. Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o (.length e subtrair 1 )

let searchForLastTask = tasksList1[tasksList1.length - 1];
console.log(searchForLastTask);


//-------------------------------------------------------------------------------------------------------------

// Para adicionar uma nova atividade ao final da lista de arrays utilize (.push ):

let tasksList2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList2.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no final da lista 
console.log(tasksList2);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//-------------------------------------------------------------------------------------------------------------

// Se precisarmos adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado:

tasksList2.unshift('Estudar muito!');
console.log(tasksList2);

//-------------------------------------------------------------------------------------------------------------

// "Ok. Agora como faço para remover?". Simples, veja este exemplo: 

let tasksList3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList3.pop();  // O método .pop() nos permite remover o último item do array. 
console.log(tasksList3);

// Resultado : [ 'Tomar café', 'Reunião' ]

//-------------------------------------------------------------------------------------------------------------

// Se precisarmos Remover o primeiro item da lista, podemos usar o .shift(). Faça em seu console e veja o resultado.

tasksList3.shift();
console.log(tasksList3);

//-------------------------------------------------------------------------------------------------------------

//Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array. Veja o exemplo:

let tasksList4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList4.indexOf('Reunião');
console.log(indexOfTask);

//Resultado 1

//-------------------------------------------------------------------------------------------------------------

//Essas são algumas das possibilidades mais utilizadas para manipular arrays. Caso tenha dúvidas, lembre-se sempre de consultar a documentação --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

//Para fixar faça os próximos exercícios:

//-------------------------------------------------------------------------------------------------------------

//Ex - 1 Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

//-------------------------------------------------------------------------------------------------------------

// Ex - 2 Procure o índice do valor "Portfólio" do array menu:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

//-------------------------------------------------------------------------------------------------------------

// Ex - 3 Adicione o valor "Contato" no final do array menu:

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');

console.log(menu3);









