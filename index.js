// la ricerca deve essere live, a ogni lettera premuta si aggiornano i risultati

class Biblioteca {
  constructor() {
    this.elencoLibri = [];
  }

  ricercaLibri(stringa) {
    let trovato = false;

    for (let i = 0; i < this.elencoLibri.length; i++) {
      let concatenaAutoriTitoli =
        `${this.elencoLibri[i].autore} ${this.elencoLibri[i].titolo}`.toLowerCase();
      if (concatenaAutoriTitoli.includes(stringa.toLowerCase())) {
        trovato = true;
        let nuovoNodo = document.createElement('p');
        nuovoNodo.textContent = `${this.elencoLibri[i].autore} ${this.elencoLibri[i].titolo}`;
        spazioRisultati.appendChild(nuovoNodo);
      }
    }
  }
}

const Biblioteca1 = new Biblioteca();
Biblioteca1.elencoLibri = [
  { autore: 'Dante Alighieri', titolo: 'La Divina Commedia' },
  { autore: 'Dante Alighieri', titolo: 'De Vulgari Eloquentia' },
  { autore: 'Alessandro Manzoni', titolo: 'I Promessi Sposi' },
  { autore: 'Luigi Pirandello', titolo: 'Il Fu Mattia Pascal' },
  { autore: 'Luigi Pirandello', titolo: 'Uno, Nessuno, Centomila' },
  { autore: 'Luigi Pirandello', titolo: 'Mal Giocondo' },
];

const inputTesto = document.getElementById('inputTesto');
const spazioRisultati = document.getElementById('spazioRisultati');

inputTesto.addEventListener('input', () => {
  spazioRisultati.replaceChildren();
  Biblioteca1.ricercaLibri(inputTesto.value);
});

/*const inputTesto = document.getElementById('inputTesto');

inputTesto.addEventListener('input', () => {
  console.log(inputTesto.value);
}); 
ok mettiamo che la funzione sopra voglia modificarla in questo modo:
Voglio inserire in html un campo input dove ricercare la stringa di testo che la funzione deve trovare nella classe, ogni volta 

*/
