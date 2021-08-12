//qua scrivo codice
var variabile1;
let variabile2;
//ho dichiarato due variabili, posso metterci dei tipi base di js
variabile1 = "Questa è una stringa";
variabile2 = 123;
// js non è fortemente tipizzato come c#
//best practise usare let e non usare var!
//dichiarazione array
let array = [1, 2, 3];
let arrayString = ["1", "2", "3"];
let uno = array[0];
array[2] = 4;
let count = array.length;
for (let i = 0; i < count; i++) {
    if (false) {
        return 0;
    }
}
//funzioni
function myfunction(param1) {
    
    param1++;
    alert(param1);
}

myfunction(count);

function firstFunction(param1, param2) {
    return param1 + param2; //che operazione è? non si sa perchè le variabili non sono formtemente tipizzate!
}

//typescript aggiunge la tipizzazione forte a js