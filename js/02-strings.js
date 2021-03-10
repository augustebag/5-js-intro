// VISOS KOMBINACIJOS DARBUI SU TEKSTU

const menuo = "Kovo";
const diena = "desimta";

const dayString = "Siandien yra: " + menuo + " " + diena + ".";
console.log(dayString);

console.log("---------");
const dvigubaKabute = 'Cia yra dviguba (") kabute.';
console.log(dvigubaKabute);

const viengubaKabute = 'Cia yra vienguba (\') kabute.';
console.log(viengubaKabute);

const viengubaDviguba = "Turiu vienguba (\') ir dviguba (\") kabutes.";
console.log(viengubaDviguba);

const dvigubaVienguba = "Turiu dviguba (\") ir vienguba (\') kabutes.";
console.log(dvigubaVienguba);

console.log("---------");
const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                 </nav>';
console.log(navHTML);

console.log("---------");
const vardas = 'Petras';
const petrasIntro = 'Mano vardas: ' + vardas + '.';
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick); 

const marks = [4, 6, 8, 3, 10];
const markSentence = `Naujausias pazymys: ${marks[marks.length -1]}.`;
console.log(markSentence);

const markSentence0 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence0);

const markSentence1 = `Antras pazymys: ${marks[1]}.`;
console.log(markSentence1 );

console.log("---------");
const navHTML2 = `<nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                 </nav>`;
console.log(navHTML2);