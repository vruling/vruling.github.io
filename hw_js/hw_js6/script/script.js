'use strict';

function filterBy(array, dataType) {
    let outArray = array.filter(function(item) {
        return typeof (item) !== dataType ;
    });
    console.log(outArray);
    return outArray;  
}
filterBy(['hello', 'world', 23, '23', null], 'string');


