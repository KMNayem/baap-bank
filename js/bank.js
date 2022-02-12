document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // password fild
    const passwordlField = document.getElementById('user-password');
    const userPassword = passwordlField.value;


    if (userEmail == 'motu@gmail.com' && userPassword == 1122) {
        window.location.href = 'banking.html'
    }

})

module.exports = {
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    }
}