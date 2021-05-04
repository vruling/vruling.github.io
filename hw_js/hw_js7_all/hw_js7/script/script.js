'use strict';

function showList(list) {
    let array = [];
    let newArray = [];
    function maps(newObject) {

        for (let key in newObject) {
                array.push(newObject[key]);
                newArray = array.map(word => `<li>${word}</li>`);;
                list1.innerHTML = newArray.join('');            
        }
    }
    maps(list);
}
showList( ['1', '2', '3', 'sea', 'user', 23]);

