    //6-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let n1 = parseInt(prompt("ingrese un numero"));
let n2 = parseInt(prompt("ingrese otro número"));

if (n1 > n2) {
document.write("el numero mas grande es:" + n1);
} else if(n2 > n1) {
document.write("el numero mas grande es:" + n2);
} else{
    document.write("Ambos números son iguales.");
}