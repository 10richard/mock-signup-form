let requirement = document.querySelector('.requirement');
let pass1 = document.querySelector('input#password');
let pass2 = document.querySelector('input#confirm_password');

function password_validation() {
    if (pass1.value == pass2.value) {
        change_color('green');
        change_text('match');
    } else {
        change_color('red');
        change_text('no match');
    }
}

//changes border color of inputs and change text color of requirement - (green = passwords match) : (red = passwords don't match)
function change_color(color) {
    if (color == 'green') {
        pass1.className = 'valid';
        pass2.className = 'valid';
        requirement.style.color = 'green';
    } else {
        pass1.className = 'invalid';
        pass2.className = 'invalid';
        requirement.style.color = 'red';
    }
}

function change_text(result) {
    if (result == 'match') return requirement.textContent = 'Passwords match';
    requirement.textContent = 'Passwords do not match';
}

pass1.addEventListener('keyup', () => {
    if (pass1.value.length > 0) password_validation();
})

pass2.addEventListener('keyup', () => {
    if (pass1.value.length > 0) password_validation();
})