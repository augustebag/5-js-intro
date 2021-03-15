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

const day = 7;

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
    case 7:
        console.log('sekm');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja');
        break;
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('Tokios dienos nera');
}

// Procesas

const process = 3;

if (process === 1) {
    console.log('paimti puodeli');
} else if (process === 2) {
    console.log('isideti arbatos');
} else if (process === 3) {
    console.log('isideti saldikli');
} else if (process === 4) {
    console.log('ipilti vandens');
} else if (process === 4) {
    console.log('ismaisyti arbata');
} else if (process === 5) {
    console.log('gerti');
}

//

switch (process) {
    case 1:
        console.log('paimti puodeli');
        break;
    case 2:
        console.log('isideti arbatos');
        break;
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti arbata');
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai');
}