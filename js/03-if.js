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