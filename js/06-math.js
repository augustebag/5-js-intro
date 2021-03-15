// VEIKSMU SEKA

const pazymiai = [3, 5, 7];
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];
const vidurkis = suma / pazymiai.length;

console.log(vidurkis);

//
console.log('-------------');

const marks = [10, 8, 6, 4];
const count = marks.length;
let sum = 0;
sum = sum + marks[0];        // 0 + 10
sum = sum + marks[1];
console.log('sum:', sum);
sum = sum + marks[2];
console.log('sum:', sum);
sum = sum + marks[3];

const average = sum / count;
console.log(average);

//
console.log('-------------');

const marks2 = [2, 4, 7, 8];
let sum2 = 0;
console.log(sum2);
sum2 = sum2 + marks2[0];     // 0 + 2
console.log(sum2);
sum2 = sum2 + marks2[1];
console.log(sum2);
sum2 = sum2 + marks2[2];
console.log(sum2);

/*
ANTRAS PVZ 

const marks2 = [2, 4, 7, 8];
let sum2 = 0;
console.log(sum2);
sum2 += marks2[0];     // 0 + 2
console.log(sum2);
sum2 += marks2[1];
console.log(sum2);
sum2 += marks2[2];
console.log(sum2);
*/


// TRECIAS PVZ

const marks3 = [2, 4, 7, 8];
let sum3 = 0;
let markIndex3 = 0;
console.log(sum3);

sum3 += marks3[markIndex3];     // 0 + 2
console.log(sum3);

markIndex3 += 1;
sum3 += marks3[markIndex3];
console.log(sum3);

markIndex3 += 1;
sum3 += marks3[markIndex3];
console.log(sum3);

//
console.log('-------------');

const rytas = ['r', 'y', 't', 'a', 's']
let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex];
console.log(zodis);

rytasIndex ++;
zodis += rytas[rytasIndex];
console.log(zodis);

rytasIndex += 1;
zodis += rytas[rytasIndex];
console.log(zodis);

rytasIndex += 1;
zodis += rytas[rytasIndex];
console.log(zodis);

//
console.log('-------------');

let a = 5;
a++;
console.log(a);
a++;
console.log(a);
a++;
console.log(a);

/*

ARBA

let a = 5;
console.log(a++);
console.log(a++);
console.log(a++);

ARBA 
let a = 5;
console.log(++a);
console.log(++a);
console.log(++a);

*/

//
console.log('-------------');

const labas = ['l', 'a', 'b', 'a', 's'];
let zod = '';
let zodIndex = 0;

zod += labas[zodIndex++];
zod += labas[zodIndex++];
zod += labas[zodIndex++];
zod += labas[zodIndex++];

console.log(zod);