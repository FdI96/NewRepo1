var auxiliar;
var mostrar;
function calculadora(val1,val2,operador) {
	var result
	
		if (operador==undefined) {
      console.log(val1,auxiliar,val2);
      switch (val2){
        case '+':
          result=(val1+auxiliar);
          break;
        case '-':
          result=(val1-auxiliar);
          break;
        case '*':
          result=(val1*auxiliar);
          break;
        case '/':
          result=(val1/auxiliar);
          break;
      }
    } else {
    console.log(val1,val2,operador)
    switch (operador){
		case '+':
		result=(val1+val2)
		break;
		case '-':
		result=(val1-val2)
		break;
		case '*':
		result=(val1*val2)
		break;
		case '/':
		result=(val1/val2)
		break;
	}
    }
	auxiliar=result;
  return result;
  Array.from(buttonlistO).forEach(addlistenerO);
document.getElementById('igual').addEventListener("click", function (e1){console.log(mostrar)});

}

console.log('resultado: ',mostrar);
