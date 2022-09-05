/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Recupero l'elemento pulsante dall'html
const button = document.getElementById("newGame-btn");

// Aggiungo evento click al pulsante
button.addEventListener("click", function () {
    const MAX_NUMBER = 5;
    // Dichiaro un'array che conterrà la seguenza numerica random generata
    // per confrontarla successivamente con la sequenza immessa dall'utente
    const sequenceArrayNumber = [];

    // Al click del pulsante lo nascondo per visualizzare la serie di numeri da dover ricordare
    button.style.display = "none";

    // Recupero l'elemnto "areaNumber" che conterrà i numeri da mostrare
    const areaNumber = document.querySelector(".areaNumber");

    // Creo 5 celle in cui verranno mostrati i numeri random
    for(let i = 0; i < MAX_NUMBER; i++){

        // Genero un valore random da mostrare nella cella
        let valueNumber = Math.floor(Math.random() * 10);
        // Creo l'elemento cella che conterrà il valore random generato
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // Inserisco il valore numerico random nella cella
        cell.innerHTML = valueNumber;
        // Inserisco il valore numerico generato nell'array
        sequenceArrayNumber.push(valueNumber);

        areaNumber.append(cell);
    }

});