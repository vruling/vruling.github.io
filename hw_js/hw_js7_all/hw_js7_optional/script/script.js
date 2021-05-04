'use strict';

function showList(list) {
    function arrToUl(root, arr) {
        let ul = document.createElement('ul');
        let li;
        root.appendChild(ul);
        arr.forEach(function(item) {
            if (Array.isArray(item)) {
                arrToUl(li, item);
                return;
            }
            li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        });
    }
    let div = document.getElementById('myList');
    arrToUl(div, list);
    let i = 10;
    let timerId = setInterval(function() {
        document.getElementById("timer").innerText = i+"s";
        if (i === 0) {
        document.getElementById('myList').classList.add("none");
        document.getElementById('timer').classList.add("none");
        document.getElementById('timer1').classList.add("none");
        document.getElementById('exere').classList.add("none");
        }
        i--;
    }, 1000);
}
showList(['hello', 'full name', ["Vasiliy","Osadchiy"], 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

