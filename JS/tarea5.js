function nombre() {
    var nombre = prompt("Hola!!, ¿Como te llamas?");
    alert("Hola " + nombre);
}

function Sum() {
    alert("Realizaremos la suma de dos numeros");
    var uno = parseInt(prompt("Introduzca un primer numero"));
    var dos = parseInt(prompt("Introduzca el segundo numero"));
    var suma = uno + dos;
    alert("El resultado es: " + suma);
}

function AND() {
    alert("ESTE ES UN EJEMPLO DE UNA COMPUERTA AND");
    alert("INGRESA UN 1 SI ES VERDAD Y UN 0 SI ES FALSO");
    var num1 = parseInt(prompt("Hoy comiste?"));
    var num2 = parseInt(prompt("Tines hambre?"));
    if (num1 == 1 && num2 == 1) {
        alert("Debes comer algo");
    } else {
        alert("No es necesario que comas algo")
    }
}

function OR() {
    alert("ESTE ES UN EJEMPLO DE UNA COMPUERTA OR");
    alert("INGRESA UN 1 SI ES VERDAD Y UN 0 SI ES FALSO");
    var num1 = parseInt(prompt("Hiciste tu tarea?"));
    var num2 = parseInt(prompt("Pasaste el examen?"));
    if (num1 == 1 || num2 == 1) {
        alert("O haces tuas tareas o repites el examen para pasar")
    } else {
        alert("Ya reprobaste, ni lo intentes");
    }
}

function NOT() {
    alert("ESTE ES UN EJEMPLO DE UNA COMPUERTA NOT");
    alert("INGRESA UN 1 SI ES VERDAD Y UN 0 SI ES FALSO");
    var num1 = parseInt(prompt("Te bañaste ayer?"));
    var num2 = parseInt(prompt("Te bañaste hoy?"));
    if (num1 == 0 && num2 == 0) {
        alert("BAÑATE COCHINO!");
    } else {
        alert("Esta bien, aun no eres un cochino");
    }
}

function onetoten() {
    var num1 = parseInt(prompt("Ingresa un numero SOLO entre 1 y 10"));
    if (num1 >= 1 && num1 <= 10) {
        alert("Excelente, tu numero es:  " + num1);
    } else {
        alert("ENTIENDE QUE SOLO DEL 1 AL 10 >:c ");
    }
}

function adivina() {
    alert("En este caso tratare de adivinar el numero que escogas");
    alert("Piensa en un numero, y escribe 1 si es verdad y 0 si es falso");
    var num1 = parseInt(prompt("Tu numero es par?"));

    if (num1 == 1) {
        var num1 = parseInt(prompt("Tu numero es mayor a 5?"));
        if (num1 == 1) {
            var num1 = parseInt(prompt("Tu numero es el 6?"));
            if (num1 == 1) {
                alert("Genial!! GANE!!");
            } else {
                alert("Ush, tu ganas :c");
            }
        } else {
            var num1 = parseInt(prompt("Tu numero es el 4?"));
            if (num1 == 1) {
                alert("Genial!! GANE!!");
            } else {
                alert("Ush, tu ganas :c");
            }
        }
    } else {
        var num1 = parseInt(prompt("Tu numero es mayor a 5?"));
        if (num1 == 1) {
            var num1 = parseInt(prompt("Tu numero es el 7?"));
            if (num1 == 1) {
                alert("Genial!! GANE!!");
            } else {
                alert("Ush, tu ganas :c");
            }
        } else {
            var num1 = parseInt(prompt("Tu numero es el 3?"));
            if (num1 == 1) {
                alert("Genial!! GANE!!");
            } else {
                alert("Ush, tu ganas :c");
            }
        }
    }


}

