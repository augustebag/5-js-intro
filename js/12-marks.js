function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;
    for (let i=0; i<pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    const avreage = suma / pazymiai.length;
    console.log(`${vardas}: pazymiu vidurkis yra ${avreage}`);
}

pazymiuVidurkis('Petras', [9, 10, 3, 4]);
pazymiuVidurkis('Maryte', [9, 3, 5, 8, 9]);
pazymiuVidurkis('Simona', [6, 8, 6, 7 ,8]);

//

const mokykla = [
    ['Petras', [9, 10, 3, 4]],
    ['Maryte', [9, 3, 5, 8, 9]],
    ['Simona', [6, 8, 6, 7 ,8]]
];

for (let i=0; i<mokykla.length; i++) {
    console.log(mokykla[i]);
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    //
    pazymiuVidurkis(name, marks);

    //kitas pvz
    pazymiuVidurkis(mokykla[i][0], mokykla[i][1]);
}