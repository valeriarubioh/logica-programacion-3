let nums=[];
const numeroInput = document.getElementById("input_number");
function registrar(){
    const numero = parseInt(numeroInput.value);
    calcularFactorial(numero);
    mostrarTabla();
    numeroInput.value ='';
}

function calcularFactorial(numero){
    if(numero>0){
        let result=1;
        for(let i=numero; i>0; i--){
            result*=i;
        }
        nums.push({
            numero : numero,
            result: result,
        }); 
    }else{
        alert("Ingresa un número entero positivo")
    }
       
}

function mostrarTabla() {
    const tableBody = document.querySelector("#tabla tbody");
    let res = "";
    for (let i = 0; i < nums.length; i++) {
      res += `<tr>
        <td>${nums[i].numero}</td>
        <td>${nums[i].result}</td>
      </tr>`;
    }
    tableBody.innerHTML = res;
    console.log(nums);
}

numeroInput.addEventListener("keyup", function(event){

    if(event.key === 'Enter' && numeroInput.value !==''){
        registrar();
    }
})

function limpiarRegistro() {
    const tableBody = document.querySelector("#tabla tbody");
    tableBody.innerHTML = "";
    nums.splice(0);
    console.clear();
}