const buttonlist = document.getElementsByClassName('numero');
const buttonlistO= document.getElementsByClassName('operador')


//obtener valor 1 y valor 2
var val2
var val1
var operador


function addlistener(element){
  element.addEventListener("click", function (e){
   
    if (val1!=undefined){
     val2 =Number(e.target.innerHTML);
      console.log(val2);
    }
    else { 
    val1 =Number(e.target.innerHTML);
      console.log(val1);
    };
  } );
  }
Array.from(buttonlist).forEach(addlistener)

// obtener operador
function addlistenerO(elementO){
  elementO.addEventListener("click", function (eO){
    operador=eO.target.innerHTML
    console.log(operador);
  })
}


Array.from(buttonlistO).forEach(addlistenerO);
document.getElementById('igual').addEventListener("click", function (e1){console.log(calculadora(val1,val2,operador))});
