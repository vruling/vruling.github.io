'use strict';

function createNewUser() {
    this.firstName = prompt('Enter the first name:');           
    this.lastName = prompt('Enter the last name:'); 
    this.birthday = prompt('Enter the your birthday dd.mm.yyyy:'); 
    this.getAge = function(){
    	let now = new Date();
		let nowYear = now.getFullYear();
		let userDate = +this.birthday.substring(0, 2);
        let userMonth = +this.birthday.substring(3, 5);
        let userYear = +this.birthday.substring(6, 10);
        let birthDate = new Date(userYear, userMonth-1, userDate);
        let birthYear = birthDate.getFullYear();
        let age = nowYear - birthYear;
        if (now < new Date(birthDate.setFullYear(nowYear))) {
         age = age - 1;
         }
        return age;
    }
    this.getLogin = function(){
    	let getLogin = (this.firstName.substr(0, 1) + this.lastName).toLowerCase();
    	return getLogin;
    }
    this.getPassword = function(){
    	let getPassword = (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.substring(6,10));
    	return getPassword;
    }
}
let newUser = new createNewUser();
console.log(`Your age is: ${newUser.getAge()}`);
console.log(`Your login is: ${newUser.getLogin()}`);
console.log(`Your password is: ${newUser.getPassword()}`);