/*
Gimines medyje reikia rasti kas buvo/yra vyriausias
*/

function oldest(giminesSaka) {
    return giminesSaka.age;
}

const gimine1 = {
    name: 'Petras',
    age: 40
}

const vyriausias = oldest(gimine1);
console.log(vyriausias);