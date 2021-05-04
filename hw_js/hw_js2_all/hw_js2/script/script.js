'use strict';

let A=0,
    B=prompt("Enter the number"),
    mass=[];
for(A=1;A<=B;A++)
{
    if(A % 5 == 0){
        mass.push(A);
    }   
}
if(mass.length != 0)
{
        console.log(mass);
}
else{ 
        console.log('Sorry, no numbers');
}