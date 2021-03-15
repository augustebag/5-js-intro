/*

SWITCH STATEMENT:
switch () {case, break, default}

*/

const animal = 'labas';
switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknow animal');
        break;
}

console.log('----------');

// Kitas pavyzdys

const day = 1;

switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2: 
        console.log('ant');
        break;
    case 3:
        console.log('tre');
        break;
    case 4:
        console.log('ket');
        break;
    case 5: 
        console.log('penkt');
        break;
    case 6:
        console.log('sest');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja');
        break;
}

switch (day) {
    case 1:
        console.log('darbo diena');
        break;
    case 2:
        console.log('darbo diena');
        break;
    case 3:
        console.log('darbo diena');
        break;
}