'use strict';

document.getElementById("price").onblur = function () {
    let tempPrice = +price.value;
    price.innerText = tempPrice;    
    if (tempPrice <= 0 || !parseInt(tempPrice)) {
        document.getElementById('tip').innerText = `Please enter correct price`;
        document.getElementById('price').classList.add('redOutline');
    } 
    else {
        document.getElementById('price').classList.remove('redOutline');
        document.getElementById('tip').innerText = ``;
        document.getElementById("price").value = "";

        let spanList = document.getElementById('spanList');
        let spanNode = document.createElement('span');
        spanNode.setAttribute('onclick', `removespan(this);`);
        let textNode = document.createTextNode(`Current price: ${tempPrice} $`);
        spanNode.appendChild(textNode);
        spanList.appendChild(spanNode);
    }
};

let removespan = function(span) {
    span.parentNode.removeChild(span);
};
