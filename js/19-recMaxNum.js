/*

Rasti didziausia skaiciu bet kokio sudetingumo array.

Salygos: 
- visi array elementai yra:
     - skaicius;
     - array
- visi skaiciai yra normalus

*/

function recMaxNum(list) {
    let big = -Infinity;

    for (let i = 0; i<list.length; i++) {
        const num = list[i];
        
        if (Array.isArray(num)) {
            // kai teviniame sarase randa array
            const bigChild = recMaxNum(num);
            if (bigChild > big) {
                big = bigChild;
            }
        } else {
            // kai teviniame sarase randa skaiciu

            if (num > big) {
            big = num;
            }
        }
    }
    return big;
}

const data = [1, -5, [6, 7, 444], 57, 8];
const biggest = recMaxNum(data);
console.log(biggest);
