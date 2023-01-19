/* diapo 18
let username = prompt(`ingresa tu nombre`);

if (username == `kevin`){
    alert(`fui yo`);
}
    else{
        alert(`yo no fui`)
    }
*/
/* diapo 19
let solicitud = prompt(`ingrese una letra`);

if ((solicitud == `y`) || (solicitud == `Y`)){
    alert(`correcto`);
}
    else{
        alert(`incorrecto`);
    }
*/
/* diapo 20
let number = parseFloat(prompt(`ingrese un numero del 1 al 5`));
if(number == 1){
    alert("d'Oh");
}
    else if (number == 2){
        alert(`homero no hagas eso`);
    }
    else if (number == 3){
        alert(`ay caramba`);
    }
    else if (number == 4){
        alert(`a la biblioteca`);
    }
    else if (number == 5){
        alert(`* ruido de chupete *`);
    }
    else{
        alert(`error`);
    }
*/
/* diapo 21
let presupuesto = parseFloat(prompt(`ingrese un monto`));
if (presupuesto >=200){
    alert(`-iremos a un carrefour a hacer las compras? -no si queremos ahorrar`);
}
    else if ((presupuesto >100) && (presupuesto <200)){
        alert(` -haremos las compras en un coto? -quizas para tu casamiento`);
    }
    else if (presupuesto <=100){
        alert(`-llegamos *todo por 33 centavos*`);
    }
*/
/* diapo 31
let cantidad = parseFloat( prompt(`ingrese un numero MAYOR que 0`));
let text = prompt(`escriba algo`);
for (let index = 0; index < cantidad; index++){
    alert(text);
}
*/
/* diapo 32
let side = parseFloat(prompt(`ingresar numero mayor que 0 y menor o igual a 4`));
for (let index = 1; index <= side; index++){
    if (side >4){
        break
    }
        alert(`lado`);
    }
*/
/* diapo 33
let alumnos=``;
for (let i = 0; i < 10; i++){
    alumnos += prompt(`ingresar nombre`) +"/";
}
alert(alumnos);
*/
/* diapo 34
let alumnos = prompt(`ingresar nombre`);
let egresados = ``;
while (alumnos != `voldemort`){
    egresados += alumnos +` `;
    alumnos = prompt(`ingresar nombre`);
}
alert(egresados);
*/
/* diapo 44
function entrada(){
    return prompt(`ingresa texto`);
}
function proceso(valor){
    return `el texto ingresado es ` +valor;
}
function salida(valor){
    alert(valor);
}
salida(proceso(entrada()));
salida(proceso(entrada()));
*/
/* diapo 45
function number(value){
    return Math.round(value);
}
for (let i=0; i<5; i++){
    let entry = prompt(`ingrese numero con decimales`);
    alert(number(entry));
}
*/