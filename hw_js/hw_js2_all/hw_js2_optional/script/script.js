'use strict';

let m,
    n;
do{
do{
	m = prompt("Enter the first number");
}while(m != parseInt(m, 10));

do{
	n = prompt("Enter the second number");
}while(n != parseInt(n, 10));
}while(m>n);
function simpleNumbers(m, n){
    let res = [];
    for(let i = m, flag = false; i <= n; i++, flag = 0){
        for(let j = 2; j * 2 <= i; j++){
            if(i % j == 0){
                flag = true;
                break;
            }
        }
        if(!flag)
            res[res.length] = i;
    }
    return res;
}
console.log(simpleNumbers(m,n));

