//10-Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = +(prompt("Escribe un número"));

if (numero % 2 === 0) {
    console.log(`El ${numero} es divisible por 2.`);
    alert(`El ${numero} es divisible por 2.`);
  } else if (numero % 3 === 0) {
    console.log(`El ${numero} es divisible por 3.`);
    alert(`El ${numero} es divisible por 3.`);
  } else if (numero % 5 === 0) {
    console.log(`El ${numero} es divisible por 5.`);
    alert(`El ${numero} es divisible por 5.`);
  } else if (numero % 7 === 0) {
    console.log(`El ${numero} es divisible por 7.`);
    alert(`El ${numero} es divisible por 7.`);
  } else {
    console.log(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
    alert(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
  }

