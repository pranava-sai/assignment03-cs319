const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});

signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});

const loginForm = document.querySelector('.sign-in form');
const signupForm = document.querySelector('.sign-up form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    // Perform login authentication here
    console.log('Login:', username, password);
    // Reset form fields
    loginForm.reset();
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    // Perform signup authentication here
    console.log('Signup:', username, email, password);
    // Reset form fields
    signupForm.reset();
});