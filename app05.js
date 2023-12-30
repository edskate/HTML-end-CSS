// Exemplo de conversão de String para número em JavaScript

// String contendo um número
var numeroString = "123.45";

// Usando parseFloat para converter a string para um número de ponto flutuante
var numero = parseFloat(numeroString);

// Verificando o resultado
if (!isNaN(numero)) {
  console.log("String convertida para número:", numero);
} else {
  console.log("Não é possível converter a string para um número.");
}
