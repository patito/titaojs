var TT = require('./titao.js');

console.log(TT.compact([0, 1, false, 2, '', 3]));

array = ["banana", "pera", "maca"];

TT.forEach(array, function (value, i, array) {
    console.log(value, i, array);
})

names = [1, [2, 3, [4, 5, [6]]]];

console.log(TT.flatten(names));

