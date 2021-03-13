// IF STATMENT

const a = 7;
const b = 4;

if (a > b){
    console.log(a, 'yra daugiau uz', b);
}

const c = 9;
const d = 4;

if (c > d) {
    const ats = c + ' yra daugiau uz ' + d;
    console.log(ats);
}

const e = 8;
const f = 1;

if (e > f) {
    const atsakymas = `${e} yra daugiau uz ${f}`;
    console.log(atsakymas);
}

console.log('---------------------');

const g = 4;
const h = 2;

if (g < h) {
    const ghmaziau = `${g} yra maziau uz ${h}`;
    console.log(ghmaziau);
} else {
    const ghNEmaziau = `${g} yra NE maziau uz ${h}`;
    console.log(ghNEmaziau);
}

console.log('---------------------');

const j = 3;
const k = 9;

if ( j < k) {
    console.log('TAIP');
} else {
    console.log('NE');
}

const l = 66;
const m = 29;

if ( l != m) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('---------------------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka 1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka 2');
}
console.log('---------------------');

const userLoggedIn = false;

if (userLoggedIn) {
    console.log('Log out')
} else {
    console.log('Log in');
}

console.log('---------------------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);

console.log('---------------------');
 
const akys = 'labas'

if (akys === 'Melynos') {
    console.log('Kokie faini');
} else if (akys === 'Zalios') {
    console.log('Protingi');
} else if (akys === 'Rudos') {
    console.log('Melagis');
} else {
    console.log('Ar turi akis?');
}

console.log('---------------------');

if (akys === 'Melynos') {
    console.log('Kokie faini');
}

if (akys === 'Zalios') {
    console.log('Protingi');
}

if (akys === 'Rudos') {
    console.log('Melagiai');
}

if (akys !== 'Melynos' &&
    akys !== 'Zalios' &&
    akys !== 'Rudos') {
        console.log('Ar tu turi akis?');
    }