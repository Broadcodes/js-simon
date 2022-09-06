/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const MAX_NUMBER = 5;

// Recupero l'elemento pulsante dall'html
const button = document.getElementById("newGame-btn");

// Dichiaro un'array che conterrà la seguenza numerica random generata
// per confrontarla successivamente con la sequenza immessa dall'utente
const sequenceArrayNumber = [];

// Aggiungo evento click al pulsante
button.addEventListener("click", function () {

    // Al click del pulsante lo nascondo per visualizzare la serie di numeri da dover ricordare
    button.style.display = "none";

    // Recupero l'elemento "areaNumber" che conterrà i numeri da mostrare
    const areaNumber = document.querySelector(".areaNumber");

    // Recupero gli elementi "areaInputNumber" e "numberValueUser" che permetteranno di scrivere la sequenza numerica da parte dell'utente
    const areaInputNumber = document.querySelector(".areaInputNumber");
    const numberValueUser = document.getElementById("numberValueUser");

    // Imposto il timer per visualizzare i numeri per un max di 30 secondi
    setTimeout(function () {
        areaNumber.classList.add("disabled");
        // Mostro a schermo l'area per inserire la stringa da tastiera
        areaInputNumber.classList.remove("disabled");
    }, 30 * 1000);

    // Creo 5 celle in cui verranno mostrati i numeri random
    for (let i = 0; i < MAX_NUMBER; i++) {

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

// Recupero l'elemento pulsante "Invia" dall'html
const inputUserButton = document.getElementById("numberValueUser-btn");
// Aggiungo evento click al pulsante
inputUserButton.addEventListener("click", userValueNumber);

function userValueNumber() {

    let numbersGuessed = 0;
    const numberCorrect = [];
    
    // Condizione che mi assicura che il valore inserito è effettivamente un valore numerico
    if (!isNaN(numberValueUser.value) && numberValueUser.value.length <= MAX_NUMBER) {
        numberValueUser.style.backgroundColor = "#fff";
        // Converto la sequenza numerica immessa dall'utente in array
        const arrayNumberUser = numberValueUser.value.split("");

        // Verifico se i valori inseriti dall'utente corrispondono alla sequenza generata random
        for (let i = 0; i < arrayNumberUser.length; i++) {

            if (sequenceArrayNumber.includes(parseInt(arrayNumberUser[i]))) {
                ++numbersGuessed;
                if(!numberCorrect.includes(arrayNumberUser[i])){
                    numberCorrect.push(arrayNumberUser[i]);
                }
            }
        }

        // Recupero l'elemento "result" dall'html
        const result = document.querySelector(".result");
        // Creo un nuovo elemento P per visualizzare il messaggio risultato
        const elementResult = document.createElement("p");
        // Visualizzo messaggio
        if(numbersGuessed === 1){
            elementResult.innerHTML = `Hai inserito ${numbersGuessed} numero corretto: il numero indovinato è ${numberCorrect}`;
        } else {
            elementResult.innerHTML = `Hai inserito ${numbersGuessed} numeri corretti: i numeri indovinati sono ${numberCorrect.join(" - ")}`;
        }

        inputUserButton.disabled = true;
        result.append(elementResult);

    } else {
        numberValueUser.value = "";
        numberValueUser.style.backgroundColor = "red";
        userValueNumber;
    }
}