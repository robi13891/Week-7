function selezionaPiatti() {
    
    let piatti = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(piatti);
    let contoOrdine = document.getElementById("contoOrdine");
    console.log(contoOrdine);
    contoOrdine.innerText = '';
    let somma = 0;
    for (let i = 0; i < piatti.length; i++) {
        somma += parseInt(piatti[i].value);
    }

    contoOrdine.innerText = somma;
    
}

function Prenota() {
    alert("Hai prenotato correttamente!");
}