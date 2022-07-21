// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 

const a = 20;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



//=============================================================================================================

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.



const num1 = 60;
const num2 = 30;

if(num1 > num2){
    console.log(num1 + " é maior que " + num2);
}else{
    console.log(num2 + " é maior que " + num1);
}

//=============================================================================================================

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num3 = 2260;
const num4 = 1040;
const num5 = 98;

if(num3 > num4 && num3 > num5){
    console.log("O maior número é " + num3);
}
else if(num4 > num3 && num4 > num5){
    console.log("O maior número é " + num4);
}else{
    console.log("O maior número é " + num5)
}


