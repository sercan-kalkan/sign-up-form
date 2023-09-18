let password = document.getElementById('password');
let confirm1 = document.getElementById('confirm');
let passError = document.createElement('p');
passError.className ='errorMessage';
passError.textContent="*Password do not match";

let button = document.getElementById('button');
button.addEventListener('click', (event) => {
    if (password.value !== confirm1.value){
        password.className='error';
        confirm1.className='error';

    }else {
        password.className ='input';
    }
    document.getElementById('form-controls').appendChild(passError);

});




