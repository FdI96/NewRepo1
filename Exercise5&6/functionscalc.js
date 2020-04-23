const buttonlist = document.getElementsByClassName('numero');
const buttonlistO= document.getElementsByClassName('operador')



var val2 = ''
var num2

var val1 = ''
var num1

var operador

var recolectorNum
var mostrarresultado= '0'
var band= false;
var buttonOpOn= false;

var borrar
const concha= 'la concha de tu madre'


console.log(val1)
console.log(num1)
console.log(val2)
console.log(num2)

// obtengo valores 1 y 2
Array.from(buttonlist).forEach(addlistener)
function addlistener(element){
  element.addEventListener("click", function (e){
   
    if (buttonOpOn==true){
     val2 =val2+(e.target.innerHTML);
     
     mostrarresultado.innerHTML=recolectorNum + val2 
     num2=Number(val2) 
     console.log(val2);
     console.log(num2)
    }
    else { 
   
      
      val1 =val1+(e.target.innerHTML);
      mostrarresultado.innerHTML=val1
      num1=Number(val1);
      console.log(val1);
      console.log(num1);
    };
  } );
  }
 


// obtener operador
function addlistenerO(elementO){
  elementO.addEventListener("click", function (eO){
    buttonOpOn=true;
    
    console.log(band)
    console.log(buttonOpOn)
    operador=eO.target.innerHTML
    mostrarresultado.innerHTML=mostrarresultado.innerHTML + '' + operador + '';
    recolectorNum=mostrarresultado.innerHTML;
    console.log(operador);
  })
}

// calcular y mostrar resultado
Array.from(buttonlistO).forEach(addlistenerO);
mostrarresultado=document.getElementById("mostrarresultado")
document.getElementById('igual').addEventListener("click", function (e1){
  console.log(calculadora(val1,val2,operador))
  
  mostrarresultado.innerHTML=String(calculadora(num1,num2,operador) + ' la concha de tu madre');
  
  console.log(mostrarresultado)
  buttonOpOn=false;
  val1='';
  val2='';
  operador=undefined;
});



//borrar todo
document.getElementById('borrar').addEventListener("click", function (b){
  mostrarresultado.innerHTML= '0 la concha de tu madre';
  val1=''
  val2=''
  num1=undefined
  num2=undefined
  buttonOpOn=false
}

)