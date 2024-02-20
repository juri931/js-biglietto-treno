// 1. Prompt KM
const km = prompt ("Quanti KM devi percorrere?");

console.log ('I chilometri del viaggio sono: ' + km);

// 2. Prompt età
const age = prompt ("Quanti anni hai?");

console.log( "L'età dell'utente è di: " + age + " anni."); 

// 3. Dichiarazione prezzo base al KM
const basePrice = 0.21;

// 4. Calcolo totale
let total=km*basePrice;

document.getElementById("total").innerHTML="Il costo della corsa sarà di: €"+(Math.round(total).toFixed(2));

console.log("Il costo della corsa sarà di: €"+total+".");

// 5. Sconto minorenni 20%
let discount20 = total * 0.20;

if (age<18){
  total = (total - discount20);
  document.getElementById('discount').innerHTML = "Il tuo sconto del 20% è di: €" + (Math.round(discount20).toFixed(2));
}

// 6. Sconto over 65 anni 40%
let discount40 = total * 0.40;

if (age > 65){
  total = ((total - discount40).toFixed(2));
  document.getElementById('discount').innerHTML = "Il tuo sconto del 40% è di: €" + (Math.round(discount40).toFixed(2));
}

// Nessuno sconto
if(age>18 && age<65){
  document.getElementById('discount').innerHTML = "Non hai diritto a nessuno sconto";
}

// 7. Stampa output
document.getElementById('totalFinal').innerHTML = "Il totale del biglietto è di: €" + (Math.round(total).toFixed(2));