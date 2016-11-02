var fs = require('fs');

var logs = "";

logs += 'Speed comparison between indexOf Array and access properties of Object : \n';
logs += '==============\n';
logBlankRow();

function logTimeElapse (startTime, prefix) {
    logs += prefix + (Date.now() - startTime) + 'ms\n';
}

function getArr (len) {
    var arr = [];

    for (var i = 0; i < len; i++) {
        arr.push('a' + i);
    }

    return arr;
}

function getObj (len) {
    var obj = {};

    for (var i = 0; i < len; i++) {
        obj['a' + i] = i;
    }

    return obj;
}


function testIndexArray (arrLen, searchTimes) {

    var arr = getArr(arrLen),
        st = Date.now(),
        tmp;

    for (var i = 0; i < searchTimes; i++) {
        tmp = arr.indexOf('a' + i % arrLen);
    }

    logTimeElapse(st, `Index of an  array of length ${arrLen} for ${searchTimes} times takes `);
}

function testIndexObj (objLen, searchTimes) {

    var obj = getObj(objLen),
        st = Date.now(),
        tmp;

    for (var i = 0; i < searchTimes; i++) {
        tmp = obj['a' + i % objLen];
    }

    logTimeElapse(st, `Index of an object of length ${objLen} for ${searchTimes} times takes `);
}

function batchTest (len) {
    logBlankRow();
    testIndexArray(len, 100);
    testIndexObj(len, 100);

    logBlankRow();
    testIndexArray(len, 1000);
    testIndexObj(len, 1000);

    logBlankRow();
    testIndexArray(len, 10000);
    testIndexObj(len, 10000);

    logBlankRow();
    testIndexArray(len, 100000);
    testIndexObj(len, 100000);

    logBlankRow();
    testIndexArray(len, 1000000);
    testIndexObj(len, 1000000);
}

function logBlankRow () {
    logs += '\n';
}

batchTest(100);
logBlankRow();
batchTest(1000);
logBlankRow();
// batchTest(10000);

fs.writeFile('./README.md', logs, 'utf8');
console.log(logs);
