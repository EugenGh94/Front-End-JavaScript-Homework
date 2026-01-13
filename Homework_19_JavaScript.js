//////////////////////////////////////////////////////////////////////////////////////////
var mainTrigger = true;
while (mainTrigger) {
    var exercitiu = parseInt(prompt("--- Introduceti numarul exercitiului: ---"));
    switch (exercitiu) {
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 1 - Sa se verifice daca un numar este par sau impar si sa se afiseze in consola.
        case 1:
            var nr = parseInt(prompt("Introduceti un numar par sau impar:"));
            while(!parseInt(nr)) {
                nr = parseInt(prompt("Introduceti un numar par sau impar:"));}

            console.log(`\nEx 1:`);
            console.log(`Numar introdus: '${nr}' `);

            if ( nr % 2 == 0) {
                alert("Numarul este par!");
                console.log(`${nr} este un numar par.`);
            } else if ( !nr % 2 == 0 ) {
                alert("Numarul este impar!");
                console.log(`${nr} este un numar impar.`);
            } else {
                alert("Doar numere intregi!");
                console.log(`${nr} user not human.`);
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 2 - Sa se verifice care este cel mai mare si cel mai mic numar dintre 3 numere.
        case 2:
            var n1 = parseInt(prompt("Introduceti primul numar:"));
            while (!Number.isInteger(n1)) {
                n1 = parseInt(prompt("Doar numere! Introduceti primul numar:"));}

            var n2 = parseInt(prompt("Introduceti al doilea numar:"));
            while (!Number.isInteger(n2)) {
                n2 = parseInt(prompt("Doar numere! Introduceti al doilea numar:"));}

            var n3 = parseInt(prompt("Introduceti al treilea numar:"));
            while (!Number.isInteger(n3)) {
                n3 = parseInt(prompt("Doar numere! Introduceti al treilea numar:"));}
            
            console.log(`\nEx 2:`);
            console.log(`Numere introduse: '${n1}', '${n2}', '${n3}'`);

            if ( n1 >= n2 && n1 >= n3 ) {
                alert(`Cel mai mare numar este: ${n1}`);
                console.log(`${n1} este cel mai mare numar.`);
            } else if ( n2 >= n1 && n2 >= n3 ) {
                alert(`Cel mai mare numar este: ${n2}`);
                console.log(`${n2} este cel mai mare numar.`);
            } else {
                alert(`Cel mai mare numar este: ${n3}`);
                console.log(`${n3} este cel mai mare numar.`);
            }

            if ( n1 <= n2 && n1 <= n3 ) {
                alert(`Cel mai mic numar este: ${n1}`);
                console.log(`${n1} este cel mai mic numar.`);
            } else if ( n2 <= n1 && n2 <= n3 ) {2
                alert(`Cel mai mic numar este: ${n2}`);
                console.log(`${n2} este cel mai mic numar.`);
            } else {
                alert(`Cel mai mic numar este: ${n3}`);
                console.log(`${n3} este cel mai mic numar.`);
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 3 - Sa se verifice daca un numar este negativ sau pozitiv.
        case 3:
            var trigger = true;
            while(trigger) {
                var numar = parseInt(prompt("Introduceti un nr. pozitiv sau negativ:"));
                
                console.log(`\nEx 3:`);
                console.log(`Numar introdus: '${numar}'`);

                if (numar > 0) {
                    alert(`${numar} este un nr. pozitiv.`);
                    console.log(`${numar} este pozitiv.`);
                    trigger = false;
                } else if ( numar < 0 ) {
                    alert(`${numar} este un nr. negativ.`);
                    console.log(`${numar} este negativ.`);
                    trigger = false;
                } else if ( numar == 0 ) {
                    alert(`${numar} nu este nici negativ nici pozitiv.`);
                    console.log(`${numar} nu este nici negativ nici pozitiv.`);
                    trigger = false;
                } else {
                    alert("Doar numere!")
                    console.log(`${numar} user not human!`);}
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 4 - Sa se scrie un program in care se introduce luna si sa se afiseze in consola.
        case 4:
            var trigger = true;
            while(trigger) {
                var luna = parseInt(prompt("Introduceti luna:"));

                console.log(`\nEx 4:`);
                console.log(`Luna introdusa: '${luna}'`);
                
                switch (luna) {
                    case 1:
                        alert(`${luna} este luna Ianuarie.`);
                        console.log(`${luna} este luna Ianuarie.`);
                        trigger = false;
                        break;
                    case 2:
                        alert(`${luna} este luna Februarie.`);
                        console.log(`${luna} este luna Februarie.`);
                        trigger = false;
                        break;
                    case 3:
                        alert(`${luna} este luna Martie.`);
                        console.log(`${luna} este luna Martie.`);
                        trigger = false;
                        break;
                    case 4:
                        alert(`${luna} este luna Aprilie.`);
                        console.log(`${luna} este luna Aprilie.`);
                        trigger = false;
                        break;
                    case 5:
                        alert(`${luna} este luna Mai.`);
                        console.log(`${luna} este luna Mai.`);
                        trigger = false;
                        break;
                    case 6:
                        alert(`${luna} este luna Iunie.`);
                        console.log(`${luna} este luna Iunie.`);
                        trigger = false;
                        break;
                    case 7:
                        alert(`${luna} este luna Iulie.`);
                        console.log(`${luna} este luna Iulie.`);
                        trigger = false;
                        break;
                    case 8:
                        alert(`${luna} este luna August.`);
                        console.log(`${luna} este luna August.`);
                        trigger = false;
                        break;
                    case 9:
                        alert(`${luna} este luna Septembrie.`);
                        console.log(`${luna} este luna Septembrie.`);
                        trigger = false;
                        break;
                    case 10:
                        alert(`${luna} este luna Octombrie.`);
                        console.log(`${luna} este luna Octombrie.`);
                        trigger = false;
                        break;
                    case 11:
                        alert(`${luna} este luna Noiembrie.`);
                        console.log(`${luna} este luna Noiembrie.`);
                        trigger = false;
                        break;
                    case 12:
                        alert(`${luna} este luna Decembrie.`);
                        console.log(`${luna} este luna Decembrie.`);
                        trigger = false;
                        break;
                    default:
                        alert(`${luna} nu este numar de luna!`);
                        console.log(`${luna} user not human.`);
                        break;
                }
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Ex. 5 - Sa se calculeze media a 3 note si sa se afiseza media + peste 5 sau nu.
        case 5:
            var nota1 = parseFloat(prompt("Introduceti prima nota:"));
            while (!parseFloat(nota1) || nota1 < 0 || nota1 > 10) {
                nota1 = parseFloat(prompt("Doar numere, introduceti prima nota:"));}
            
            var nota2 = parseFloat(prompt("Introduceti a doua nota:"));
            while (!parseFloat(nota2) || nota2 < 0 || nota2 > 10) {
                nota2 = parseFloat(prompt("Doar numere, introduceti a doua nota:"));}
            
            var nota3 = parseFloat(prompt("Introduceti a treia nota:"));
            while (!parseFloat(nota3) || nota3 < 0 || nota3 > 10) {
                nota3 = parseFloat(prompt("Doar numere, introduceti a treia nota:"));}

            console.log(`\nEx 5:`);
            console.log(`Note introdusa: '${nota1}', '${nota2}', '${nota3}'`);
            
            var media = Math.round(((nota1+nota2+nota3)/3)*100)/100;

            if ( media > 5 ) {
                alert(`Media este: ${media}\nMedia este mai mare decat 5.`);
                console.log(`Media ${media} este mai mare decat 5.`);
            } else if ( media < 5 ) {
                alert(`Media este: ${media}\nMedia este mai mica decat 5.`);
                console.log(`Media ${media} este mai mica decat 5.`);
            } else {
                alert(`Media este: ${media}\nMedia este fix 5.`);
                console.log(`Media ${media} este fix 5.`);
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 6 - Sa se verifice daca un caracter este scris cu litera mare sau mica.
        case 6:
            var caracter = prompt("Introduceti un caracter:");
            while (parseFloat(caracter) || 
                   caracter.charCodeAt(0) < 65 || 
                  (caracter.charCodeAt(0) > 90 && caracter.charCodeAt(0) < 97 ) ||
                   caracter.charCodeAt(0) > 122 ||
                   caracter.length != 1) {
                caracter = prompt("Doar caractere!\nIntroduceti un caracter:");}

            console.log(`\nEx 6:`);
            console.log(`Caracterul introdus: '${caracter}'`);

            if (caracter == caracter.toLowerCase()) {
                alert(`Caracterul '${caracter}' e scris cu litera mica.`);
                console.log(`'${caracter}' e scris cu litera mica.`);
            } else if (caracter == caracter.toUpperCase()) {
                alert(`Caracterul '${caracter}' e scris cu litera MARE.`);
                console.log(`'${caracter}' e scris cu litera MARE.`);
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 7 - Sa se verifice daca o litera este o consoana sau o vocala.
        case 7:
            const vocale = ['a', 'e', 'i', 'o', 'u'];
            var litera = prompt("Introduceti o litera:");
            while (parseFloat(litera) || 
                   litera.charCodeAt(0) < 65 || 
                  (litera.charCodeAt(0) > 90 && litera.charCodeAt(0) < 97 ) ||
                   litera.charCodeAt(0) > 122 ||
                   litera.length != 1) {
                litera = prompt("Doar litere!\nIntroduceti o litera:");}

            console.log(`\nEx 7:`);
            console.log(`Litera introdusa: '${litera}'`);

            if (vocale.includes(litera.toLowerCase())) {
                alert(`Litera '${litera}' este vocala.`);
                console.log(`'${litera}' este vocala.`);
            } else {
                alert(`Litera '${litera}' este consoana.`);
                console.log(`'${litera}' este consoana.`);
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 8 - Sa se creeze un calculator simplu folosind switch (+, -, /, *, %).
        case 8:
            const operatii = ['+', '-', '/', '*', '%'];

            var no1 = parseFloat(prompt(" CALCULATOR \n\nIntroduceti primul numar:"));
            while (!parseFloat(no1)) {
                no1 = parseFloat(prompt("Doar numere!\nIntroduceti primul numar:"));}
            
            var op = prompt("Introduceti operatia:");
            while (!operatii.includes(op)) {
                op = prompt("Doar '+', '-', '/', '*', '%'\nIntroduceti operatia:")}
            
            var no2 = parseFloat(prompt("Introduceti al doilea numar:"));
            while (!parseFloat(no2)) {
                no2 = parseFloat(prompt("Doar numere!\nIntroduceti al doilea numar:"));}

            console.log(`\nEx 8:`);
            console.log(`Numere introduse: '${no1}', '${no2}'`);
            console.log(`Operatia introdusa: '${op}'`);

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
            alert(`${no1} ${op} ${no2} este egal cu ${Math.round(result*100)/100}`);
            console.log(`${no1} ${op} ${no2} = ${Math.round(result*100)/100}`);
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 9 - Sa se verifice daca o litera este o vocala cu ajutorul structurii switch.
        case 9:
            function esteVocala(x) {
                alert(`Litera '${x}' este vocala.`);
                console.log(`'${x}' este vocala.`);}
            
            var litera = prompt("Introduceti o litera:");
            while (parseFloat(litera) || 
                   litera.charCodeAt(0) < 65 || 
                  (litera.charCodeAt(0) > 90 && litera.charCodeAt(0) < 97 ) ||
                   litera.charCodeAt(0) > 122 ||
                   litera.length != 1) {
                litera = prompt("Doar litere!\nIntroduceti o litera:");}

            console.log(`\nEx 9:`);
            console.log(`Litera introdusa: '${litera}'`);

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
                    alert(`Litera '${litera}' nu este vocala.`);
                    console.log(`'${litera}' nu este vocala.`);
                    break;
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
// Ex. 10 - Sa se afiseze zilele dintr-o luna folosind switch.
        case 10:
            function numarZile(w, k) {
                var zileLuna = [];
                for (let i = 1; i <= k; i++) {zileLuna.push(` ${i}`);}

                alert(`${w} are ${k} de zile:\n${zileLuna}`);
                console.log(`${w} ${zileLuna}`);}

            var trigger = true;
            while(trigger) {
                var luna = parseInt(prompt("Introduceti luna:"));

                console.log(`\nEx 10:`);
                console.log(`Luna introdusa: '${luna}'`);
                
                switch (luna) {
                    case 1:
                        numarZile("Ianuarie", 31)
                        trigger = false;
                        break;
                    case 2:
                        numarZile("Februarie", 28)
                        trigger = false;
                        break;
                    case 3:
                        numarZile("Martie", 31)
                        trigger = false;
                        break;
                    case 4:
                        numarZile("Aprilie", 30)
                        trigger = false;
                        break;
                    case 5:
                        numarZile("Mai", 31)
                        trigger = false;
                        break;
                    case 6:
                        numarZile("Iunie", 30)
                        trigger = false;
                        break;
                    case 7:
                        numarZile("Iulie", 31)
                        trigger = false;
                        break;
                    case 8:
                        numarZile("August", 31)
                        trigger = false;
                        break;
                    case 9:
                        numarZile("Septembrie", 30)
                        trigger = false;
                        break;
                    case 10:
                        numarZile("Octombrie", 31)
                        trigger = false;
                        break;
                    case 11:
                        numarZile("Noiembrie", 30)
                        trigger = false;
                        break;
                    case 12:
                        numarZile("Decembrie", 31)
                        trigger = false;
                        break;
                    default:
                        alert("Nu este numar de luna");
                        console.log(`${luna} eser not human.`);
                        break;
                }
            }
            break;
//////////////////////////////////////////////////////////////////////////////////////////
//  Exit loop:
        case 0:
            mainTrigger = false;
            break;}}
//////////////////////////////////////////////////////////////////////////////////////