const txtop1 = document.getElementById("op1")
const txtoperador = document.getElementById("operador")
const txtop2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pREsultado =document.getElementById("resultado")


btnCalcular.addEventListener('click' , calcular)


function calcular(){
    const operador = txtoperador.value
    const op1 = parseFloat (txtop1.value)
    const op2 = parseFloat (txtop2.value)
    if(operador == "+" || operador == "-" || operador =="*" || operador == "/"
    && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operador){
            case "+":
                resultado = op1 + op2
                break;
                case "-":
                    resultado = op1 + op2
                    break;
                    case "*":
                        resultado = op1 + op2
                        break;
                        case "/":
                            resultado = op1 + op2
                            break;                
        }
        pREsultado.style = "color:black"
        pREsultado.innerText  = "=" + resultado
}else{
    pREsultado.style = "color:red"
    pREsultado.innerText = "calculo imposible"
}
}
