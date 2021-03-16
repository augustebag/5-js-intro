/* 

FOR LOOP (ciklas):

for () {}

*/


const rytas = ['r', 'y', 't', 'a', 's']
let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
console.log(zodis);


for (let i=0; i<5; i++) {
    console.log(i);
}
console.log('ciklo pabaiga');

for (let i=-4; i<0; i++) {
    console.log(i);
}
console.log('ciklo pabaiga');

for (let i=5; i<9; i++) {
    console.log(i);
}
console.log('ciklo pabaiga');


//
console.log('----------------');

const marks = [4, 6, 8, 1, 10, 10];
let sum = 0;

for (let i=0; i< marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;
    console.log(pazymys, sum);
}

const average = sum / marks.length;
console.log(sum, '/', marks.length, '=', average);

//
console.log('----------------');

const abc = ['a', 'b', 'c', 'd', 'e'];

for (let i=0; i<abc.length; i++) {
    const raide = abc[i];
    console.log(raide);
}

