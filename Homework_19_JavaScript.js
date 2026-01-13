while (true) {
    var exercitiu = parseInt(prompt("--- Introduceti numarul exercitiului: ---"));
    switch (exercitiu) {
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 1 - Sa se verifice daca un numar este par sau impar si sa se afiseze in consola.
        case 1:
            var nr = parseInt(prompt('Introduceti un numar par sau impar: '));
            while(!parseInt(nr)) {
                nr = parseInt(prompt('Introduceti un numar par sau impar: '));}
            if ( nr > 0 && nr % 2 == 0){
                alert('Numarul este par!');
                console.log(nr + ' este un nr. par');
            } else if ( nr > 0 && !nr % 2 == 0 ) {
                alert('Numarul este impar!');
                console.log(nr+ ' este un nr. impar');
            } else {
                alert('Doar numere intregi!');
                console.log(nr + ' user not human');
            }
            nr = null;
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 2 - Sa se verifice care este cel mai mare si cel mai mic numar dintre 3 numere.
        case 2:
            while (!Number.isInteger(n1)){
                var n1 = parseInt(prompt('Introduceti primul numar: '));}
            while (!Number.isInteger(n2)){
                var n2 = parseInt(prompt('Introduceti al doilea numar: '));}
            while (!Number.isInteger(n3)){
                var n3 = parseInt(prompt('Introduceti al treilea numar: '));}

            if ( n1 >= n2 && n1 >= n3 ) {
                alert('Cel mai mare numar este: ' + n1);
                console.log(n1 + ' este cel mai mare numar');
            } else if ( n2 >= n1 && n2 >= n3 ) {
                alert('Cel mai mare numar este: ' + n2);
                console.log(n2 + ' este cel mai mare numar');
            } else {
                alert('Cel mai mare numar este: ' + n3);
                console.log(n3 + ' este cel mai mare numar');}

            [n1, n2, n3] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 3 - Sa se verifice daca un numar este negativ sau pozitiv.
        case 3:
            var trigger = true;
            while(trigger) {
                var numar = parseInt(prompt('Introduceti un nr. pozitiv sau negativ: '));
                
                if (numar > 0) {
                    alert('Numarul este pozitiv!');
                    console.log(numar + ' este un nr. pozitiv');
                    trigger = false;
                } else if ( numar < 0 ) {
                    alert('Numarul este negativ!');
                    console.log(numar + ' este un nr. negativ');
                    trigger = false;
                } else if ( numar == 0 ) {
                    alert('0 nu este nici negativ nici pozitiv!');
                    console.log(numar + ' nu este nici negativ nici pozitiv');
                    trigger = false;
                } else {
                    alert('Doar numere!')
                    console.log(numar + ' user not human');}
            }
            [numar, trigger] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 4 - Sa se scrie un program in care se introduce luna si sa se afiseze in consola.
        case 4:
            var trigger = true;
            while(trigger) {
                var luna = parseInt(prompt('Introduceti luna: '));
                switch (luna) {
                    case 1:
                        alert('Este luna Ianuarie');
                        console.log(luna + ' Este luna Ianuarie');
                        trigger = false;
                        break;
                    case 2:
                        alert('Este luna Februarie');
                        console.log(luna + ' Este luna Februarie');
                        trigger = false;
                        break;
                    case 3:
                        alert('Este luna Martie');
                        console.log(luna + ' Este luna Martie');
                        trigger = false;
                        break;
                    case 4:
                        alert('Este luna Aprilie');
                        console.log(luna + ' Este luna Aprilie');
                        trigger = false;
                        break;
                    case 5:
                        alert('Este luna Mai');
                        console.log(luna + ' Este luna Mai');
                        trigger = false;
                        break;
                    case 6:
                        alert('Este luna Iunie');
                        console.log(luna + ' Este luna Iunie');
                        trigger = false;
                        break;
                    case 7:
                        alert('Este luna Iulie');
                        console.log(luna + ' Este luna Iulie');
                        trigger = false;
                        break;
                    case 8:
                        alert('Este luna August');
                        console.log(luna + ' Este luna August');
                        trigger = false;
                        break;
                    case 9:
                        alert('Este luna Septembrie');
                        console.log(luna + ' Este luna Septembrie');
                        trigger = false;
                        break;
                    case 10:
                        alert('Este luna Octombrie');
                        console.log(luna + ' Este luna Octombrie');
                        trigger = false;
                        break;
                    case 11:
                        alert('Este luna Noiembrie');
                        console.log(luna + ' Este luna Noiembrie');
                        trigger = false;
                        break;
                    case 12:
                        alert('Este luna Decembrie');
                        console.log(luna + ' Este luna Decembrie');
                        trigger = false;
                        break;
                    default:
                        alert('Nu este numar de luna');
                        console.log(luna + ' user not human');
                        break;
                }
            }
            [luna, trigger] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 5 - Sa se calculeze media a 3 note si sa se afiseza media + peste 5 sau nu.
        case 5:
            while (!Number.isInteger(nota1) || nota1 < 0 || nota1 > 10) {
                var nota1 = parseFloat(prompt('Introduceti prima nota:'));}

            while (!Number.isInteger(nota2) || nota2 < 0 || nota2 > 10) {
                var nota2 = parseFloat(prompt('Introduceti a doua nota:'));}
                
            while (!Number.isInteger(nota3) || nota3 < 0 || nota3 > 10) {
                var nota3 = parseFloat(prompt('Introduceti a treia nota:'));}

            var media = Math.round(((nota1+nota2+nota3)/3)*100)/100;

            if ( media > 5 ) {
                alert('Media este: ' + media + '\nMedia este mai mare decat 5');
                console.log(media +' user passed test');
            } else if ( media < 5 ) {
                alert('Media este: ' + media + '\nMedia este mai mica decat 5');
                console.log(media +' user not human');
            } else {
                alert('Media este: ' + media + '\nMedia este fix 5');
                console.log(media +' user not human');
            }
            [nota1, nota2, nota3, media] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 6 - Sa se verifice daca un caracter este scris cu litera mare sau mica.
        case 6:
            var caracter = prompt("Introduceti un caracter: ");
            while (parseFloat(caracter) || 
                   caracter.charCodeAt(0) < 65 || 
                  (caracter.charCodeAt(0) > 90 && caracter.charCodeAt(0) < 97 ) ||
                   caracter.charCodeAt(0) > 122 ||
                   caracter.length != 1) {
                caracter = prompt("Doar caractere!\nIntroduceti un caracter: ");}

            if (caracter == caracter.toLowerCase()) {
                alert("Caracterul " + "\" " + caracter + " \"" + " e scris cu litera mica.");
                console.log("\" " + caracter + " \"" + " este scris cu litera mica.");
            } else if (caracter == caracter.toUpperCase()) {
                alert("Caracterul " + "\" " + caracter + " \"" + " e scris cu litera MARE.");
                console.log("\" " + caracter + " \"" + " e scris cu litera MARE.");
            }
            caracter = null;
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 7 - Sa se verifice daca o litera este o consoana sau o vocala.
        case 7:
            const vocale = ['a', 'e', 'i', 'o', 'u'];
            var litera = prompt("Introduceti o litera: ");
            while (parseFloat(litera) || 
                   litera.charCodeAt(0) < 65 || 
                  (litera.charCodeAt(0) > 90 && litera.charCodeAt(0) < 97 ) ||
                   litera.charCodeAt(0) > 122 ||
                   litera.length != 1) {
                litera = prompt("Doar litere!\nIntroduceti o litera: ");}

            if (vocale.includes(litera)) {
                alert("Litera " + "\" " + litera + " \"" + " este vocala.");
                console.log("\" " + litera + " \"" + " este vocala.");
            } else {
                alert("Litera " + "\" " + litera + " \"" + " este consoana.");
                console.log("\" " + litera + " \"" + " este consoana.");
            }
            litera = null;
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 8 - Sa se creeze un calculator simplu folosind switch (+, -, /, *, %).
        case 8:
            const operatii = ['+', '-', '/', '*', '%'];

            while (!parseFloat(no1)) {
                var no1 = parseFloat(prompt(" CALCULATOR \n\nIntroduceti primul numar:"));}
            
            var op = prompt("Introduceti operatia:");
            while (!operatii.includes(op)) {
                op = prompt("Doar ' + ', ' - ', ' / ', ' * ', ' % '\nIntroduceti operatia:")}
            
            while (!parseFloat(no2)) {
                var no2 = parseFloat(prompt("Introduceti al doilea numar:"));}

            switch (op) {
                case '+':
                    var result = no1 + no2;
                    break;
                case '-':
                    var result = no1 - no2;
                    break;
                case '/':
                    var result = no1 / no2;
                    break;
                case '*':
                    var result = no1 * no2;
                    break;
                case '%':
                    var result = no1 % no2;
                    break;
            }
            alert(no1 + ' ' + op + ' ' + no2 + " este egal cu " + result);
            [no1, no2, op, result] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 9 - Sa se verifice dacă o litera este o vocala cu ajutorul structurii switch.
        case 9:
            function esteVocala(x) {
                alert("Litera " + "\" " + x + " \"" + " este vocala.");
                console.log("\" " + x + " \"" + " este vocala.");}
            
            var litera = prompt("Introduceti o litera: ");
            while (parseFloat(litera) || 
                   litera.charCodeAt(0) < 65 || 
                  (litera.charCodeAt(0) > 90 && litera.charCodeAt(0) < 97 ) ||
                   litera.charCodeAt(0) > 122 ||
                   litera.length != 1) {
                litera = prompt("Doar litere!\nIntroduceti o litera: ");}

            switch (litera) {
                case 'a':
                    esteVocala(litera);
                    break;
                case 'e':
                    esteVocala(litera);
                    break;
                case 'i':
                    esteVocala(litera);
                    break;
                case 'o':
                    esteVocala(litera);
                    break;
                case 'u':
                    esteVocala(litera);
                    break;
                default:
                    alert("Litera " + "\" " + litera + " \"" + " nu este vocala.");
                    console.log("\" " + litera + " \"" + " nu este vocala.");
                    break;
            }
            litera = null;
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 10 - Sa se afiseze zilele dintr-o luna folosind switch.
        case 10:
            function numarZile(w, k) {
                var zileLuna = [];
                for (let i = 1; i <= k; i++) {
                    if (i % 10 == 0) { zileLuna.push(i); zileLuna.push('\n'); i++; }
                    zileLuna.push(i);}
                alert(w + " are " + k + " zile: \n" + zileLuna);
                console.log(w + zileLuna);}

            var trigger = true;
            while(trigger) {
                var luna = parseInt(prompt('Introduceti luna: '));
                switch (luna) {
                    case 1:
                        numarZile('Ianuarie', 31)
                        trigger = false;
                        break;
                    case 2:
                        numarZile('Februarie', 28)
                        trigger = false;
                        break;
                    case 3:
                        numarZile('Martie', 31)
                        trigger = false;
                        break;
                    case 4:
                        numarZile('Aprilie', 30)
                        trigger = false;
                        break;
                    case 5:
                        numarZile('May', 31)
                        trigger = false;
                        break;
                    case 6:
                        numarZile('Iunie', 30)
                        trigger = false;
                        break;
                    case 7:
                        numarZile('Iulie', 31)
                        trigger = false;
                        break;
                    case 8:
                        numarZile('August', 31)
                        trigger = false;
                        break;
                    case 9:
                        numarZile('Septembrie', 30)
                        trigger = false;
                        break;
                    case 10:
                        numarZile('Octombrie', 31)
                        trigger = false;
                        break;
                    case 11:
                        numarZile('Noiembrie', 30)
                        trigger = false;
                        break;
                    case 12:
                        numarZile('Decembrie', 31)
                        trigger = false;
                        break;
                    default:
                        alert('Nu este numar de luna');
                        console.log(luna + ' user not human');
                        break;
                }
            }
            [luna, trigger] = [null];
            break;
//////////////////////////////////////////////////////////////////////////////////////////
    }
}