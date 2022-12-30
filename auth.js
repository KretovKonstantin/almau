var AuthLogin = document.querySelector('#AuthLogin');
var AuthPassword = document.querySelector('#AuthPassword');
let authorize = document.querySelector('#Authorize');


authorize.addEventListener ("click", CheckUser);


function CheckUser(){
    let i = 0;
    while (i < localStorage.length){
        a = localStorage.key(i);
        if (AuthLogin.value == localStorage.key(i) && AuthPassword.value == localStorage.getItem(a)){
            console.log('kaif');
            break;
        }
        else {
            i++;
            alert('Что-то пошло не так. Попробуйте еще раз');
        }
    }
}