var fs = require('fs');

function logTimeElapse (startTime, prefix) {
    console.log(prefix + (Date.now() - startTime) + 'ms');
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
    logSeparator();
    testIndexArray(len, 100);
    testIndexObj(len, 100);

    logSeparator();
    testIndexArray(len, 1000);
    testIndexObj(len, 1000);

    logSeparator();
    testIndexArray(len, 10000);
    testIndexObj(len, 10000);

    logSeparator();
    testIndexArray(len, 100000);
    testIndexObj(len, 100000);

    logSeparator();
    testIndexArray(len, 1000000);
    testIndexObj(len, 1000000);
}

function logSeparator () {
    console.log('--------------------------------------');
}

batchTest(100);
batchTest(1000);
batchTest(10000);
