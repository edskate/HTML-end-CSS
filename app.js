// Função para converter uma string em um número inteiro
function converterParaInteiro(numeroString) {
    // Usando parseInt para converter a string para um número inteiro
    var numeroInteiro = parseInt(numeroString, 10);
  
    // Verificando se a conversão foi bem-sucedida
    if (!isNaN(numeroInteiro)) {
      return numeroInteiro;
    } else {
      return "Não é um número válido";
    }
  }
  
  // Função para converter uma string em um número de ponto flutuante
  function converterParaFloat(numeroString) {
    // Usando parseFloat para converter a string para um número de ponto flutuante
    var numeroFloat = parseFloat(numeroString);
  
    // Verificando se a conversão foi bem-sucedida
    if (!isNaN(numeroFloat)) {
      return numeroFloat;
    } else {
      return "Não é um número válido";
    }
  }
  
  // Exemplos de uso
  var numeroString1 = "123";
  var numeroString2 = "45.67";
  var numeroString3 = "ABC"; // Não é um número válido
  
  var resultadoInteiro = converterParaInteiro(numeroString1);
  var resultadoFloat = converterParaFloat(numeroString2);
  var resultadoInvalido = converterParaInteiro(numeroString3);
  
  console.log("Número Inteiro:", resultadoInteiro);
  console.log("Número de Ponto Flutuante:", resultadoFloat);
  console.log("Resultado Inválido:", resultadoInvalido);
  