function digits (skaicius) {
    // input validacija
    if (typeof skaicius !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }
    // logika
    // return result
    return 0;
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
//console.log(digits(5), '->', 1);
//console.log(digits(781), '->', 3);
//console.log(digits(37060123456), '->', 11);