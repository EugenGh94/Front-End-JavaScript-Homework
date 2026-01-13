//////////////////////////////////////////////////////////////////////////////////////
var trigger = false;
while(!trigger){
    var numEx = parseInt(prompt("--- Introduceti numarul exercitiului: ---"));
    switch (numEx) {
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 1 Functie pentru gasirea celui mai mare numar dintr-un array
        case 1:
            console.log(`\nEx 1:`);
            const initArr = [];
            
            function getNumber() {
                var nr = prompt("Introduceti primul nr. din array:");
                initArr.push(nr);
                return initArr;}

            getNumber();
            getNumber();
            getNumber();
            getNumber();

            function getMaxArr (arr) {
                var maxArr = arr[0];

                for (let i = 0; i <= arr.length - 1; i++) {
                    if (arr[i] > maxArr) {
                        maxArr = arr[i];}
                    }

                alert(`Valoarea maxima din array-ul [${arr}] este: ${maxArr}`);
                console.log("\nEx 1:");
                console.log(arr);
                console.log(`Valoarea maxima este: ${maxArr}`);
            }

            getMaxArr(initArr);
            break;
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 2 Functie pentru conversia temperaturilor
        case 2:
            console.log(`\nEx 2:`);
            var temp = parseInt(prompt("Introduceti temperatura:"));
            var unit = prompt("Introduceti unitatea de masura:");

            function convertTemperature (t, u) {
                var newTemp = 0;
                
                if (u.toLowerCase() == 'f') {
                    newTemp = Math.round(((t -32) / 1.8)*10)/10;
                    alert(`Temperatura ${t}°F este egala cu ${newTemp}°C`);
                    console.log(`Temperatura ${t}°F este egala cu ${newTemp}°C`);

                } else if (u.toLowerCase() == 'c') {
                    newTemp = Math.round((t * 1.8 + 32)*10)/10;
                    alert(`Temperatura ${t}°C este egala cu ${newTemp}°F`);
                    console.log(`Temperatura ${t}°C este egala cu ${newTemp}°F`);}
            }

            convertTemperature(temp, unit);
//////////////////////////////////////////////////////////////////////////////////////
//  Ex. 3 Functie pentru verificarea unui palindrom
        case 3:
            console.log(`\nEx 3:`);
            var userString = prompt("Introduceti un sir de caractere (string):");
            console.log(`Sir de char. introdus: ${userString}`);

            function isAlphaNumeric (xString) {
                let simpleString = [];
                for (let i = 0; i < xString.length; i++) {
                    if ((xString.charCodeAt(i) > 47 && xString.charCodeAt(i) < 58) ||
                        (xString.charCodeAt(i) > 64 && xString.charCodeAt(i) < 91) ||
                        (xString.charCodeAt(i) > 96 && xString.charCodeAt(i) < 123)) {
                    simpleString.push(xString[i]);}}
                return simpleString.join('');}

            console.log(`Sir de char. alfa-numeric: ${isAlphaNumeric(userString)}`);

            function findMiddle (yString) {
                let slowPtr = 0;
                let fastPtr = 0;
                while (yString[fastPtr+1] != null && yString[fastPtr+2] != null) {
                    slowPtr++;
                    fastPtr++; fastPtr++;}
                return slowPtr;}

            function isPalindrome (zString) {
                let newString = isAlphaNumeric(zString);
                let headPtr = 0;
                let tailPtr = -1;
                for (let i = 0; i <= findMiddle(newString); i++) {
                    if (newString[headPtr].toLowerCase() === 
                        newString.at(tailPtr).toLowerCase()) {
                        headPtr++; tailPtr--;
                    } else return false;}
                return true;}

            if (isPalindrome(userString)) {
                alert(`\u2705 Este Palindrom, bravo!`);
                console.log(`\u2705 Este Palindrom, bravo!`)}
            else {
                alert(`\u26D4 Nu este Palindrom!`);
                console.log(`\u26D4 Nu este Palindrom.`)}
            break;
//////////////////////////////////////////////////////////////////////////////////////
// Ex. 3 Short version
        case 4:
            console.log(`\nEx 3:`);
            function isPalindrom() {
            var u = prompt("Introduceti un string:").toLowerCase();
            for (let x = 0, y = -1, z = 0; u[z+1] != null && u[z+2] != null ; z++, z++) {
                if (u[x] === u.at(y)) {x++; y--;}
                else return false;}
            return true;}
        console.log(isPalindrom());
        break;
//////////////////////////////////////////////////////////////////////////////////////
//  Exit loop:
        case 0:
            trigger = true;
            break;}}
//////////////////////////////////////////////////////////////////////////////////////