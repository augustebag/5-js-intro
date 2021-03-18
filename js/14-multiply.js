
function daugyba (a, b) {

    //parametru validacija
    //jeigu, a yra ne skaicius, grazinti klaidos pranesima
    if (typeof a !=='number') {
       return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(a) || a === Infinity || a === -Infinity) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`; 
    }

    //jeigu, b yra ne skaicius, grazinti klaidos pranesima
    if (typeof b !=='number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
     }
     if (isNaN(b) || b === Infinity || b === -Infinity) {
        return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
     }

    //logika
    const rez = a * b;

    // rezultato grazinimas
    return rez;
}

console.log(daugyba([2], [3]));
console.log(daugyba([45], 4));
console.log(daugyba(5, [3]));
console.log(daugyba('trys', 'penki'));
console.log(daugyba(3, 'penki'));
console.log(daugyba(true, false));
console.log(daugyba(3, NaN));
console.log(daugyba(NaN, NaN)); 
console.log(daugyba(['adf', 4534]));
console.log(daugyba([4534], 8));
console.log(daugyba(-3, Infinity));
console.log(daugyba(3, -Infinity));

console.log(daugyba(5, 7));
console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(-44, 55), '->', -2420);
console.log(daugyba(-44, 0), '->', 0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 5463), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);
console.log(daugyba(3, 5), '->', 15);
