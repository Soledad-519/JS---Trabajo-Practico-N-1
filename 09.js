//9-Escribe un programa que pida una frase y escriba las vocales que aparecen


let frase = prompt("Ingrese una frase para contar vocales").trim();

frase = frase.toLowerCase();
console.log(frase);

console.log(frase.length);

let vocalesEncontradas = "";

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i)
  if(
    caracter=== "a"||
    caracter=== "e" ||
    caracter === "i" ||
    caracter === "o"||
    caracter === "u"
  ){
    vocalesEncontradas+=caracter
 
    

  }
  
}
console.log(`Cantidad de vocales encontradas: ${vocalesEncontradas.length} (${vocalesEncontradas})`);

