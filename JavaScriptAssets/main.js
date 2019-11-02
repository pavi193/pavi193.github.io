
"use strict";

const init = function(e){
    let signup = document.querySelector("#signup");
    let login = document.querySelector("#login");

    signup.addEventListener('click', function (){
        window.document.location = '../app/signup.html';
    });

    login.addEventListener('click',function (){
        window.document.location = '../app/login.html';
    });
};

document.addEventListener('DOMContentLoaded', function () {
    init();
});