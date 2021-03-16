/* 
Suskaiciuosit ka gausime susumavus skaicius intervale tarip (imtinai):
Atsakymas:
Intervale nuo 0 iki 4 suma yra 10.

0-0 = 0
0-4 = 10
0-100 = 5050
574-815 = didelis sk
-50-50 = 0
-70-30 = -2020

*/

const nuo1 = 10;
const iki1 = 14;
let suma1 = 0;

for (let i = nuo1; i <= iki1; i++) {
    suma1 += i;
}
const ats1 = `Intervale nuo ${nuo1} iki ${iki1} suma yra ${suma1}.`;
console.log(ats1);

console.log('------------');

const nuo = 0;
const iki = 4;
let suma = 0;

for (let i = 0; i <= iki; i++) {
    suma += i;
}

 // const ats = 'Intervale nuo' + nuo + ' iki ' + iki + ' suma yra ' + suma + '.';

 const ats = `Intervale nuo ${nuo}  iki ${iki} suma yra ${suma}.`;

console.log(ats);

console.log('---------');

const nuo2 = 3;
const iki2 = 10;
let suma2 = 0;

if (nuo2 <= iki2) {
    for (let i = nuo2; i <= iki2; i++) {
        suma2 += i;
    }
} else {
    for (let i = iki2; i <= nuo2; i++) {
        suma2 += i;
    }
}

const ats2 = `Intervale nuo ${nuo2}  iki ${iki2} suma yra ${suma2}.`;
console.log(ats2);