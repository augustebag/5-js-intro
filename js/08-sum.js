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

const nuo = 0;
const iki = 4;
let suma = 0;

for (let i = 0; i <= iki; i++) {
    suma += i;
}

 // const ats = 'Intervale nuo' + nuo + ' iki ' + iki + ' suma yra ' + suma + '.';

 const ats = `Intervale nuo ${nuo}  iki ${iki} suma yra ${suma}.`;

console.log(ats);