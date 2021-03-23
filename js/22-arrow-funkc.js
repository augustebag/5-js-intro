// Iprasta funkcija

function suma(a,b) {
    return a + b;
}
const atsSuma = suma(8, 5);
console.log(atsSuma);

 // -----------------
 // Bevardes funkcijos priskyrimas kintamajam

const atimtis = function (a, b) {
    return a - b;
}

const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);

 // -----------------

// Arrow function priskyrimas kintamajam
 const daugyba = (a, b) => {
    return a * b;
}

const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

 // -----------------

// Arrow function priskyrimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return

const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

 // -----------------

// Arrow function priskyrimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return
// jei paramteru yra tik 1, tai galima nerasyti ()

const kvadratu = a => a * a;

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);