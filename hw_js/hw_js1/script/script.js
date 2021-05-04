'use strict';

let name;
let age;
do{
	name = prompt('What is your name?', 'Vasiliy');
}while(!name.match(/^[a-zA-Z_ ]*$/) || name==="");
do{
	age = prompt('How old are you?', 19);
}while(!parseInt(age));

if(age<18){
	alert(`You are not allowed to visit this website`);
}
else if(18<=age && age<=22)
{
let question = confirm("Are you sure you want to continue?");
if(question==true)
{
alert(`Welcome, ${name}`);
}
else{
alert('You are not allowed to visit this website');
}
}
else{
alert(`Welcome, ${name}`);
}