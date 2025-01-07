//9-Escribe un programa que pida una frase y escriba las vocales que aparecen


let phrase = prompt("Ingrese una frase para contar vocales").trim();

phrase= phrase.toLowerCase();
console.log(phrase);

console.log(phrase.length);

let vocalesEncontradas = "";

for (let i = 0; i < phrase.length; i++) {
  let caracter = phrase.charAt(i);
  
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

