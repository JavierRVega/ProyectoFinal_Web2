
///////////////////////////////////------carrito de frutas-------/////////////////////////////////////7
function carrito(){
const carrito = [];
//window.alert("Bienvenido! ");
while( confirm("¿Desea agregar algo a su carrito?")){

    const add = prompt("¿Qué desea agregar?");
   
    carrito.push(add);
}

window.alert("Esto está en su carrito: \n" + carrito);
console.log(carrito);

add = prompt("Si desea borrar el ultimo elemento, presione 1");
if (add == 1);
{
    carrito.pop();
    window.alert("Esto está en su carrito: \n" + carrito);
    console.log(carrito);
}

}