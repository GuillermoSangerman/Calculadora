const button1 = document.querySelector('#boton1')
const button2 = document.querySelector('#boton2')
const button3 = document.querySelector('#boton3')
const button4 = document.querySelector('#boton4')
const button5 = document.querySelector('#boton5')
const button6 = document.querySelector('#boton6')
const button7 = document.querySelector("#boton7")
const button8 = document.querySelector('#boton8')
const button9 = document.querySelector('#boton9')
const button0 = document.querySelector('#boton0')
const buttonac = document.querySelector('#botonac')
const buttonsuma = document.querySelector('#botonsuma')
const buttonresta = document.querySelector('#botonrest')
const buttonmulti = document.querySelector('#botonmulti')
const buttonborrar = document.querySelector('#botonx')
const buttondivi = document.querySelector('#botondivi')
const buttonigual = document.querySelector('#botonigual')
const punto = document.querySelector('#botonpunto')
const miInput = document.querySelector('#miInput')
const container = document.querySelector('.container')
const miParrafo = document.querySelector("#miBoton25")
buttonac.addEventListener('click', function(){
    miInput.value = ""
})
buttonborrar.addEventListener('click', function(){
    let value = miInput.value
    let borrarText = value.slice(0, value.length -1)
    miInput.value = borrarText
})
function operacion() {
    try {
        const operacion = miInput.value;
        const resultado = eval(operacion);
        miInput.value = resultado;        
    } catch{
        miInput.value = "Error de calculo"
    } 
}
function numeros(valor1 , valor2) {
    miInput.value = valor1 +  valor2 
}
punto.addEventListener('click', function(){
    numeros(`${miInput.value}`, '.')})
button0.addEventListener('click', function(){
    numeros(`${miInput.value}`, '0')})
button1.addEventListener('click', function(){
    numeros(`${miInput.value}`, '1')})
button2.addEventListener('click', function(){
    numeros(`${miInput.value}`, '2')})
button3.addEventListener('click', function(){
    numeros(`${miInput.value}`, '3')})
button4.addEventListener('click', function(){
    numeros(`${miInput.value}`, '4')})
button5.addEventListener('click', function(){
    numeros(`${miInput.value}`, '5')})
button6.addEventListener('click', function(){
    numeros(`${miInput.value}`, '6')})
button7.addEventListener('click', function(){
    numeros(`${miInput.value}`, '7')})
button8.addEventListener('click', function(){
    numeros(`${miInput.value}`, '8')})
button9.addEventListener('click', function(){
    numeros(`${miInput.value}`, '9')})
buttonsuma.addEventListener('click', function(){
    if (miInput.value === "") {
         miInput.value = ""
    }else{
        numeros(`${miInput.value}`, '+')
    }
    })
buttonresta.addEventListener('click', function(){
    if (miInput.value === "") {
        miInput.value = ""
   }else{
       numeros(`${miInput.value}`, '-')
   }
   })
buttonmulti.addEventListener('click', function(){
    if (miInput.value === "") {
        miInput.value = ""
   }else{
       numeros(`${miInput.value}`, '*')
   }
   })
buttondivi.addEventListener('click', function(){
    if (miInput.value === "") {
        miInput.value = ""
   }else{
       numeros(`${miInput.value}`, '/')
   }
   })
buttonigual.addEventListener('click', function(){
     if (miInput.value === "") {
    miInput.value = ""        
     }else{ 
        operacion()
     }
})

