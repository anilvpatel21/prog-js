// const { add, divide, max} = require('lodash');
// const _gi = require('lodash');
//console.log(_gi.max());
const _try = require('lodash');
var arr = [
    {
        name: "Shreya",
        maths: 80,
        science: 10,
        total: 90
    },
    {
        name: "Mitesh",
        maths: 60,
        science: 66,
        total: 126
    }
];

key = "science";

// code readbility //development time reduce
// error handling

console.log(_try.maxBy(arr, function(o){
    return o[key]
}));