// // document.getElementById('signup').addEventListener('click', loadText);

// // function loadText(){
// //     var xhr = new XMLHttpRequest();

// //     xhr.open('GET', '../app/signup.html', true);

// //     xhr.onload = function(){
// //         if(this.status == 200){
// //             // console.log(this.responseText);
// //             document.getElementById('content').innerHTML = this.responseText;
// //         }
// //     }
// //     xhr.onerror = function (){
// //         console.log('Page not found...');
// //     }

// //     xhr.send();
// // }




// // var login = document.getElementById('login');
// var signup = document.getElementById('signup');

// // login.addEventListener('click', first);
// signup.addEventListener('click', second);


// // function first() {
// //     fetch('../assets/tet.txt')
// //     .then(function (response) {
// //         return response.text()
        
// //     })
// //     .then(function (loginPage) {
// //         document.getElementsByClassName('.content').innerHTML = loginPage
        
// //     })
// // }

// function second() {

// }


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