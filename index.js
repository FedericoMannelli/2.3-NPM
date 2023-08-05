// Importa il modulo "sillyname" per generare nomi casuali di personaggi divertenti.

// var generateName = require("sillyname");
import generateName from "sillyName";

// Genera un nome divertente utilizzando il pacchetto "sillyname".
var sillyName = generateName();

// Stampa il nome generato sulla console.
console.log(`My name is ${sillyName}.`);

//***************************************** */

// Importa il modulo "superheroes" per generare nomi casuali di supereroi.

// const superheroes = require("superheroes");
import superheroes from "superheroes";

// Genera un nome di supereroe casuale utilizzando il pacchetto "superheroes".
const name = superheroes.random();

// Stampa il nome di supereroe casuale sulla console.
console.log(`I am ${name}!`);


/*In sintesi, questo codice utilizza i pacchetti npm "sillyname" e "superheroes" per generare nomi casuali 
di personaggi divertenti e di supereroi, rispettivamente, e poi li stampa sulla console. 
L'uso di pacchetti esterni in Node.js permette di aggiungere funzionalità extra alle applicazioni in modo rapido e semplice, 
senza dover scrivere manualmente il codice per generare tali dati casuali.*/
