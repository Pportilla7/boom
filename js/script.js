const boton_reinicio=document.getElementById('restart');
const div_result=document.getElementById('result');
const div_countdown=document.getElementById('countdown');
let entrada;
const tiempo=5;
cuentaRegresiva(tiempo);



function cuentaRegresiva(tiempo){
    let tiempo_actual=tiempo;
    let parrafo=document.createElement('p');
    div_countdown.appendChild(parrafo);
    parrafo.textContent=`Te quedan ${tiempo_actual} segundo`;

    let intervalo = setInterval(() => {
        tiempo_actual--;
        parrafo.textContent = `Te quedan ${tiempo_actual} segundos`;

        // Cuando el tiempo llegue a cero, limpiar el intervalo y resolver la promesa
        if (tiempo_actual === 0) {
            clearInterval(intervalo);
            resolverPromesa();
        }
    }, 1000);
}

function resolverPromesa(){

    const entradaPromise= new Promise((resolve)=>{
        entrada=document.getElementById('userInput').value;
        resolve(entrada);
    })
    
    entradaPromise.then((entrada)=>{
        let num_alet=Math.floor(Math.random() * 3) + 1;
        let parrafo_numero=document.createElement('p');
        let parrafo_resultado=document.createElement('p');
        parrafo_numero.textContent=`Los numero son ${num_alet} y ${entrada}`;

        if(num_alet==entrada){
            parrafo_resultado.classList.add('green');
            parrafo_resultado.textContent='Enhorabuena has salvado al planeta';
            div_result.appendChild(parrafo_resultado);
            parrafo_resultado.insertAdjacentElement('afterend',parrafo_numero);
        }
        else{
            parrafo_resultado.classList.add('red');
            parrafo_resultado.textContent='Lo siento, no has salvado al planeta';
            div_result.appendChild(parrafo_resultado);
            parrafo_resultado.insertAdjacentElement('afterend',parrafo_numero);
        }
        
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

boton_reinicio.addEventListener('click', () => {
    // Limpiar resultados y reiniciar cuenta regresiva
    div_result.innerHTML = '';
    div_countdown.innerHTML = '';
    cuentaRegresiva(tiempo);
});