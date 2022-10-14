new Set([1, 1, 2, 2, 3, 4]) // returns {1,2,3,4}

[...new Set("referee")].join(""); // returns "ref"

let m = new Map();          
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);               // returns 0: {Array(3) => true}
                                       //         1: { Array(3) => false }


const hasDuplicate = array => new Set(array).size !== array.length      // returns true if duplicate present, false if none.


function vowelFinder(letter) {
    return "aeiou".includes(letter);
}

function vowelCount(string) {
    let vowelMap = new Map();

    for (let letter of string) {
        let lowerCased = letter.toLowerCase();
        if (vowelFinder(lowerCased)) {
            if (vowelMap.has(lowerCased)) {
                vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1);
            } else {
                vowelMap.set(lowerCased, 1);
            }
        }
    } 
    return vowelMap;
}