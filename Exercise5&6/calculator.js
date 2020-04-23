var auxiliar;
var mostrar;

function calculadora(num1,num2,operador) {
	var result
	
		if (operador==undefined) {
      console.log(num1,auxiliar,num2);
      switch (num2){
        case '+':
          result=(num1+auxiliar);
          break;
        case '-':
          result=(num1-auxiliar);
          break;
        case '*':
          result=(num1*auxiliar);
          break;
        case '/':
          result=(num1/auxiliar);
          break;
      }
    } else {
    console.log(num1,num2,operador)
    switch (operador){
		case '+':
		result=(num1+num2)
		break;
		case '-':
		result=(num1-num2)
		break;
		case '*':
		result=(num1*num2)
		break;
		case '/':
		result=(num1/num2)
		break;
	}
    }
	auxiliar=result;
  return result;
  

}

console.log('resultado: ',mostrar);
