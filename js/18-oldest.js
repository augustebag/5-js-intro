/*
Gimines medyje reikia rasti kas buvo/yra vyriausias
*/

function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i=0; i<asmuo.children.length; i++) {
            const child = asmuo.children[i];
            childAge = oldest(child);
            
            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }

    return biggestAge;
}

function oldestWithName(asmuo) {
    let oldestName = asmuo.name;
    let biggestAge = asmuo.age;

    if (asmuo.children) {
        for (let i=0; i<asmuo.children.length; i++) {
            const child = asmuo.children[i];
           
            const oldestChild = oldestWithName(child);
            
            if (oldestChild.age > biggestAge) {
                biggestAge = oldestChild.age;
                oldestName = oldestChild.name;
            }
        }
    }

    return {
        name: oldestName,
        age: biggestAge
    };
}

const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        { 
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Saule',
                    age: 46
                },
                {
                    name: 'Juozas',
                    age: 90
                },
            ]
        },
        {
            name: 'Jonas',
            age: 41,
            children: [
                {
                    name: 'Jadvyga',
                    age: 24,
                    children: [
                        {
                            name: 'Marius',
                            age: 55
                        },
                        {
                            name: 'Azuolas',
                            age: 99
                        },
                    ]
                },
                {
                    name: 'Marija',
                    age: 56
                },
            ]
        },
    ]
}

const vyriausias = oldest(gimine1);
console.log(vyriausias);

const vyriausiasAsmuo = oldestWithName(gimine1);
console.log(vyriausiasAsmuo);