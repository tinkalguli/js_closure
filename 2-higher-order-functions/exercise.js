// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return `${word}s`;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let resutedArray = [];
    for (let element of array) {
        resutedArray.push(callback(element));
    }
    return resutedArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let element of array) {
        callback(element);
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let resutedArray = [];
    forEach(array, () => {
        resutedArray.push(callback(element))
    });
    return resutedArray;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let acc = initialValue == undefined ? array[0] : initialValue;
    forEach(array, () => {
        acc = callback(acc, element);
    });
    return acc;
}

//Extension 3
function intersection(...arrays) {
    let finalArr = arrays.map(value => [...new Set(value)]);

    return finalArr.reduce((accumulator, currentValue) => {
        accumulator.forEach((element, index) => {
            if (!currentValue.includes(element)) {
                accumulator.splice(index, 1);
            }
        });
        return accumulator;
    });
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((accumulator, currentValue) => {
        accumulator.forEach((element) => {
            if (currentValue.includes(element)) {
                currentValue.splice(currentValue.indexOf(element), 1);
            }
        });
        return accumulator.concat(currentValue);
    });
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((accumulator, currentValue, currentIndex) => {
        if (callback(currentValue) == array2[currentIndex]){
            accumulator[currentValue] = array2[currentIndex];
        }
        return accumulator;
    }, {});
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = arrCallbacks.map(a => a(currentValue));
        return accumulator;
    }, {});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
