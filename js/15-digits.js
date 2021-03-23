function digits (skaicius) {
    // input validacija
    if (typeof skaicius !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }
    // logika
    const absoliutas = Math.abs(skaicius);
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    // jei skaicius turi desimtaine dali, tai sumaziname 1 vientetu

    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    // jei skaicius yra neigiamas, tai sumaziname 1 vienetu

    if (skaicius < 0) {
        skaitmenuKiekis--;
    }
 
    // return result

    return skaitmenuKiekis;
}

console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([5643]));
console.log(digits(digits));
console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(3.1415), '->', 5)
console.log(digits(-456), '->', 3);