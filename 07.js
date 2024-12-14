//7-Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let nu1 = parseInt(prompt("Ingrese un número"));
let nu2 = parseInt(prompt("Ingrese otro número"));
let nu3 = parseInt(prompt("Ingreseotro número"));

if (nu1 > nu2 && nu1 > nu3) {
    document.write ("El número más grande es: " + nu1)
} else if (nu2>nu1 && nu2>nu3){
    document.write ("El número más grande es: " + nu2)
} else if (nu3>nu1 && nu3>nu2){
    document.write ("El número más grande es: " + nu3)
} else
    document.write ("Todos los números son iguales")