const a = 8;
const b = 5;
const c = 99;
const d = 88;
const e = 2;
const f = 3;


function desimteriopaSuma (pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(a,b);
desimteriopaSuma(c,d);
desimteriopaSuma(e,f);

//

function labas (vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas} ir man ${amzius} metai ir gyvenu ${vietovardis}.`);
}

labas (`Petras`, 88, "Vilnius");
labas (`Maryte`, 87, "Kaune");
labas (`Juozas`, 68,  "Palangoje");
labas (`Ona`, 34, "Klaipedoje");

// f(x)=x*x;

function kvadratu (x) {
    console.log(x*x);
}

kvadratu(5);
kvadratu(-3);
kvadratu(59);
kvadratu(0);
kvadratu(3.4);
