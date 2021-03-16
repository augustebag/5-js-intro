const nuo = 1;
const iki = 9;
const daliklis = 7;
let kiekis = 0;

for (let i=nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}
const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);