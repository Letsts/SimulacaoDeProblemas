let inputM1 = document.querySelector("#m1");
let inputM2 = document.querySelector("#m2");
const C = 1.00;
let inputT1= document.querySelector("#t1");
let inputT2 = document.querySelector("#t2");

let result = document.querySelector("#resp");

let botaoEnviar = document.querySelector("#submeter");
let stringResult; 
inputM1.value = inputM1.value * 1000;
inputM1.value = inputM2.value * 1000;

botaoEnviar.addEventListener("click", function() {
    if(inputT1.value < 0 || inputT1.value > 100){
        window.alert("Temperatura invalida! Necessario ser entre 0°C e 100°C.");
        inputT1.value = null;
        stringResult.value = null;
    }

    if(inputT2.value < 0 || inputT2.value > 100){
        window.alert("Temperatura invalida! Necessario ser entre 0°C e 100°C.");
        inputT2.value = null;
        stringResult.value = null;
    }

    stringResult = (C * inputM1.value * inputT1.value + C * inputM2.value * inputT2.value) / (C * inputM1.value + C * inputM2.value);
    stringResult += " °C";
    result.value = stringResult;
});