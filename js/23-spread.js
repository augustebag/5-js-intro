const spread1 = [5, 9];
console.log(spread1);

//const spread2 = [5, 9, 7]
const spread2 = [...spread1, 7, 77, 777];
console.log(spread2);

const spread3 = [7, 5, 9]
console.log(spread3);

const spread4 = ['agf', 'gdf', 643, true];
console.log(spread4);

const spread5 = [...spread4, ...spread1];
console.log(spread5);

const spread6 = [...spread1, ...spread4];
console.log(spread6);

console.log('------');

// Rest operatorius 

const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum / list.length;
}

average([13, 4, 7, 8]);
const ave = average(46, 4, 8, 3, 6);
console.log(ave);

const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metu ir as mesgtu: ${list.join(', ')}.`;
}

const petras = apieMane("Petras", 64, 'obuoli', 'kriause');
console.log(petras);

console.log('------');

// Primityvios reiksmes

let a = 5;
let b = 654;

b = a;

console.log(a);
console.log(b);

a = 777;

console.log(a);
console.log(b);

console.log('----------');

// Kompleksines reiksmes

let cc = [4, 44];
let dd = [6, 87];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 1111;

console.log(cc);
console.log(dd);

console.log('----------');

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

//const sveikieji = desimtainiai.map(n => Math.round(n));

desimtainiai.forEach((n, i) => desimtainiai[i] = Math.round(n));

console.log(desimtainiai);
