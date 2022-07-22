// Incremento (++) não é recomendado, pois o uso desse operador pode gerar confusão e causar bugs inesperados.
// Recomenda-se o uso exclusivo de += 1, e é essa a regra que iremos adotar neste conteúdo daqui pra frente!

// ============================================================================================================

// Suponha que temos uma lista com marcas de carros:

let cars = ['Saab', 'Volvo', 'BMW'];

//Anteriormente para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria:

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// ============================================================================================================

//Mas, agora que conhecemos o for, podemos melhorar o código para algo como:

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
  }

// ============================================================================================================

// Ex - 1 Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}