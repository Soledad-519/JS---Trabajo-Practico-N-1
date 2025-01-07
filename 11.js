//11-Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = +(prompt("Escribe un número:"));

    // Declarar la variable divisores
    let divisores = [];

    if (numero % 2 === 0) {
        divisores.push(2);
    }
    if (numero % 3 === 0) {
        divisores.push(3);
    }
    if (numero % 5 === 0) {
        divisores.push(5);
    }
    if (numero % 7 === 0) {
        divisores.push(7);
    }


    
    if (divisores.length > 0) {
        console.log(`El número ${numero} es divisible por: ${divisores.join(', ')}.`);
    } else {
        console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
    }