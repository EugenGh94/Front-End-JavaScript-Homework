//////////////////////////////////////////////////////////////////////////////////////
var trigger = true;
while(trigger){
    var numEx = parseInt(prompt("--- Introduceti numarul exercitiului: ---"));
    switch (numEx) {
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 1 - Suma elementelor dintr-un array.
        case 1:
            const numbers = [1, 2, 3, 4, 5];
            var sumArr = 0;
            
            for (let i = 0; i <= numbers.length - 1; i++) {
                sumArr += numbers[i];
            }
            alert(`Suma elementelor array-ului [${numbers}] este: ${sumArr}`);
            console.log("\nEx 1:");
            console.log(numbers);
            console.log(`Suma este: ${sumArr}`);
            break;
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 2 - Gasirea valorii maximale dintr-un array.
        case 2:
            const numere = [10, 20, 5, 25, 30];
            var maxArr = null;

            for (let i = 0; i <= numere.length - 1; i++) {
                if (numere[i] > maxArr) {
                    maxArr = numere[i];}
                }
            alert(`Valoarea maxima din array-ul [${numere}] este: ${maxArr}`);
            console.log("\nEx 2:");
            console.log(numere);
            console.log(`Valoarea maxima este: ${maxArr}`);
            break;
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 3 - Parcurgerea unui tablou multidimensional.
        case 3:
            const nestedArray = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
            var elem = [];

            console.log("\nEx 3:");0
            console.log(nestedArray);

            for (let i = 0; i <= nestedArray.length - 1; i++) {
                console.log(`\n[Array ${i+1}]`);
                for (let j = 0; j <= nestedArray[i].length -1; j++) {
                    console.log(`Elem. array: ${nestedArray[i][j]}`);
                    elem.push(` ${nestedArray[i][j]}`);}
                }
            alert(`Elem. array-ului [[1, 2],[3, 4, 5],[6, 7, 8, 9]] sunt:\n ${elem}`);
            break;
//////////////////////////////////////////////////////////////////////////////////////
//  Exit loop:
        case 0:
            trigger = false;
            break;}}
//////////////////////////////////////////////////////////////////////////////////////