'use strict';

function createNewUser() {
    this.firstName = prompt('Enter the first name:');           
    this.lastName = prompt('Enter the last name:'); 
    this.getLogin = function(){
    let getLogin = (this.firstName.substr(0, 1) + this.lastName).toLowerCase();
    return getLogin;
    }
}
let newUser = new createNewUser();
console.log(`Your login is: ${newUser.getLogin()}`);

